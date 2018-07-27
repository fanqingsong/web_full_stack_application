

var _ = require('lodash')

var express = require('express')

var app = express()

var server = app.listen(8081)

//websocket
var io = require('socket.io')(server);

var chartData = {
  "columns": ["Technology", "Count"],
  "rows": [
      { "Technology": "Hadoop", "Count": 9 },
      { "Technology": "Spark", "Count": 15 },
      { "Technology": "Storm", "Count": 3 }
  ]
}

io.on('connection', function (socket) {
  socket.on('message', function (message) {
    console.log("message from client = "+message)
  })

  setInterval(function(){
    console.log("now sending chartData!")

    var ran_index = _.random(0, 2);
    var ran_increment = _.random(500, 1000);

    chartData.rows.forEach( (item, index) => {
      if(index == ran_index){
        item.Count += ran_increment
        return true
      }
    })

    io.emit("chartData", JSON.stringify(chartData))
  }, 1000)

  socket.on('disconnect', function () {
    console.log("disconnected")
  })
})

console.log("websocket server init OK! on http://localhost:8081")

