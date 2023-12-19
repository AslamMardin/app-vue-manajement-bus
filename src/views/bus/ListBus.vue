<template>
    halaman daftar bus
    <br>
    <router-link as="button" :to="{ name: 'bus.create' }">Tambah</router-link>
    <table border="1">
        <tr>
            <td>
                <button @click="hideCari = true">cari</button>
            </td>
            <td>Bus Number</td>
            <td>PLAT NUMBER</td>
            <td>DISTRIBUTOR</td>
            <td>UKURAN</td>
            <td>aksi</td>
        </tr>
        <tr v-if="hideCari">
            <td colspan="5">
                <input v-model="search" type="text" placeholder="cari">
                <button @click="hideCari = false">x</button>
            </td>
        </tr>
        <tr v-for="(item, i ) in buses.data" :key="i">
            <td>{{ buses.from + i }}</td>
            <td>{{ item.bus_number }}</td>
            <td>{{ item.plat_number }}</td>
            <td>{{ item.distributor }}</td>
            <td>{{ item.ukuran }}</td>
            <td>
                <button @click="_hapusData(item.id)">hapus</button>
                <router-link as="button" :to="{ name: 'bus.edit', params: { id: item.id } }">edit</router-link>
            </td>
        </tr>
    </table>
    <br>
    <button @click="page -= 1" v-if="buses.prev_page_url != null">Sebelumnya</button>
    <button @click="page += 1" v-if="buses.next_page_url != null">Selanjutnya</button>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import _ from 'lodash'
export default {
    data: () => ({
        hideCari: false,
        search: ''
    }),
    computed: {
        ...mapState('bus', ['buses']),
        page: {
            get() {
                return this.$store.state.bus.page
            },
            set(val) {
                this.$store.commit('bus/_set_page', val)
            }
        }
    },
    methods: {
        ...mapActions('bus', ['fetchDataBuses', 'hapusData']),
        async _fetchDataBuses() {
            try {
                this.fetchDataBuses(this.search)
            } catch (error) {
                alert(error)
            }
        },
        async _hapusData(id) {
            if (!confirm('anda yakin ingin menghapusnya  ?')) {
                return false
            }
            await this.hapusData(id)
            this._fetchDataBuses()
        }
    },
    created() {
        this._fetchDataBuses()
    },
    watch: {
        page() {
            this._fetchDataBuses()
        },
        search: _.debounce(function (val) {
            this._fetchDataBuses()

        }, 500)
    }
}
</script>