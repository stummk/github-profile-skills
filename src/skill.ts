import { SimpleIcon } from "simple-icons";
import { Theme } from "./themes";
import { LEVEL } from "./utils";

export class Skill {
  constructor(
    private skill: SimpleIcon,
    private level: LEVEL,
    private theme: Theme,
    private x: number,
    private y: number,
    private panelSize: number,
    private noBackground: boolean,
    private noFrame: boolean) { }

  render(): string {
    const { BACKGROUND: PRIMARY, TITLE: SECONDARY } = this.theme;
    return `
        <svg
          x="${this.x}"
          y="${this.y}"
          width="${this.panelSize}"
          height="${this.panelSize}"
          viewBox="0 0 ${this.panelSize} ${this.panelSize}"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            rx="4.5"
            width="${this.panelSize - 1}"
            height="${this.panelSize - 1}"
            stroke="#e1e4e8"
            fill="${PRIMARY}"
            stroke-opacity="${this.noFrame ? '0' : '1'}"
            fill-opacity="${this.noBackground ? '0' : '1'}"
          />
          ${this.renderIcon()}
          <text x="50%" y="18" text-anchor="middle" font-family="Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji" font-weight="bold" font-size="${this.skill.title.length > 16 ? '10' : '12'}" fill="${SECONDARY}">${this.skill.title}</text>
          ${this.renderLevel()}
        </svg>
        `;
  }

  // render icon
  private renderIcon(): string {
    return `
      <svg 
        x="30" y="30" width="100" height="100"
        viewBox="0 0 50 50"
        fill="${this.invertColor(this.skill.hex)}"
        xmlns="http://www.w3.org/2000/svg"
      >
      ${this.skill.svg.match(/<path\b([\s\S]*?)>/g)}
      </svg>
    `;
  }

  private invertColor(color: string): string {
    const bothLite = this.isColorLight(this.theme.BACKGROUND) && this.isColorLight(color);
    const bothDark = !this.isColorLight(this.theme.BACKGROUND) && !this.isColorLight(color);
    if (bothDark || bothLite) {
      // return theme level base color or white, when no level set.
      return this.levelColor(bothLite);
    }
    return '#' + color;
  }

  private isColorLight(color: string): boolean {
    const rgb = parseInt(color.replace('#', ''), 16);   // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >>  8) & 0xff;  // extract green
    const b = (rgb >>  0) & 0xff;  // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma > 60;
  }

  private levelColor(darkColor: boolean): string {
    switch(this.level) {
      case LEVEL.C: return this.theme.C_LEVEL_BASE;
      case LEVEL.B: return this.theme.B_LEVEL_BASE;
      case LEVEL.A: return this.theme.A_LEVEL_BASE;
      case LEVEL.S: return this.theme.S_LEVEL_BASE;
      default: return darkColor ? '#000000' : '#FFFFFF';
    }
  }

  private renderLevel(): string {
    if (this.level === LEVEL.UNKNOWN || this.level.toString() === 'UNKNOWN') {
      return;
    } 
    const maxWidth = 80;
    return `
    <style>
    @keyframes ${this.skill.slug}RankAnimation {
      from {
        width: 0px;
      }
      to {
        width: ${maxWidth * (this.level.valueOf() / 100)}px;
      }
    }
    #${this.skill.slug}-rank-progress{
      animation: ${this.skill.slug}RankAnimation 1s forwards ease-in-out;
    }
    </style>
    <rect
      x="15"
      y="95"
      rx="1"
      width="${maxWidth}"
      height="3.2"
      opacity="0.3"
      fill="${this.theme.LEVEL_BAR}"
    />
    <rect
      id="${this.skill.slug}-rank-progress"
      x="15"
      y="95"
      rx="1"
      height="3.2"
      fill="${this.theme.LEVEL_BAR}"
    />
    `;
  }
}