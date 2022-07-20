
import implement from '../../core/implement'
import { set, del, reactive } from '../../observer/reactive'
import { watch } from '../../observer/watch'
import { injectMixins } from '../../core/injectMixins'

let APIs = {
  injectMixins,
  mixin: injectMixins,
  observable: reactive,
  watch,
  // use,
  set,
  delete: del,
  implement
}

let InstanceAPIs = {
  $set: set,
  $delete: del
}

export {
  APIs,
  InstanceAPIs
}
