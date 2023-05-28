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
  "😋": "Yummy",
};

var emojiArr = Object.keys(emojiDictionary);

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

  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
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
        <h3 style={{ color: "#9333ea" }}>Emojis we know</h3>
        {emojiArr.map((emoji) => {
          return (
            <span class="emoji-list"
              onClick={() => clickHandler(emoji)}
              style={{ fontSize: "1.5em", padding: "0.5em" }}
              key={emoji}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
