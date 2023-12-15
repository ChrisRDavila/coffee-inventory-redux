import React from "react";
import OrderList from "./OrderList";
import NewOrderForm from "./NewOrderForm";
import OrderDetail from "./OrderDetail";
import EditOrderForm from "./EditOrderForm";

class OrderControl extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false,
        mainOrderList: [],
        selectedOrder: null,
        editing: false
      };
    }

    handleClick = () => {
      if (this.state.selectedOrder != null) {
        this.setState({
          formVisibleOnPage: false,
          selectedOrder: null,
          editing: false
        });
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
      }
    }

    handleEditClick = () => {
      console.log("handleEditClick reached!");
      this.setState({editing: true});
    }

    handleBuyClick = () => {
      const selectedOrder = this.state.selectedOrder;

      if (selectedOrder.amount > 0) {
        this.setState({mainOrderList: this.state.mainOrderList.filter(order => order.id !== selectedOrder.id)
          .concat({...selectedOrder, amount: selectedOrder.amount - 1}),
          selectedOrder: null});
        }
      }

    handleAddingNewOrderToList = (newOrder) => {
      const newMainOrderList = this.state.mainOrderList.concat(newOrder);
      this.setState({
        mainOrderList: newMainOrderList,
        formVisibleOnPage: false });
    }

    handleChangingSelectedOrder = (id) => {
      const selectedOrder = this.state.mainOrderList.filter(order => order.id === id)[0];
      this.setState({selectedOrder: selectedOrder});
    }

    handleDeletingOrder = (id) => {
      const newMainOrderList = this.state.mainOrderList.filter(order => order.id !== id);
      this.setState({
        mainOrderList: newMainOrderList,
        selectedOrder: null
      });
    }

    handleEditingOrderInList = (orderToEdit) => {
      const editedMainOrderList = this.state.mainOrderList
        .filter(order => order.id !== this.state.selectedOrder.id)
        .concat(orderToEdit);
      this.setState({
        mainOrderList: editedMainOrderList,
        editing: false,
        selectedOrder: null
      });
    }
    

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing ) {
      currentlyVisibleState = <EditOrderForm order = {this.state.selectedOrder} onEditOrder={this.handleEditingOrderInList}/>
      buttonText = "Return to Inventory List";
    }
    else if (this.state.selectedOrder != null){
      currentlyVisibleState = <OrderDetail order = {this.state.selectedOrder} onClickingDelete={this.handleDeletingOrder} onClickingEdit={this.handleEditClick} onClickingBuy={this.handleBuyClick}/>
      buttonText = "Return to Inventory List";
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewOrderForm onNewOrderCreation={this.handleAddingNewOrderToList}/>;
      buttonText = "Return to Inventory List";
    } else {
      currentlyVisibleState = <OrderList orderList={this.state.mainOrderList} onOrderSelection={this.handleChangingSelectedOrder}/>;
      buttonText = "Add Entry to Inventory";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default OrderControl;