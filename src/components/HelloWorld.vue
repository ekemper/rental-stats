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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onConnect (socket) {
      console.log('connected', socket);

    },
    onEvent (payload) {
      console.log('event', payload)
    },
    onDisconnect (client) {
      console.log('disconnected', client)
    }
  },
  mounted () {
    var socket = io('http://localhost:2222')

    socket.on('connect', this.onConnect)
    socket.on('event', this.onEvent)
    socket.on('disconnect', this.onDisconnect)
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
