import React, { useState } from "react";

import { list } from "../Data";

function FilterComponent() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div>
        <input type="text" value={search} onChange={handleChange} />
      </div>
      <ul>
        {list
          .filter((l) =>
            l.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </>
  );
}

export default FilterComponent;
