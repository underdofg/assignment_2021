const amqp = require("amqplib");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const { username , ip_address } = req.body
  let msg = {}
  msg.username = username ? username : 'hi I am no-one'
  msg.ip_address = ip_address ? ip_address : 0

  const result = await connect(msg);
  res.send(result);
});


async function connect(msg) {

  try {
    //  ceate connection
    const connection = await amqp.connect("amqp://localhost:5672");
    //connect tcp connection to channel
    const channel = await connection.createChannel();

    //create Queue name jobs
    await channel.assertQueue("jobs");

    // send msg with Buffer to queue name jobs
    const result =  channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
    
    console.log(`Jobsent successfully sending IP: ${msg.ip_address}`);
    return `Jobsent successfully sending IP: ${msg.ip_address}`;
  } catch (ex) {
    console.log("error =======>", ex);
    return 'connection error'
  }
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


