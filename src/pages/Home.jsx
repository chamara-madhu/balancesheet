import React, { Component } from "react";
import TrialBalance from "../components/TrialBalance";
import IncomeStatement from "../components/IncomeStatement";
import Balancesheet from "../components/Balancesheet";
import Notes from "../components/Notes";

import "../styles/common.css";

export default class Home extends Component {
  state = {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [],

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

    if (this.state.items.length === 1) {
      localStorage.removeItem("items");
    }
  };

  handleClearAll = () => {
    this.setState({ items: [] });

    localStorage.removeItem("items");
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

    if (!this.state.amount || this.state.amount < 1) {
      amountError = "Amount is invalid";
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

      document.getElementById("close-btn").click();
    }
  };

  handleUpdateModal = (id, name, amount, type) => {
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
      this.state.items.map((item, i) => {
        if (i === this.state.itemId) {
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
        <div className="cus-container">
          <Notes />

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
              <p className="report-desc">
                Shows business profits and losses over a given certain period of
                time.
              </p>

              <IncomeStatement
                revenues={revenues}
                expences={expences}
                totalRev={totalRev}
                totalExp={totalExp}
              />
            </div>
            <div className="balance-sheet-col">
              <p className="report-heading">Balancesheet</p>
              <p className="report-desc">
                Shows the assets, liabilities and equity at a given point in
                time.
              </p>

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
    );
  }
}
