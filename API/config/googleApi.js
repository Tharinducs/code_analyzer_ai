require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;



if (!GOOGLE_API_KEY) {
    throw new Error("GOOGLE_API_KEY is missing. Set it in your environment variables.");
}

const genAI = new GoogleGenerativeAI(`${GOOGLE_API_KEY}`);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

module.exports = { model };