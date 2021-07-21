const amqp = require("amqplib");
const ipWorker = require("./ipWorker")

connect () ;

async function connect() {
  try {
    //  ceate connection
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("jobs");

    await channel.consume("jobs" , (message) => {
        let input = JSON.parse(message.content);

        // accept message queue then added to ipWorker 
        ipWorker(input);
    } ,{
      noAck : false
    })

    console.log('Waiting for message...')
  } catch (ex) {
    console.log("error =======>", ex);
  }
}

