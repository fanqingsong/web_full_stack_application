

var _ = require('lodash')

var express = require('express')

var app = express()

var server = app.listen(8082)

//websocket
var io = require('socket.io')(server);

var quote = require("./data_access/quote.js");

new quote({
    author: 'FQS',
    text: 'code',
}).save(function(err) {
    if (err) {
        console.log('保存失败')
        return;
    }
    console.log('保存成功');
})

io.on('connection', function (socket) {
  socket.on('message', function (message) {
    console.log("message from client = "+message)
  })

  setInterval(function(){
    console.log("now sending quoteData!")

    quote.find().exec(function (err, res) {
      console.log("Error:" + err)
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);

            var quoteData = {
                "content": "all quotes",
                "quotes": [
                    /*
                    { "author": "fqs", "text": "code" },
                    */
                ]
            }

            quoteData.quotes = res

            io.emit("quoteData", JSON.stringify(quoteData))
        }
    })
  }, 1000)

  socket.on('disconnect', function () {
    console.log("disconnected")
  })
})

console.log("websocket server init OK! on http://localhost:8082")

