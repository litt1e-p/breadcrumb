import './index.scss'

const DEFAULT_OPTIONS = {
  separator: '/',
  paths: [],
  key: 'name'
};

export default class Breadcrumb {
  
  constructor (el, opts = {}) {
    this._opts = {
      ...Breadcrumb._defaults,
      ...Breadcrumb.filterOpts(opts)
    };
    this._$el = el;
    this._$tpl = this._createBreadcrumbElement();
    this._mount();
  }

  destroy () {
    this._unmount()
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
    _$s.innerText = this.opts.separator
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

  static _okv(o, k) {
    k = k || 'name';
    return Breadcrumb._nestedV(k.indexOf('.') > -1 ? k : [k], o);
  }

  static _nestedV(path, obj=self, separator='.') {
    let properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => prev && prev[curr], obj);
  }

  static filterOpts (options) {
    let opts = {};
    if (options.separator && typeof options.separator === 'string') {
      opts.separator = options.separator;
    }
    if (options.paths && Array.isArray(options.paths)) {
      opts.paths = options.paths.map(i => {
        let tp = {};
        tp.name = Breadcrumb._okv(i, i['meta'] && i['meta']['label'] ? 'meta.label' : 'name');
        tp.to = Breadcrumb._okv(i, i.path ? 'path' : 'to');
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
