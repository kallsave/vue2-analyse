

export function initLifecycle(vm) {
  const options = vm.$options
}


export function lifecycleMixin(Vue) {
  Vue.prototype._update = function () {

  }
}

export function callHook(vm, hook) {
  vm.$emit('hook:' + hook)
}
