import { createStore } from 'vuex'
import bus from './bus.store'

export default createStore({
  modules: {
    bus
  }
})
