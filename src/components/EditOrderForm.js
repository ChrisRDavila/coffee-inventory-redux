import React from "react";
import PropTypes from "prop-types";
import ReusableOrderForm from "./ReusableOrderForm";

function EditOrderForm(props){
  const { order } = props;

  

  function handleEditOrderFormSubmission(event) {
    event.preventDefault();

    const amountOfBags = event.target.bags.value;
    props.onEditOrder({
      name: event.target.name.value, 
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      amount: parseInt(amountOfBags * 130),
      id: order.id
    });
  }

  return (
    <React.Fragment>
      <ReusableOrderForm
      formSubmissionHandler={handleEditOrderFormSubmission}
      buttonText="Update Order" />
    </React.Fragment>
  );
}

EditOrderForm.propTypes = {
  order: PropTypes.object,
  onEditOrder: PropTypes.func
};

export default EditOrderForm;