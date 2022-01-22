import { SimpleIcon } from "simple-icons";
import { Skill } from "./skill";
import { Theme } from "./themes";
import { LEVEL } from "./utils";

export class Card {
    private width = 0;
    private height = 0;

    constructor(
        private skills: Array<{ skill: SimpleIcon, level: LEVEL }>,
        private theme: Theme,
        private maxRow: number,
        private maxColumn: number,
        private panelSize: number,
        private marginWidth: number,
        private marginHeight: number,
        private noBackground: boolean,
        private noFrame: boolean,
    ) {
        this.width = panelSize * this.maxColumn + this.marginWidth * (this.maxColumn - 1);
    }

    render(): string {
        const row = this.getRow();
        this.height = this.getHeight(row);

        return `
        <svg
          width="${this.width}"
          height="${this.height}"
          viewBox="0 0 ${this.width} ${this.height}"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
            ${this.renderSkills()}
        </svg>`;;
    }

    renderSkills(): string {
        return this.skills.reduce(
            (sum: string, skillItem: { skill: SimpleIcon, level: LEVEL }, i: number) => {
                const currentColumn = i % this.maxColumn;
                const currentRow = Math.floor(i / this.maxColumn);
                const x = this.panelSize * currentColumn + this.marginWidth * currentColumn;
                const y = this.panelSize * currentRow + this.marginHeight * currentRow;
                return sum + new Skill(skillItem.skill, skillItem.level, this.theme, x, y, this.panelSize, this.noBackground, this.noFrame).render();
            },
            "",
        );
    }

    private getRow() {
        let row = Math.floor((this.skills.length - 1) / this.maxColumn) + 1;
        if (row > this.maxRow) {
            row = this.maxRow;
        }
        return row;
    }

    private getHeight(row: number) {
        // Calculate the height of card from turns
        return this.panelSize * row + this.marginHeight * (row - 1);
    }
}