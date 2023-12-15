import React from "react";
import PropTypes from "prop-types";

function Order(props){
  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenOrderClicked(props.id)}>
        <h3>{props.name} from {props.origin}</h3>
        <p><em>Price per pound: ${props.price}</em></p>
        <p><em>Roast: {props.roast}</em></p>
        <p><em>In Stock: {props.amount}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Order.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  amount: PropTypes.number,
  bags: PropTypes.number,
  id: PropTypes.string,
  whenOrderClicked: PropTypes.func,
};

export default Order;