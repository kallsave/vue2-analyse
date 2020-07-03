import {
  noop,
} from '../util/index'

import {
  observe,
} from '../observer/index'

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

export function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

export function initState(vm) {
  vm._watchers = []
  const opts = vm.$options
  vm._data = opts.data
  if (opts.data) {
    initData(vm)
  }
}

function initData(vm) {
  let data = vm.$options.data

  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    const key = keys[i]
    proxy(vm, `_data`, key)
  }
  observe(data, true)
}


export function stateMixin(Vue) {
  Vue.prototype.$watch = function () {

  }
}
