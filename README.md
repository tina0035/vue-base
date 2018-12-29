# generator-toppro-vue-base

[![npm](https://img.shields.io/badge/license-MIT-yellowgreen.svg)]()
[![npm](https://img.shields.io/badge/node-%3E%3D8-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-5.6.0-orange.svg)]()
[![npm](https://img.shields.io/badge/yeoman-2.0.5-brightgreen.svg)]()

> Vue scaffolding based on Yeoman.

## Installation

```bash
npm install -g yo
```

And then:

```bash
git clone git@github.com:topproio/vue-base.git
```

Add the template of the repo to Yeoman's list through `npm link`.

```
cd vue-base
npm link
```

Then generate your vue project in new folder:

```
yo
...
```

### How to start Vue project?

Goto the root directory, and run

```
npm install
```

Then run `husky:update` after `git init`

```
npm run husky:update
```

Developing Happy

```
npm run dev
```

## Problems

### OSX permission denied

```
Error: EACCES: permission denied, open '/Users/<user>/.config/configstore/yo.json'
You don't have access to this file.
...
```

Solve it:

```
sudo chmod g+rwx ~ ~/.config ~/.config/configstore
```

## Configuration

### UI framework

1. [elementUI](http://element-cn.eleme.io/#/zh-CN/component/installation)
2. [iView](https://www.iviewui.com/docs/guide/install)

### Data store

1. [Vuex](https://vuex.vuejs.org/zh/guide/)
2. Vue Bus

### Utils

1. [Lodash](https://lodash.com/docs/4.17.10)
2. [Underscore](https://underscorejs.org/)
