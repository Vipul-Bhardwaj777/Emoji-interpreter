import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😂": "Joy",
  "😇": "Innocent",
  "😉": "Wink",
  "😪": "Sleepy",
  "🙄": "Roll eyes",
  "🥳": "Partying",
  "😍": "Heart-eyes",
  "🤑": "Money-mouth-face",
  "🤗": "Hugs",
  "😋": "Yummy"
};

export default function App() {
  const [meaning, setInput] = useState("");

  function inputHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];

    if (meaning === undefined) {
      meaning = "Emoji not present in the datase";
    }
    setInput(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={inputHandler} />
      <div class="meaning">
        <strong>Meaning:</strong>{" "}
        <strong>
          <span style={{ color: "#9333ea" }}> {meaning} </span>
        </strong>
      </div>
    </div>
  );
}
