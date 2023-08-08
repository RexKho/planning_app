import express from "express";

const app = express();

app.get('/firstwordsaidonline', (_, res)=> res.json('lo'));

const callback = () => console.log('Planning App is running on post 5001!')

app.listen(5001, callback)