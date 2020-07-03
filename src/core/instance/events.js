


export function initEvents(vm) {
  vm._events = Object.create(null)
  vm._hasHookEvent = false
}

let target

function add(event, fn) {
  target.$on(event, fn)
}

function remove(event, fn) {
  target.$off(event, fn)
}

export function eventsMixin(Vue) {
  const hookRE = /^hook:/
  Vue.prototype.$on = function(event, fn) {
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn)
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn)
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true
      }
    }
    return vm
  }

  Vue.prototype.$emit = function (event) {
    const vm = this
    // let cbs = vm._events[event]
    // console.log(cbs)

    return vm
  }
}
