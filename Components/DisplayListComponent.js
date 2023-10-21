import React, { useEffect, useState } from "react";

function DisplayListComponent() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
    setData(await resp.json());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.length > 0 ? (
        data.map((user) => (
          <div style={{ border: "2px solid gray" }}>
            <h1>id :{user.id} </h1>
            <h1>id :{user.name} </h1>
            <h1>id :{user.email} </h1>
          </div>
        ))
      ) : (
        <h1>Loading..........</h1>
      )}
    </div>
  );
}

export default DisplayListComponent;
