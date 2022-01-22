import express, { Application, Request, Response } from "express";
import icons, { SimpleIcon } from "simple-icons";
import { Card } from "./card";
import { Skills } from "./skills";
import { COLORS } from "./themes";
import { LEVEL, DEFAULTS, toNumber, toBoolean, LEVEL_ORDER } from "./utils";
import fetch from 'node-fetch';

const app: Application = express();

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log(`Server on http://localhost:${app.get("port")}/`);
});

app.get('/skill', async (request: Request, response: Response) => {
    let skillItems: Array<{ skill: SimpleIcon, level: LEVEL }> = [];
    const id = request.query['id'] ?? '';
    let level = request.query['level'] ?? LEVEL.UNKNOWN;
    const skills = request.query['skills'] ?? '';

    // theming and design
    const theme = COLORS[request.query['theme']?.toString()] ?? COLORS[DEFAULTS.THEME];
    const row = toNumber(request.query['row'], DEFAULTS.MAX_ROW);
    const column = toNumber(request.query['column'], DEFAULTS.MAX_COLUMN);
    const marginW = toNumber(request.query['margin-w'], DEFAULTS.MARGIN_W);
    const marginH = toNumber(request.query['margin-h'], DEFAULTS.MARGIN_H);

    const noBg = toBoolean(request.query['no-bg'] ?? DEFAULTS.NO_BACKGROUND);
    const noFrame = toBoolean(request.query['no-frame'] ?? DEFAULTS.NO_FRAME);

    const skill = icons.Get(id?.toString());
    if (!skill && !skills) {
        response.sendStatus(404);
        return;
    }

    if (skill) {
        level = LEVEL_ORDER.some(lo => lo === level) ? level : LEVEL.UNKNOWN;
        skillItems.push({ skill: skill, level: LEVEL[level.toString()] });
    }

    if (skills) {
        try {
            const fetchResponse = await fetch(skills.toString());
            const skillData = await fetchResponse.json()
            // try get url amnd parse valid file
            skillItems = skillItems.concat(new Skills(skillData).parse());
        } catch (e) {
            console.error(e);
        }
    }

    response.status(200)
        .setHeader("Content-Type", "image/svg+xml")
        .send(new Card(skillItems, theme, row, column, DEFAULTS.PANEL_SIZE, marginW, marginH, noBg, noFrame).render());
});