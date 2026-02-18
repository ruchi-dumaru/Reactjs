import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallary from "./components/Gallary";
import Button from "./components/Button";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-400  absolute top-1/2 left-1/2 -trasnlate-x-1/2 -translate-y-1/2 font-semibold text-sm">
      loading....
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Gallary elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen text-white">
      {/* <h1 className="fixed bg-gray-600 text-white rounded h-10 w-10 m-2 items-center ">
        {index}
      </h1> */}

      <div className="flex h-[80%] flex-wrap gap-4 m-2">{printUserData}</div>

    <Button index={index} setIndex={setIndex} userData={userData} setUserData={setUserData}/>
    </div>
  );
};

export default App;
