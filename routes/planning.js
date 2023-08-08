import express from "express";

const router = express.Router();

router.post('/planner', (req, res) => {
    // req.body: {start: date, end: date, travelers: int, interests: array, activity: str, budget: str}
    // iterate and validate. catch => return error
    // build out query string (per OpenAI API documentation)
    // POST to OpenAI api (Axios?)
    // Format response and send 

})