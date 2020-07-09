/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

import login from './login'
import books from './books'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
    login,
    books
	},
})

export default store
