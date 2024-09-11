import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  function EmojiEntry(emojipedia) {
    return (
      <Entry
        key={emojipedia.id}
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning}
      />
    );
  }
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(EmojiEntry)}</dl>
    </div>
  );
}

export default App;
