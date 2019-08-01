# Breadcrumb

> breadcrumb directive component for vue

# Installation

```shell
npm i @litt1e-p/breadcrumb --save
```

# Usage

### just add a directive `v-breadcrumb` in the html element after adding router meta with `title` value or router's name by default

Example:


- use with only one vue directive

```js
<div v-breadcrumb></div>
```

- use with html element attributes

```js
<div v-breadcrumb="{separator: '>', paths: [{name: 'App', to: '/'}, {name: 'Module'}, {name: 'Index'},]}"></div>
```

# Screenshot

<img src="https://github.com/litt1e-p/breadcrumb/raw/master/screenshot.png" width=500>

<img src="https://github.com/litt1e-p/breadcrumb/raw/master/screenshot2.png" width=500>

# License

MIT
