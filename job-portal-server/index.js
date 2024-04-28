// username: pmnextsolution   /    vinay2821
// password: 4QFpB4yk9DuGDHH3 /    lS8og9GPM2YFKBol / 

require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 2128;
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);

// middlewears
app.use(express.json());
app.use(cors());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jobportal.g1ydvwe.mongodb.net/?retryWrites=true&w=majority&appName=jobportal`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db("mernjobdemo");
    const jobCollections = db.collection("jobdemo");

    // filter my jobs
    app.get('/my-jobs/:email', async(req, resp) => {
      // console.log(req.params.email);
      // let email = req.params.email;
      let result = await jobCollections.find({postedBy: req.params.email}).toArray();
      // console.log('email: ', result);
      resp.send(result);
    })
    // creat new job post
    app.post("/post-job", async(req, resp) => {
      // console.log('test')
      const body = req.body;
      body.createAt = new Date();
      const result = await jobCollections.insertOne(body);
       if(result.insertedId){
        return resp.status(200).send(result)
       }else {
        return resp.status(404).send({
            message : "Job not posted",
            status : false
        })
       }
    })
    // get all jobs
    app.get('/all-jobs', async(req, resp)=> {
      const data=await jobCollections.find().toArray();
      console.log("Server is running...");
      resp.send(data);
    });

    // delete job from my-job
    app.delete('/job-delete/:id', async(req, resp)=> {
      const {id} = req.params;
      const result = await jobCollections.deleteOne({_id: new ObjectId(id)});
      console.log('result: ', result);
      resp.send(result);
    })

    // get single job for edit
    app.get('/all-jobs/:id', async(req, resp) => {
      console.log('id index: ', req.params.id)
      let filter = await jobCollections.findOne({_id: new ObjectId(req.params.id)});
      // console.log('filter: ', filter);
      resp.send(filter);
    })

    // update single job data
    app.put('/update/:id', async(req, resp) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updatedoc = {$set: {...jobData}};
      let result = await jobCollections.updateOne(filter, updatedoc, options);
      console.log('result: ', result);
      resp.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

    

