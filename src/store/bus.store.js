import $http from '../api'

const state = () => ({
    buses: {},
    page: 1
})

const mutations = {
    _assign_data_buses(state, payload) {
        state.buses = payload
    },
    _set_page(state, payload) {
        state.page = payload
    }
}

const actions = {
    fetchDataBuses,
    storeBus,
    hapusData,
    getShowIdBus,
    updateBus
}

function fetchDataBuses({ commit, state }, cari) {
    return new Promise(async (resolve, reject) => {
        try {
            let link = `buses?page=${state.page}&q=${cari}`
            let network = await $http.get(link)
            commit('_assign_data_buses', network.data)
            resolve(network.data)
        } catch (error) {
            reject(error)
        }
    })
}

function storeBus({ commit }, data) {
    return new Promise(async (resolve, reject) => {
        try {
            let link = `buses`
            let network = await $http.post(link, data)
            resolve(network.data)
        } catch (error) {
            reject(error)
        }
    })
}
function updateBus({ commit }, data) {
    return new Promise(async (resolve, reject) => {
        try {
            let link = `buses/${data.id}`
            let network = await $http.put(link, data)
            resolve(network.data)
        } catch (error) {
            reject(error)
        }
    })
}

function getShowIdBus({ commit }, busId) {
    return new Promise(async (resolve, reject) => {
        try {
            let link = `buses/${busId}`
            let network = await $http.get(link)
            resolve(network.data)
        } catch (error) {
            reject(error)
        }
    })
}

function hapusData({ commit }, busId) {
    return new Promise(async (resolve, reject) => {
        try {
            let link = `buses/${busId}`
            let network = await $http.delete(link)
            resolve(network.data)
        } catch (error) {
            reject(error)
        }
    })
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}