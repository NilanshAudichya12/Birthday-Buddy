import List from "./List";
import data from "./data";
import { useState } from "react";

const App = () => {
  const [info, setInfo] = useState(data);

  const handleclick = () => {
    console.log(info)
    setInfo([]);
  };

  return <main>
    <section className="container">
      <h1>No. of People {info.length}</h1>
      <List info={info} />
      <button className="btn" onClick={handleclick}>clear</button>
    </section>;
  </main>
};
export default App;
