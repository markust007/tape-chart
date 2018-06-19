import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    reservation: [
      {
        id: 1,
        arrival: '2018-06-19',
        depart: '2018-06-20',
        customer: 'John Lennon',
        unit: 'Unit 1'
      },
      {
        id: 2,
        arrival: '2018-06-20',
        depart: '2018-06-22',
        customer: 'Paul McCartney',
        unit: 'Unit 2'
      },
      {
        id: 3,
        arrival: '2018-06-21',
        depart: '2018-06-22',
        customer: 'Ringo Starr',
        unit: 'Unit 3'
      },
      {
        id: 4,
        arrival: '2018-06-21',
        depart: '2018-06-23',
        customer: 'George Harrison',
        unit: 'Unit 4'
      },
      {
        id: 5,
        arrival: '2018-06-22',
        depart: '2018-06-23',
        customer: 'Mick Jagger',
        unit: 'Unit 5'
      },
      {
        id: 6,
        arrival: '2018-06-20',
        depart: '2018-06-23',
        customer: 'Keith Richards',
        unit: 'Unit 6'
      },
      {
        id: 7,
        arrival: '2018-06-21',
        depart: '2018-06-22',
        customer: 'Eric Clapton',
        unit: 'Unit 1'
      },
      {
        id: 8,
        arrival: '2018-06-23',
        depart: '2018-06-24',
        customer: 'Pete Townshend',
        unit: 'Unit 2'
      },
      {
        id: 9,
        arrival: '2018-06-24',
        depart: '2018-06-25',
        customer: 'Jimmy Page',
        unit: 'Unit 5'
      },
      {
        id: 10,
        arrival: '2018-06-21',
        depart: '2018-06-24',
        customer: 'Roger Daltry',
        unit: 'Unit 7'
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
