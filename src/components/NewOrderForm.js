import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableOrderForm from "./ReusableOrderForm";

function NewOrderForm(props){

  function handleNewOrderFormSubmission(event) {
    event.preventDefault();

    const amountOfBags = event.target.bags.value;


    props.onNewOrderCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      price: parseInt(event.target.price.value), 
      roast: event.target.roast.value,
      bags: 0,
      amount: parseInt(amountOfBags * 130),
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableOrderForm
      formSubmissionHandler={handleNewOrderFormSubmission}
      buttonText="Add to Inventory" />
    </React.Fragment>
  );
}

NewOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func
};

export default NewOrderForm;