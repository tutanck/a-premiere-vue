import Vue from 'Vue'
import Vuex from 'Vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  citizen: {}
}

const getters = {
  selectCitizen: state => state.citizen
}

const mutations = {
  SELECT_CITIZEN: (state, citizens) => { state.citizen = citizens[0] }
}

const actions = {
  selectCitizen: (store, citizenId) => {
    Vue.http.options.root = 'http://localhost:3000'
    Vue.resource('citizens{/id}/details')
      .get({id: citizenId})
      .then(response => {
        console.log('response.data', response.data)
        store.commit('SELECT_CITIZEN', response.data) // response.data : array of citizens
      })
      .catch(error => console.log('Appstore::erreur', error))
  }

}

let appstore = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

export default appstore
