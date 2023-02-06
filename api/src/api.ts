import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/hello-world', (req, res) => {
    res.send({ message: 'Hello World' });
});

app.use('/.netlify/functions/api', router);

const handler = serverless(app);

export {
    app,
    handler
}