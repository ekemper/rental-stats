'use-strict'
import io from 'socket.io-client'

export default class SocketClient {
  constructor (store) {
    this.store = store

    this.socket = io('http://localhost:2222')

    this.socket.on('connect', () => {
      this.onConnect()
    })

    this.socket.on('rentalData', (resp) => {
      this.onRentalData(resp)
    })

    this.socket.on('disconnect', () => {
      this.onDisconnect()
    })
  }

  onConnect (socket) {
    console.log('connected', socket)
  }

  onRentalData (payload) {
    console.log('onRentalData', payload)
    this.store.commit('rentals/setRentalData', payload)
  }

  onDisconnect (client) {
    console.log('disconnected', client)
  }
}
