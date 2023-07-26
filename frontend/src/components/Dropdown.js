import React, { useState } from "react";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  const dropDownHandle = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    console.log(open);
  };

  return (
    <div className="container">
      <div className="card m-3" onClick={dropDownHandle}>
        <h5 className="card-header d-flex justify-content-between align-items-center">
          {props.question}{" "}
          <span className="float-right">
            {open && <>▲</>}
            {!open && <>▼</>}
          </span>
        </h5>

        {open && (
          <div className="card-body">
            <p className="card-text">{props.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
