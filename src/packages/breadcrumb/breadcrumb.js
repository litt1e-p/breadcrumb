// The MIT License (MIT)
//
// Copyright (c) 2019-2020 litt1e-p ( https://github.com/litt1e-p )
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import './index.scss'

const DEFAULT_OPTIONS = {
  separator: '/',
  paths: [],
  routable: true
};

export default class Breadcrumb {
  
  constructor (el, opts = {}, userOpts = {}) {
    this._opts = {
      ...Breadcrumb._defaults,
      ...Breadcrumb.filterOpts(opts, userOpts)
    };
    this._$el = el;
    this._$tpl = this._createBreadcrumbElement();
    this._mount();
  }

  destroy () {
    this._unmount();
  }
  
  _mount () {
    if (!this._$tpl || !this._$el) {
      return;
    }
    this._$el.insertAdjacentElement('afterbegin', this._$tpl);
  }

  _unmount () {
    if (this._$tpl && this._$tpl.parentNode) {
        this._$tpl.parentNode.removeChild(this._$tpl);
    }
  }

  _createBreadcrumbElement () {
    if (!this.opts || !this.opts.paths) {
      return null
    }
    let _$p = document.createElement('div');
    _$p.setAttribute('class', 'breadcrumb');
    this.opts.paths.map(o => {
      const {name, to} = o;
      const element = to ? 'a' : 'span';
      let _ls = this.opts.paths.indexOf(o) === this.opts.paths.length - 1
      let _d = document.createElement(element);
      this._cla(_d, 'breadcrumb__item')
      to && this._cla(_d, 'is-navigative');
      to && this._setAttr(_d, 'href', to);
      _ls && this._cla(_d, 'breadcrumb__item-active');
      _d.innerText = name;
      _$p.appendChild(_d);
      !_ls && _$p.appendChild(this._createSeparatorElement());
      return _d;
    });
    return _$p;
  }

  _createSeparatorElement (e) {
    let _$s = document.createElement('span');
    this._setAttr(_$s, 'class', 'breadcrumb__separator');
    _$s.innerText = this.opts.separator;
    return _$s;
  }

  _cla (el, val, replace = false) {
    if (typeof val !== 'string' || !el || !this._isElement(el) || !el.classList) {
      return;
    }
    if (replace) {
        const classList = el.classList.value.replace(this.options.class, val);
        this._setAttr(el, 'class', classList);
    } else {
      el.classList.add(val);
    }
  }

  _setAttr (el, k, v) {
    if (typeof k !== 'string' || typeof v !== 'string' || !k || !v || !el || !this._isElement(el) || !el.classList) {
      return;
    }
    el.setAttribute(k, v);
  }

  _isElement (e) {
    return e instanceof window.Element;
  }

  static _booly(e) {
    if (e && (typeof e === 'boolean' || ['true', 'false'].includes(e.toLowerCase()))) {
      return typeof e === 'boolean' ? e : e.toLowerCase() === 'true';
    }
    return void 0;
  }

  static _okv(o, k) {
    k = k || 'name';
    return Breadcrumb._nestedV(k.indexOf('.') > -1 ? k : [k], o);
  }

  static _nestedV(path, obj=self, separator='.') {
    let properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => prev && prev[curr], obj);
  }

  static filterOpts (options, userOpts = {}) {
    let opts = {};
    if (options.separator && typeof options.separator === 'string') {
      opts.separator = options.separator;
    }
    if (userOpts && userOpts.hasOwnProperty('routable')) {
      let rb = Breadcrumb._booly(userOpts['routable'])
      if (rb !== void 0) {
        opts.routable = rb
      }
    }
    if (options.paths && Array.isArray(options.paths)) {
      opts.paths = options.paths.map(i => {
        let tp = {};
        tp.name = Breadcrumb._okv(i, i['meta'] && i['meta']['title'] ? 'meta.title' : 'name');
        tp.to = opts.routable && Breadcrumb._okv(i, i.path ? 'path' : 'to');
        return tp;
      })
    }
    
    return opts;
  }

  get opts () {
    return {...this._opts};
  }
};

Breadcrumb._defaults = {...DEFAULT_OPTIONS};
