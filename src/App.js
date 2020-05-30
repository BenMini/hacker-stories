import React from "react";

function getByTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>
        <h1>hello {getByTitle("React")}</h1>
      </h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}
export default App;
