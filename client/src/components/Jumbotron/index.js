import React from "react";
import "./style.css";
//import UserContext from "../../utils/userContext"

//"../utils/userContext";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron" id="jumbotron">
      {children}

    </div>

  );
}

export default Jumbotron;
