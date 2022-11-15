import express from "express";
import cors from "cors";
import technigoMembers from "./data/technigo-members.json"

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/members", (req, res) => {
  res.status(200).json({technigoMembers: technigoMembers});
});

app.get("/members/:id", (req, res) => {
  const singleMember = technigoMembers.find((member) => {
    return member.id === Number(req.params.id);
  });
  res.status(200).json(singleMember);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
