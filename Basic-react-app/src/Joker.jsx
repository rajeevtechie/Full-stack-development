import { useEffect, useState } from "react";

const URL = "https://official-joke-api.appspot.com/random_joke";

export default function Joker() {
  const [joke, setJoke] = useState({
    setup: "",
    punchline: "",
  });

  // reusable function (button + useEffect both use this)
  const getNewJoke = async () => {
    try {
      const response = await fetch(URL);
      const jsonResponse = await response.json();

      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  // runs once when component mounts
  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>

      <button onClick={getNewJoke}>Get New Joke</button>
    </div>
  );
}
