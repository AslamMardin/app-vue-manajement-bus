<template>
    <form @submit.prevent="_storeBus">
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

        <input type="submit" value="simpan">
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
        ...mapActions('bus', ['storeBus']),
        async _storeBus() {
            try {
                await this.storeBus(this.form)
                this.$router.replace({ name: 'bus.index' })
            } catch (error) {
                alert(error)
            }
        }
    }
}
</script>