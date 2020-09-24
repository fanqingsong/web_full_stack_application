<template>
  <div>
    <h1>Technology Bargram</h1>
    <ve-histogram :data="chartData"></ve-histogram>
    <hr>

    <h1>Quotes List</h1>
    <ul>
        <li v-for="(item, index) in quoteData.quotes">
            {{item.author}}:<br>
            {{item.text}}
        </li>
    </ul>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
import VeBar from 'v-charts/lib/bar.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import axios from 'axios'
import io from 'socket.io-client'

export default {
    components: { VeLine, VeBar, VeHistogram },
    data () {
        return {
            chartData: {},
            quoteData: {}
        }
    },
    created: function(){
        const socket = io('http://localhost:8081');
        socket.send('hello world');
        socket.on('chartData', (data) => {
            console.log('chartData message = '+data)
            this.chartData = JSON.parse(data)
        } );

        const socket2 = io('http://localhost:8082');
        socket2.send('hello world');
        socket2.on('quoteData', (data) => {
            console.log('quoteData message = '+data)
            this.quoteData = JSON.parse(data)
        } );
    },
    mounted: function(){
        let _this = this
        console.log(" mounted! ")
    },
}
</script>