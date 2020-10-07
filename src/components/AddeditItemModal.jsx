import React, { Component } from "react";
import classnames from "classnames";

import "../styles/modal.css";

export default class AddeditItemModal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="addEditModal"
        tabIndex="-1"
        aria-labelledby="addEditModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addEditModal">
                {this.props.isUpdate ? "Update Item" : "Add Item"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                id="close-btn"
                onClick={this.props.handleModalClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="needs-validation" novalidate>
                <div className="form-group">
                  <label htmlFor="itemName">Item Name</label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": this.props.itemNameError,
                    })}
                    id="itemName"
                    name="itemName"
                    value={this.props.itemName}
                    onChange={this.props.handleChange}
                    placeholder="E.g. Electricity Bill"
                    required
                  />
                  <div className="invalid-feedback">
                    {this.props.itemNameError}
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="amount">Amount</label>
                      <input
                        type="number"
                        className={classnames("form-control", {
                          "is-invalid": this.props.amountError,
                        })}
                        id="amount"
                        name="amount"
                        value={this.props.amount}
                        onChange={this.props.handleChange}
                        min="0"
                        required
                      />
                      <div className="invalid-feedback">
                        {this.props.amountError}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="type">Type</label>
                      <select
                        className={classnames("form-control", {
                          "is-invalid": this.props.typeError,
                        })}
                        id="type"
                        name="type"
                        value={this.props.type}
                        onChange={this.props.handleChange}
                        required
                      >
                        <option selected hidden>
                          -- Select --
                        </option>
                        <option value="ASSET">Asset</option>
                        <option value="EQUITY">Equity</option>
                        <option value="EXPENDITURE">Expense</option>
                        <option value="LIABILITY">Liability</option>
                        <option value="REVENUE">Revenue</option>
                      </select>
                      <div className="invalid-feedback">
                        {this.props.typeError}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {this.props.isUpdate ? (
                <button
                  type="button"
                  className="btn generate-btn"
                  onClick={this.props.handleEditItem}
                >
                  Update
                </button>
              ) : (
                <button
                  type="button"
                  className="btn generate-btn"
                  onClick={this.props.handleAddItem}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
