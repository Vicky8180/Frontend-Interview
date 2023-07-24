import React, { useState } from 'react';

export default function DynamicSearch() {
  const [input, setInput] = useState('');
  const arr = ["aabok", "babdf", "cajdakb", "dab", "eab", "fab", "gajdb", "hbc", "ibc", "jcd", "kde", "lde", "mef", "ngh", "ohi", "phi", "qij", "rij"];
  const [found, setFound] = useState([]);

  function changer(e) {
    const query = e.target.value;
    setInput(query);

    const matchingItems = arr.filter(item => item.includes(query));

    // Check if any matching items were found
    if (matchingItems.length === 0) {
      matchingItems.push("Not Found!");
    }

    setFound(matchingItems);
  }

  return (
    <>
      <div>
        <input placeholder='takeInput' value={input} onChange={changer} />
      </div>
      <div>
        {found.map((item, index) => <h1 key={index}>{item}</h1>)}
      </div>
    </>
  );
}
