import { initState } from './state'
import { initRender } from './render'
import { initLifecycle, callHook } from './lifecycle'
import { initEvents } from './events'
// import { mergeOptions } from '../util/index'

let uid = 0

export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    // a uid
    vm._uid = uid++

    // a flag to avoid this being observed
    vm._isVue = true

    if (options && options._isComponent) {
      // initInternalComponent(vm, options)
    } else {
      vm.$options = options
    }

    vm._renderProxy = vm
    vm._self = vm

    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    // callHook(vm, 'beforeCreate')
    initState(vm)
  }
}

export function initInternalComponent() {

}

export function resolveConstructorOptions(Ctor) {
  let options = Ctor.options
  return options
}


