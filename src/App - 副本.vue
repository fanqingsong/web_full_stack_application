<template>
<div id="app">
    <h1>{{ message }}</h1>
    <input v-model="message">
    <button v-on:click="sendMessage()">Send</button>
    <div v-if="logs">
        <hr>
        <p v-for="log in logs">
            {{ log }}
        </p>
    </div>

    <div>
        {{data.name}} !!!!!!!!!!!!!!!!!!
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import VueSocketio from 'vue-socket.io'

import axios from 'axios'




Vue.use(VueSocketio, 'http://localhost:5000')

export default {
    data () {
        return {
            message: '',
            logs: [],
            data: {}
        }
    },
    mounted: function(){
        console.log("-------------------")
        //this.$data.data = Axios.get('/data/test.json')

        let _this = this

        axios.get('/data/test.json')
        .then(function(response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);

            _this.data = response.data
        });
    },
    sockets: {
        connect: function() {
            console.log('Connected to the backend web socket server')
        },
        disconnect: function() {
            console.log('Disconnected from the backend web socket server')
        },
        event: function(data) {
            console.log('Got event: ' + data.message)
        },
        response: function(data) {
            console.log('Got response: ' + data.message)
            this.logs.push(data.message)
        }
    },
    methods: {
        sendMessage: function() {
            this.$socket.emit('event', this.message)
            console.log('Sent "' + this.message + '" to the backend')
            this.message = ''
        }
    }
}
</script>
