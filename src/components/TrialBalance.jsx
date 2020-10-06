import React, { Component } from "react";

import AddeditItemModal from "./AddeditItemModal";

import "../styles/trial-balance.css";

export default class TrialBalance extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row m-0">
          <div className="col cus-col">
            <div className="row m-0">
              <div className="col p-0 trial-balance">
                <p className="heading">Trial Balance</p>
                <p className="heading-desc">Which shows forwarded balances</p>
                <p
                  className="clear-all-items"
                  onClick={this.props.handleClearAll}
                >
                  Clear All Items
                </p>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Items</td>
                      <td>Debit</td>
                      <td>Credit</td>
                      <td>Actions</td>
                    </tr>
                    {this.props.items.map((item, i) => (
                      <tr key={i}>
                        <td>
                          {item.name}{" "}
                          {item.type === "REVENUE" ? (
                            <span className="rev">Revenue</span>
                          ) : item.type === "EXPENDITURE" ? (
                            <span className="exp">Expence</span>
                          ) : item.type === "ASSET" ? (
                            <span className="asset">Asset</span>
                          ) : item.type === "EQUITY" ? (
                            <span className="equity">Equity</span>
                          ) : (
                            <span className="lib">Liability</span>
                          )}
                        </td>
                        <td>
                          {item.type === "ASSET" || item.type === "EXPENDITURE"
                            ? item.amount
                            : null}
                        </td>
                        <td>
                          {item.type === "LIABILITY" ||
                          item.type === "REVENUE" ||
                          item.type === "EQUITY"
                            ? item.amount
                            : null}
                        </td>
                        <td>
                          <i
                            class="fas fa-pencil-alt"
                            data-toggle="modal"
                            data-target="#addEditModal"
                            onClick={() =>
                              this.props.handleUpdateModal(
                                i,
                                item.name,
                                item.amount,
                                item.type
                              )
                            }
                          ></i>
                          <i
                            class="far fa-trash-alt"
                            onClick={() => this.props.handleDeleteItem(i)}
                          ></i>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>
                        Total{" "}
                        {this.props.totalExp + this.props.totalAssets ===
                        this.props.totalRev +
                          this.props.totalLib +
                          this.props.totalEqu ? (
                          <span style={{ color: "green", fontWeight: 400 }}>
                            (Trial balance is not matched.)
                          </span>
                        ) : (
                          <span style={{ color: "red", fontWeight: 400 }}>
                            (Trial balance is not matched.)
                          </span>
                        )}
                      </td>
                      <td
                        style={{
                          color:
                            this.props.totalExp + this.props.totalAssets ===
                            this.props.totalRev +
                              this.props.totalLib +
                              this.props.totalEqu
                              ? "green"
                              : "red",
                        }}
                      >
                        {this.props.totalExp + this.props.totalAssets}
                      </td>
                      <td
                        style={{
                          color:
                            this.props.totalExp + this.props.totalAssets ===
                            this.props.totalRev +
                              this.props.totalLib +
                              this.props.totalEqu
                              ? "green"
                              : "red",
                        }}
                      >
                        {this.props.totalRev +
                          this.props.totalLib +
                          this.props.totalEqu}
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <p
                  className="add-item-btn"
                  data-toggle="modal"
                  data-target="#addEditModal"
                  onClick={this.props.handleModalClose}
                >
                  <i class="fas fa-plus"></i> Add Item
                </p>
              </div>
            </div>
          </div>
        </div>
        <AddeditItemModal
          itemName={this.props.itemName}
          amount={this.props.amount}
          type={this.props.type}
          itemNameError={this.props.itemNameError}
          amountError={this.props.amountError}
          typeError={this.props.typeError}
          handleChange={this.props.handleChange}
          handleAddItem={this.props.handleAddItem}
          handleModalClose={this.props.handleModalClose}
          handleEditItem={this.props.handleEditItem}
          isUpdate={this.props.isUpdate}
        />
      </React.Fragment>
    );
  }
}
