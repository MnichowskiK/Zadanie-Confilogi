
import chrome from '../images/logo-chrome.svg';
import firefox from '../images/logo-firefox.svg';
import opera from '../images/logo-opera.svg';
import React from "react";
import Card from "../Components/Card";
import classes from "./Extensions.module.scss";

function Extensions() {
  return (
    <div className={classes.extensions}>
      <div className={classes.extensions_text}>
        <h2>Download the extension</h2>
        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
      </div>
      <div className={classes.cards_container}>
        <Card browser={chrome} name="chrome" version='62' />
        <Card browser={firefox} name="firefox" version='55' />
        <Card browser={opera} name="opera" version='46' />
      </div>
    </div>
  );
}

export default Extensions;
