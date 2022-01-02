import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js';

const app = express();

// localhost:5000/posts
// every route from the postRoutes will have a directory prefix of /posts
// first parameter: starting path for all the routes: /posts
// second parameter: Express middleware object


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

/* https://www/mongodb.com/cloud/atlas
    This is the cloud version of mongo where they will be hosting the db for our application.
*/

const CONNECTION_URL = 'mongodb+srv://<username>:<password>@cluster0.b4k0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Serer running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);