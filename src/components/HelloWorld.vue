<template>
  <div class="hello">

  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'HelloWorld',
  data () {
    return {
      rentalData: null
    }
  },
  methods: {
    onConnect (socket) {
      console.log('connected', socket)
    },
    onRxData (payload) {
      console.log('onRxData', payload)
      this.rentalData = payload
    },
    onDisconnect (client) {
      console.log('disconnected', client)
    }
  },
  mounted () {
    this.socket = io('http://localhost:2222')
    this.socket.on('connect', this.onConnect)
    this.socket.on('data', this.onRxData)
    this.socket.on('disconnect', this.onDisconnect)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
