const {kafka} = require("./client");
const group = process.argv[2];

async function init(){
    const consumer = kafka.consumer({ groupId: group })
    console.log("Consumer is connecting");
    await consumer.connect();
    await consumer.subscribe({ topics: ['rider-information'],fromBeginning:true});
    console.log('Consumer connected and subscribed to topic');
    await consumer.run({
        eachMessage: async ({ topic, partition, message}) => {
            const messageValue = message.value.toString();
            console.log(`${group} : [${topic}] : PART:${partition}:`, messageValue);
        },
    });

   
}

init();