import Breadcrumb from './breadcrumb';

Breadcrumb.install = function(Vue) {
  Vue.directive('breadcrumb', {
    params: ['paths', 'separator', 'separatorComponent'],
    bind: function(el, binding, vnode) {
      el.breadcrumb = new Breadcrumb(el, binding.value || { paths: vnode.context.$route.matched });
    },
    unbind (el, binding, vnode, oldVnode) {
      el.breadcrumb.destroy();
    }
  })
};

export default Breadcrumb;
