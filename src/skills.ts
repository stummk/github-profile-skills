import icons, { SimpleIcon } from "simple-icons";
import { LEVEL, LEVEL_ORDER } from "./utils";

export class Skills {

    constructor(private jsonList: Array<{ skill: string, level?: string }>) { }

    parse(): Array<{ skill: SimpleIcon, level: LEVEL }> {
        const skills: Array<{ skill: SimpleIcon, level: LEVEL }> = [];
        this.jsonList.forEach(skill => {
            const availableSkill = icons.Get(skill.skill?.toString());
            if (!availableSkill) return;
            const checkedLevel = LEVEL_ORDER.some(lo => lo === skill.level) ? skill.level : LEVEL.UNKNOWN;
            skills.push({ skill: availableSkill, level: LEVEL[checkedLevel.toString()] });
        });
        return skills;
    }
}