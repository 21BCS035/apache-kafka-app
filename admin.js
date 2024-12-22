const {kafka} = require("./client");

async function init(){
    const admin = kafka.admin();
    console.log("Connecting admin");
    await admin.connect();
    console.log("Admin connected");
    
    console.log("creating topic");

    await admin.createTopics({
        topics: [
           {
             topic : "rider-information",
             numPartitions: 2,
            }
        ]
    });

    console.log("Topic has been created successfully");
    await admin.disconnect();
    console.log("Admin disconnected");
}

init();
