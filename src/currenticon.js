import React, { useState, useEffect } from "react";
import "./css/currenticon.css";
import SetIcon from "./seticon";

export default function Currenticon(props) {
  let [Class, setClass] = useState("");
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
  }, [props.icon]);
  const ids = [`01`, `02`, `03`, `04`, `09`, `10`, `11`, `13`, `50`];
  const iconclass = [
    `fa-sun`,
    `fa-cloud-sun`,
    `fa-cloud-sun`,
    `fa-cloud`,
    `fa-cloud-rain`,
    `fa-cloud-rain`,
    `fa-cloud-bolt`,
    `fa-snowflake`,
    `fa-smog`
  ];
  function checkid(n) {
    return n === props.icon.slice(0, 2);
  }
  function setclass() {
    setClass(`fa-solid ${iconclass[ids.findIndex(checkid)]} current-icon`);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="col">
        <div className="row align-items-center">
          <SetIcon class={Class} />
        </div>
      </div>
    );
  } else {
    setclass();
  }
}
