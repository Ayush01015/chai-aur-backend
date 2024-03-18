import React, { useEffect, useState } from "react";
import "./App.css";
const API = "/api/jokes";

const App = () => {
  const [jokes, setJokes] = useState(null);

  async function getJokes() {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    setJokes(data);
  }

  useEffect(() => {
    getJokes();
  }, []);

  console.log("jokes", jokes);
  return (
    <>
      {!jokes ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color:"yellow",
            marginTop:"5rem"
          }}
        >
          Loading...
        </h1>
      ) : (
        <div className="app">
          <h1 className="heading">Jokes</h1>
          <div className="container">
            {jokes.map((item, idx) => (
              <div className="joke" key={idx}>
                <div className="jk-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bueNRFZYBEWXrABWYoTiyYtt4SK82GC7QQ&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="data">
                  <h2>{item.title}</h2>
                  <p>{item.joke}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
