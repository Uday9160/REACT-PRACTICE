import React, { useState } from "react";

function CheckBox({ item, index, setChecked, array }) {
  const onChangehandler = (index) => {
    const updatedArray = [...array];
    updatedArray[index] = !updatedArray[index];
    setChecked(updatedArray);
  };
  return (
    <>
      <div key={index}>
        <input
          type="checkbox"
          checked={item}
          onChange={() => onChangehandler(index)}
        />
        {index + 1}
      </div>
    </>
  );
}
function CheckBoxList() {
  const arrayItems = Array.from({ length: 3 }, () => false);
  const [checked, setChecked] = useState(arrayItems);
  const checkisAllChecked = () => {
    /*let y = 0;
    for (let x of checked) {
      if (x) y++;
      else return null;
    }
    if (y == 10) return true; */
    return checked.every((ele) => ele === true);
  };
  return (
    <div>
      {checked.map((item, index) => (
        <div key={index}>
          <CheckBox
            item={item}
            index={index}
            setChecked={setChecked}
            array={checked}
          />
        </div>
      ))}
      {checkisAllChecked() ? <p>All checked</p> : ""}
    </div>
  );
}

export default CheckBoxList;
/*
import React, { useState } from "react";

function CheckboxList() {
  const [checkboxes, setCheckboxes] = useState(Array(10).fill(false));

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  const areAllCheckboxesChecked = () => {
    return checkboxes.every((checked) => checked);
  };

  const handlePrintSelected = () => {
    if (areAllCheckboxesChecked()) {
      const selectedCheckboxes = checkboxes
        .map((checked, index) => {
          if (checked) {
            return `Checkbox ${index + 1}`;
          }
          return null;
        })
        .filter(Boolean);

      alert(`Selected: ${selectedCheckboxes.join(", ")}`);
    } else {
      alert("Not all checkboxes are selected!");
    }
  };

  return (
    <div>
      {checkboxes.map((checked, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => handleCheckboxChange(index)}
            />
            Checkbox {index + 1}
          </label>
        </div>
      ))}
      <button onClick={handlePrintSelected}>Print Selected</button>
    </div>
  );
}

export default CheckboxList;
*/
