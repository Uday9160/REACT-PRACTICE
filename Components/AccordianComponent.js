import React, { useEffect, useState } from "react";

function AccordianComponent() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);

  function handleClick(id) {
    setId(id);
  }

  const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    setData(await resp.json());
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((d) => (
        <div onClick={() => handleClick(d.id)}>
          <h1>
            {id === d.id ? (
              <div style={{ backgroundColor: "gray" }}>
                <p style={{ color: "red" }}>{d.id}</p>
                <p>{d.body}</p>
              </div>
            ) : (
              d.id
            )}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default AccordianComponent;
