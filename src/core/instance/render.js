
export let currentRenderingInstance

export function initRender() {

}

export function renderMixin(Vue) {
  Vue.prototype.$nextTick = function (fn) {

  }

  Vue.prototype._render = function () {
    const vm = this
    const { render, _parentVnode } = vm.$options

    vm.$vnode = _parentVnode

    let vnode

    currentRenderingInstance = vm

    vnode = render.call(vm._renderProxy, vm.$createElement)

  }
}
