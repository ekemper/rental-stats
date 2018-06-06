<template>
  <div class="stats">
    <pre>{{rentalData}}</pre>
  </div>
</template>

<script>

import SocketClient from '../socket-client-controller'

import { mapGetters } from 'vuex'

export default {
  name: 'Stats',
  computed: {
    ...mapGetters('rentals', [
      'rentalData'
    ])
  },
  data () {
    return {
      datathing: null
    }
  },
  methods: {

  },
  beforeMount () {
    // eslint-disable-next-line
    const socketClient = new SocketClient(this.$store)
  }
}

</script>
