//Import hooks
import { useState } from "react";

import Axios from "axios";

const APIRequest = () => {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        console.log(response);
        setJoke(response.data.setup + " ... " + response.data.punchline);
      }
    );
  };

  return (
    <div className="text-center py-5 border border-slate-500 m-2">
      <h1 className="text-3xl font-semibold">API Request</h1>
      <button
        className="border border-slate-900 px-2 text-white bg-gray-900 mt-4"
        onClick={getJoke}
      >
        Get Joke
      </button>
      <p>{joke}</p>
    </div>
  );
};

export default APIRequest;
