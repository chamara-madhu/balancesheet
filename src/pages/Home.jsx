import React, { Component } from "react";
import TrialBalance from "../components/TrialBalance";
import IncomeStatement from "../components/IncomeStatement";
import Balancesheet from "../components/Balancesheet";

import "../styles/common.css";

export default class Home extends Component {
  state = {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [
          {
            name: "Building",
            type: "ASSET",
            amount: 2500,
          },
          {
            name: "Elexity Bill",
            type: "EXPENDITURE",
            amount: 3000,
          },
          {
            name: "Loan",
            type: "LIABILITY",
            amount: 500,
          },
          {
            name: "Revenue",
            type: "REVENUE",
            amount: 12500,
          },
          {
            name: "Capital",
            type: "EQUITY",
            amount: 5500,
          },
          {
            name: "Telephone bill",
            type: "EXPENDITURE",
            amount: 500,
          },
          {
            name: "Sales",
            type: "REVENUE",
            amount: 800,
          },
          {
            name: "Lap top",
            type: "ASSET",
            amount: 2500,
          },
        ],

    itemName: "",
    amount: 0,
    type: "",
    itemNameError: "",
    amountError: "",
    typeError: "",
    isUpdate: false,
  };

  handleDeleteItem = (id) => {
    const filterItems = this.state.items.filter((el, i) => i !== id);

    this.setState({ items: filterItems });

    localStorage.setItem("items", JSON.stringify(filterItems));
  };

  handleClearAll = () => {
    this.setState({ items: [] });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name + "Error"]: "",
    });
  };

  // validate
  validate = () => {
    let itemNameError = "";
    let amountError = "";
    let typeError = "";

    if (!this.state.amount) {
      amountError = "Amountr is required";
    }

    if (!this.state.itemName) {
      itemNameError = "Item name is required";
    }

    if (!this.state.type) {
      typeError = "Type is required";
    }

    if (itemNameError || typeError || amountError) {
      this.setState({
        itemNameError,
        amountError,
        typeError,
      });
      return false;
    }

    return true;
  };

  handleAddItem = (e) => {
    e.preventDefault();
    if (this.validate()) {
      const obj = {
        name: this.state.itemName,
        type: this.state.type,
        amount: parseInt(this.state.amount),
      };

      const items = [...this.state.items, obj];

      this.setState({ items });

      localStorage.setItem("items", JSON.stringify(items));
    }
  };

  handleUpdateModal = (id, name, amount, type) => {
    console.log(id);
    this.setState({
      itemId: id,
      itemName: name,
      amount: amount,
      type: type,
      isUpdate: true,
    });
  };

  handleEditItem = () => {
    if (this.validate()) {
      console.log("hi");
      this.state.items.map((item, i) => {
        console.log(i);
        console.log(this.state.itemId);
        if (i === this.state.itemId) {
          console.log("bye");
          console.log(this.state.itemName);
          item.name = this.state.itemName;
          item.amount = parseInt(this.state.amount);
          item.type = this.state.type;
        }
      });

      localStorage.setItem("items", JSON.stringify(this.state.items));

      document.getElementById("close-btn").click();
    }
  };

  handleModalClose = () => {
    this.setState({
      itemName: "",
      amount: 0,
      type: "",
      itemNameError: "",
      amountError: "",
      typeError: "",
      isUpdate: false,
      itemId: "",
    });
  };

  render() {
    console.log(this.state.itemName);
    const revenues = this.state.items.filter((el) => el.type === "REVENUE");
    const expences = this.state.items.filter((el) => el.type === "EXPENDITURE");
    const assets = this.state.items.filter((el) => el.type === "ASSET");
    const liabilities = this.state.items.filter(
      (el) => el.type === "LIABILITY"
    );
    const equity = this.state.items.filter((el) => el.type === "EQUITY");

    const totalRev = revenues.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.amount;
    }, 0);

    const totalExp = expences.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.amount;
    }, 0);
    const totalAssets = assets.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.amount;
    }, 0);
    const totalLib = liabilities.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.amount;
    }, 0);
    const totalEqu = equity.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.amount;
    }, 0);

    return (
      <div className="container-fluid">
        {/* <div className="row m-0"> */}
        <div className="cus-container">
          {/* <div className=""> */}
          <TrialBalance
            items={this.state.items}
            totalRev={totalRev}
            totalExp={totalExp}
            totalAssets={totalAssets}
            totalLib={totalLib}
            totalEqu={totalEqu}
            handleDeleteItem={this.handleDeleteItem}
            handleClearAll={this.handleClearAll}
            itemName={this.state.itemName}
            amount={this.state.amount}
            type={this.state.type}
            itemNameError={this.state.itemNameError}
            amountError={this.state.amountError}
            typeError={this.state.typeError}
            handleChange={this.handleChange}
            handleAddItem={this.handleAddItem}
            handleModalClose={this.handleModalClose}
            handleUpdateModal={this.handleUpdateModal}
            handleEditItem={this.handleEditItem}
            isUpdate={this.state.isUpdate}
          />

          <div className="row m-0">
            <div className="pnl-col">
              <p className="report-heading">Income Statement</p>
              <p className="report-desc">Which shows financial Performance</p>

              <IncomeStatement
                revenues={revenues}
                expences={expences}
                totalRev={totalRev}
                totalExp={totalExp}
              />
            </div>
            <div className="balance-sheet-col">
              <p className="report-heading">Balancesheet</p>
              <p className="report-desc">Which shows financial status</p>

              <Balancesheet
                assets={assets}
                liabilities={liabilities}
                equity={equity}
                totalAssets={totalAssets}
                totalLib={totalLib}
                totalEqu={totalEqu}
                totalRev={totalRev}
                totalExp={totalExp}
              />
            </div>
          </div>
        </div>
      </div>
      // {/* </div> */}
      // </div>
    );
  }
}
