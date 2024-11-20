import React from "react";
import Entry from "./components2/Entry2";
import emojipedia from "./emojipedia2";

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {/* {emojipedia.map((emojiTerm) => {
                    return (
                        <Entry
                            key={emojiTerm.id}
                            emoji={emojiTerm.emoji}
                            name={emojiTerm.name}
                            description={emojiTerm.meaning}
                        />
                    );
                })} */}
                {emojipedia.map((emojiTerm) => (
                    <Entry
                        key={emojiTerm.id}
                        emoji={emojiTerm.emoji}
                        name={emojiTerm.name}
                        description={emojiTerm.meaning}
                    />
                ))}
            </dl>
        </div>
    )
}

export default App