export const DEFAULTS = {
    THEME: 'default',
    PANEL_SIZE: 110,
    MAX_COLUMN: 10,
    MAX_ROW: 10,
    MARGIN_W: 0,
    MARGIN_H: 0,
    NO_BACKGROUND: false,
    NO_FRAME: false
}

export enum LEVEL {
    UNKNOWN = -1,
    C = 25,
    B = 50,
    A = 75,
    S = 100
}

export const LEVEL_ORDER = Object.values(LEVEL);

export function toBoolean(queryParam): boolean {
    return Boolean((queryParam || "").replace(/\s*(false|null|undefined|0)\s*/i, ""));
}

export function toNumber(queryParam, defaultValue: number): number {
    if (!queryParam) return defaultValue;
    const parsed = parseInt(queryParam);
    if (isNaN(parsed)) return defaultValue;
    return parsed;
}