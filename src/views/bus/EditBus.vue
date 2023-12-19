<template>
    <form @submit.prevent="_updateBus">
        <p>plat number</p>
        <input v-model="form.plat_number" type="text">
        <br>

        <p>bus number</p>
        <input v-model="form.bus_number" type="text">
        <br>

        <p>distributor</p>
        <input v-model="form.distributor" type="text">
        <br>

        <p>ukuran</p>
        <input v-model="form.ukuran" type="number">
        <br>
        <br>

        <input type="submit" value="edit">
    </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    data: () => ({
        form: {
            plat_number: '',
            bus_number: '',
            distributor: '',
            ukuran: 1
        }
    }),
    methods: {
        ...mapActions('bus', ['getShowIdBus', 'updateBus']),
        async _getShowIdBus() {
            let buses = await this.getShowIdBus(this.$route.params.id)
            this.form = buses.data

        },
        async _updateBus() {
            try {
                await this.updateBus(this.form)
                this.$router.replace({ name: 'bus.index' })
            } catch (error) {
                alert(error)
            }
        }
    },
    created() {
        this._getShowIdBus()
    }
}
</script>