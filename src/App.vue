<template>
  <div>
    <ve-histogram :data="chartData"></ve-histogram>

    <!--
    <div>
        <ve-bar :data="chartData"></ve-bar>
    </div>
    <div>
        <ve-line :data="chartData"></ve-line>
    </div>
    -->
  </div>
</template>

<script>

import VeLine from 'v-charts/lib/line.common'

import VeBar from 'v-charts/lib/bar.common'

import VeHistogram from 'v-charts/lib/histogram.common'

import axios from 'axios'

import io from 'socket.io-client';

export default {
    components: { VeLine, VeBar, VeHistogram },
    data () {
        return {
            chartData: {}
        }
    },
    created: function(){
        const socket = io('http://localhost:8081');
        socket.send('hello world');
        socket.on('chartData', (data) => {
            console.log('chartData message = '+data)
            this.chartData = JSON.parse(data)
        } );
    },
    mounted: function(){

        let _this = this

        console.log(" mounted! ")

        // axios.get('/data/map.json')
        // .then(function(response) {
        //     console.log("------------sss")
        //     console.log(response.data);
        //     console.log(response.status);
        //     console.log(response.statusText);
        //     console.log(response.headers);
        //     console.log(response.config);
        //     console.log("------------sssssddds")
        //     _this.chartData = response.data
        // });
    },

}
</script>