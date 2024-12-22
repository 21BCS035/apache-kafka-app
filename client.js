const { Kafka } = require('kafkajs')

exports.kafka = new Kafka({
  clientId: 'my-app',
  brokers: ["192.168.197.12:9092"],
});