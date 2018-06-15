import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    reservation: [
      {
        id: 1,
        arrival: 9876,
        depart: 9876,
        customer: 'Some Name',
        unit: 'Some Unit'
      },
      {
        id: 1,
        arrival: 9876,
        depart: 9876,
        customer: 'Some Name',
        unit: 'Some Unit'
      },
      {
        id: 1,
        arrival: 9876,
        depart: 9876,
        customer: 'Some Name',
        unit: 'Some Unit'
      },
      {
        id: 1,
        arrival: 9876,
        depart: 9876,
        customer: 'Some Name',
        unit: 'Some Unit'
      },
      {
        id: 1,
        arrival: 9876,
        depart: 9876,
        customer: 'Some Name',
        unit: 'Some Unit'
      },
      {
        id: 1,
        arrival: 9876,
        depart: 9876,
        customer: 'Some Name',
        unit: 'Some Unit'
      },
      {
        id: 1,
        arrival: 9876,
        depart: 9876,
        customer: 'Some Name',
        unit: 'Some Unit'
      },
      {
        id: 1,
        arrival: 9876,
        depart: 9876,
        customer: 'Some Name',
        unit: 'Some Unit'
      },
      {
        id: 1,
        arrival: 9876,
        depart: 9876,
        customer: 'Some Name',
        unit: 'Some Unit'
      },
      {
        id: 1,
        arrival: 9876,
        depart: 9876,
        customer: 'Some Name',
        unit: 'Some Unit'
      }
    ]
  },
  mutations: {
    setArrival (state, value, id) {
      state.reservation[id].arrival = value;
    }
  }
})
export default store
