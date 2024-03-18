import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 3010;

app.get("/", (req, res) => {
  res.send("Hello World !!!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programming Humor",
      joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "Dad Joke",
      joke: "Why couldn't the bicycle stand up by itself? It was two-tired!",
    },
    {
      id: 3,
      title: "Science Joke",
      joke: "Why do biologists look forward to casual Fridays? They're allowed to wear genes to work!",
    },
    {
      id: 4,
      title: "Math Joke",
      joke: "Why was the equal sign so humble? Because he knew he wasn't less than or greater than anyone else!",
    },
    {
      id: 5,
      title: "Coffee Addict Joke",
      joke: "Why do coffee beans never get into arguments? Because they know how to espresso themselves!",
    },
    {
      id: 6,
      title: "Physics Joke",
      joke: "Why did the photon refuse to check a bag at the airport? It was traveling light!",
    },
    {
      id: 7,
      title: "Book Lover Joke",
      joke: "Why did the book go to therapy? It had too many unresolved plot issues!",
    },
    {
      id: 8,
      title: "Gardening Joke",
      joke: "What do you call a plant that takes up photography? A snapdragon!",
    },
    {
      id: 9,
      title: "History Joke",
      joke: "Why did the ancient Egyptians never play hide and seek? Because good pharaohs are hard to find!",
    },
    {
      id: 10,
      title: "Pirate Joke",
      joke: "How do pirates prefer to communicate? Aye to aye!",
    },
    {
      id: 11,
      title: "Guitar Legend Humor",
      joke: "Why did Eric Clapton refuse to play hide and seek? Because even when he's hiding, you can still hear those legendary guitar riffs!",
    },
    {
      id: 12,
      title: "Bluesy Joke",
      joke: "How does Eric Clapton like his coffee? With a spoonful of the blues!",
    },
    {
      id: 13,
      title: "Concert Quip",
      joke: "Why did Eric Clapton become a musician? He wanted to pick up some 'Strings Attached' fans!",
    },
    {
      id: 14,
      title: "Rock and Roll Chuckle",
      joke: "What's Eric Clapton's favorite kind of precipitation? Layla-drops!",
    },
    {
      id: 15,
      title: "Guitar Wisdom",
      joke: "Why did the guitar student ask Eric Clapton for advice? He wanted to learn the 'Claptonian' way of playing!",
    },
  ];
  res.send(jokes);
});

app.get("/chai", (req, res) => {
  res.send("<h2>Chai with Code</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});


