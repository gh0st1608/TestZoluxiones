const {USERS_TABLE,PEOPLE_TABLE,dynamoDbClient} = require("../loaders/dynamodb");
//const People = require('../models/people.model');
const apiPeople = require("../api/api.people")
//const peopleObj = new People();

const getPeopleById = async function (req, res) {
    const id = req.params.peopleId;
    console.log(id)
    try{
        if(id){
        const {name,birth_year} = apiPeople(id); 
        res.json({name,birth_year});
        }else{
        res
          .status(404)
          .json({ error: 'Could not find user with provided "peopleId"' });
        }
    }catch(error){

         console.log(error);
         res.status(500).json({ error: "Could not retreive people" });
    }
}
    

/*
    const params = {
      TableName: PEOPLE_TABLE,
      Key: {
        peopleId: req.params.peopleId,
      },
    };
    

    try {
      const { Item } = await dynamoDbClient.get(params).promise();
      if (Item) {
        const { peopleId, name, birth_year } = Item;
        res.json({ peopleId, name, birth_year });
      } else {
        res
          .status(404)
          .json({ error: 'Could not find user with provided "userId"' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Could not retreive user" });
    }
  };
*/
/*
const postUser = async function (req, res) {
  const data = JSON.parse(req.body);
  //const { userId, name } = req.body;
  console.log(data)
};


const getPeoples = async function (req, res) {
  const { userId, name } = JSON.parse(req.body);
  if (typeof userId !== "string") {
    res.status(400).json({ error: '"userId" must be a string' });
  } else if (typeof name !== "string") {
    res.status(400).json({ error: '"name" must be a string' });
  }

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId: userId,
      name: name,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ userId, name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create user" });
  }
};

const getSchema = async function (req, res) {
    const params = {
      TableName: USERS_TABLE,
      Key: {
        userId: req.params.userId,
      },
    };
  
    try {
      const { Item } = await dynamoDbClient.get(params).promise();
      if (Item) {
        const { userId, name } = Item;
        res.json({ userId, name });
      } else {
        res
          .status(404)
          .json({ error: 'Could not find user with provided "userId"' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Could not retreive user" });
    }
  };
*/
/*
const postUser = async function (req, res) {
  const data = JSON.parse(req.body);
  //const { userId, name } = req.body;
  console.log(data)
};
*/



  module.exports = getPeopleById