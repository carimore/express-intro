import express, { request } from "express";
import cors from "cors";
import booksData from "./data/books.json"

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({responseMessage: "Hello bookworm!"});
    });

app.get("/books", (req, res) => {
  const { tittle, authors } = req.query;
  let books = booksData
  if(authors) {
    books = books.filter(singleBook => singleBook.authors.toLowerCase() === authors.toLowerCase());
  }
  if (tittle) {
    books = books.filter(singleBook => singleBook.tittle.toLowerCase() === tittle.toLowerCase());
  }
  
  res.status(200).json({
    success: true,
    message: "OK",
    body: {booksData: books}
  });
});

app.get('/books/:id', (req, res) => {
  const singleBook = booksData.find((item) => {
    return (item.id === +req.params.id)
  });
  console.log(singleBook)
  res.json ({booksData : singleBook})
  if(bookSpecific) {
    res.status(200).json({
      success: true,
      message: "OK",
      body: {
        booksData: books
      }
    });
  } else {
    response.status(404).json({
      success: false,
      message: "Not Found",
      body: {}
    })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
