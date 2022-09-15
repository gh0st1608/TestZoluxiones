const AWS = require("aws-sdk");

const USERS_TABLE = process.env.USERS_TABLE;
const PEOPLE_TABLE = process.env.PEOPLE_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();


module.exports = {USERS_TABLE,PEOPLE_TABLE,dynamoDbClient}
