<p align="center">
  <h2 align="center">Github Profile Skills</h2>
  <p align="center">Add your skills with skill level to your github readme</p>
</p>
<p align="center">
  <a href="https://github.com/stummk/github-profile-skills/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/stummk/github-profile-skills?style=for-the-badge"> 
  </a>
  <a href="https://github.com/stummk/github-profile-skills/network/members">
   <img alt="GitHub forks" src="https://img.shields.io/github/forks/stummk/github-profile-skills?style=for-the-badge">
  </a>  
  <a href="https://github.com/stummk/github-profile-skills/stargazers">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/stummk/github-profile-skills?style=for-the-badge">
  </a>
    <a href="https://github.com/stummk/github-profile-skills/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/stummk/github-profile-skills?style=for-the-badge">
  </a>
</p>

# Quick Start

Add the following code to your readme to load one skill.

```
[![Skills](https://github-profile-skills-one.vercel.app/skill?id=github&level=S)](https://github.com/stummk/github-profile-skills)
```

<p align="center">
  <img alig src="https://github-profile-skills-one.vercel.app/skill?id=github&level=S" />
</p>

You will probably want to load multiple skills. You ca define a json file with your desired skills and levels and than request this list directly instead of loading every skill. Your json file should look something like:

```json
[
    {
        "skill": "github",
        "level": "S"
    },
    ...
]
```

To load the list add the following code to your readme.

```
[![Skills](https://github-profile-skills-one.vercel.app/skill?skills=<Url to your json file>)](https://github.com/stummk/github-profile-skills)
```

## About Skills

Skills will be laoded from the [Simple Icons project](https://simpleicons.org/). Currently all available icons in version `6.6.0` of the simple icons are supported.

Skills can be requested as single skill by the query parameter `id=` or in a json file with the `"skill"` object key. The value must be the `slug` of the icon provided by the simple icons project. Not supported skills will be ignored.

If you specify a list of skills the `id`request parameter is optional.

# About Levels

Available levels for your skill are `UNKNOWN` `D` `C` `B` `A` `S`

| Level-Key       | Description                                                                                |
| ---------- | ------------------------------------------------------------------------------------------ |
| S          | I am a pro in this technology. Level at 100%                                               |
| A          | I have very good knwolegde in this technology. Level at 75%                                |
| B          | I have good knowledge. Level at 50%                                                        |
| C          | I have worked a long time ago. So I understand something, Level at 25%.                    |
| D          | I have heard about it or used it once. Level at 0%.|
| UNKNOWN    | No level for that skill will be displayed. Use this or leave level empty if you do not want to show your level for one certain skill                                                                          |

With `&level=<levelkey>` you can set one level for a skill in the request. If you want to load a list of skills you can set the leven in the json file. For example:

```json
[
    {
        "skill": "github",
        "level": "S"
    }
]
```

## Use theme

Add optional parameter of the theme.

```
[![Skills](https://github-profile-skills-one.vercel.app/skill?id=github&level=S&theme=nord)](https://github.com/stummk/github-profile-skills)
```
<p align="center">
  <img width="100%" src="https://github-profile-skills-one.vercel.app/skill?id=github&level=S&theme=nord">
</p>

Available themes are flat, onedark, gruvbox, dracula, monokai, chalk, nord, alduin, darkhub, juicyfresh, oldie, radical, onestar, discord, algolia, gitdimmed, tokyonight, matrix, apprentice and dark_dimmed.

# Optional Request Parameters

* [skills](#about-skills)

* [level](#about-levels)

* [column](#specify-the-maximum-row--column-size)

* [row](#specify-the-maximum-row--column-size)

* [theme](#use-theme)

* [margin-w](#margins)

* [margin-h](#margins)

* [no-bg](#transparent-background)

* [no-frame](#hide-frames)

## Specify the maximum row & column size

You can specify the maximum row and column size. The skills, whuich exceed the range of both row and column will be hidden.

`Default: column=10 row=10`

Restrict only row
```
https://github-profile-skills-one.vercel.app/skill?id=github&level=S&row=2
```

Restrict only column
```
https://github-profile-skills-one.vercel.app/skill?id=github&level=S&column=2
```

Restrict row & column
```
https://github-profile-skills-one.vercel.app/skill?id=github&level=S&row=2&column=3
```

## Margins

You can put a margins in the width and height between skill cards. 

`Default: margin-w=0`

`Default: margin-h=0`

Specify only margin width

```
https://github-profile-skills-one.vercel.app/skill?id=github&margin-w=15
```

Specify only margin height

```
https://github-profile-skills-one.vercel.app/skill?id=github&level=Smargin-h=15
```

Specify both margins

```
https://github-profile-skills-one.vercel.app/skill?id=github&level=Smargin-h=15&margin-w=15
```

## Transparent background

You can set the background of the skill cardss to transparent.

`Default: no-bg=false`

```
https://github-profile-skills-one.vercel.app/skill?id=github&no-bg=true
```

<p align="center">
  <img src="https://github-profile-skills-one.vercel.app/skill?id=github&theme=nord&no-bg=true">
</p>


## Hide frames

You can hide the frames around the skill cards.

`Default: no-frame=false`

```
https://github-profile-skills-one.vercel.app/skill?id=github&no-frame=true
```

<p align="center">
  <img  src="https://github-profile-skills-one.vercel.app/skill?id=github&theme=nord&no-frame=true">
</p>


# Contribution Guide

## Environment

* [Node.js](https://nodejs.org/en/)
* npm
* [Vercel](https://vercel.com/)

## Local Run

You can either run the project locally with nodemon or use your vercel account to run a local vercel dev server to build the server while programming.

To run with nodemon just run the command `npm run dev` in the root folder of the project. To run the code with a local vercel server run `npm run start_vercel`. If you don't have installed vercel install it with `npm i -g vercel`.

Open localhost from your browser. http://localhost:3000/skill?id=github&level=S
