// The MIT License (MIT)
//
// Copyright (c) 2019-2022 litt1e-p ( https://github.com/litt1e-p )
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

import Breadcrumb from './breadcrumb';

Breadcrumb.install = function(Vue, defaultOpts) {
  Vue.directive('breadcrumb', {
    params: ['paths', 'separator'],
    bind: function(el, binding, vnode) {
      if (el.breadcrumb) {
        el.breadcrumb.update(binding.value);
      } else {
        let unwatch = vnode.context.$watch('$route', function (newVal, oldVal) { 
          el.breadcrumb.update({arg: { paths: newVal.matched }});
        });
        if(!vnode.context['unwatch']) {
          vnode.context['unwatch'] = unwatch;
        }
        el.breadcrumb = new Breadcrumb(el, binding.value || { paths: vnode.context.$route.matched }, defaultOpts);
      }
    },
    update (el, binding) {
      if (!el.breadcrumb || !binding.arg) {
        return;
      }
      el.breadcrumb.update(binding)
    },
    unbind (el, binding, vnode, oldVnode) {
      vnode.context.unwatch();
      el.breadcrumb.destroy();
    }
  })
};

export default Breadcrumb;
