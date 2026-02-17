import { useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(response.data);
  };

  return (
    <>
      <button
        onClick={fetchData}
        className="bg-green-700 p-5 rounded text-lg font-bold text-white"
      >
        click here
      </button>

      <div>
        {data.map((elem, idx) => {
          return (
            <h2 key={idx} className="text-white">
              name: {elem.name}, id: {idx + 1}
            </h2>
          );
        })}
      </div>
    </>
  );
}

export default App;
