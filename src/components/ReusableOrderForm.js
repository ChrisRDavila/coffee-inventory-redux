import React from "react";
import PropTypes from "prop-types";

function ReusableOrderForm(props){

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <h3>Options</h3>
        <hr/>
      <label for="name">Name:</label>
      <select name="name" id="name">
          <option value="Red Eye">Red Eye</option>
          <option value="Morning Blend">Morning Blend</option>
          <option value="Choco Lots">Choco Lots</option>
      </select>
      <select name="origin" id="origin">
          <option value="Columbian">Columbian</option>
          <option value="Malaysian">Malaysian</option>
          <option value="Antartic">Antartic</option>
      </select>
      <select name="price" id="price">
          <option value="20">Premium Ground</option>
          <option value="15">Basic</option>
      </select>
      <select name="roast" id="roast">
          <option value="dark">Dark Roast</option>
          <option value="light">Light Roast</option>
      </select>
      <select name="bags" id="bags">
          <option value="1">stock full order sack</option>
          <option value="2">stock double order sack</option>
      </select>

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableOrderForm;