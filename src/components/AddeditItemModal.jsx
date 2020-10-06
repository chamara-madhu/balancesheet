import React, { Component } from "react";
import classnames from "classnames";

export default class AddeditItemModal extends Component {
  render() {
    return (
      <div
        class="modal fade"
        id="addEditModal"
        tabindex="-1"
        aria-labelledby="addEditModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addEditModal">
                {this.props.isUpdate ? "Update Item" : "Add Item"}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                id="close-btn"
                onClick={this.props.handleModalClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form class="needs-validation" novalidate>
                <div class="form-group">
                  <label for="itemName">Item Name</label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": this.props.itemNameError,
                    })}
                    id="itemName"
                    name="itemName"
                    value={this.props.itemName}
                    onChange={this.props.handleChange}
                    required
                  />
                  <div class="invalid-feedback">{this.props.itemNameError}</div>
                </div>
                <div class="form-group">
                  <label for="amount">Amount</label>
                  <input
                    type="number"
                    className={classnames("form-control", {
                      "is-invalid": this.props.amountError,
                    })}
                    id="amount"
                    name="amount"
                    value={this.props.amount}
                    onChange={this.props.handleChange}
                    required
                  />
                  <div class="invalid-feedback">{this.props.amountError}</div>
                </div>
                <div class="form-group">
                  <label for="type">Type</label>
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
                    <option value="EXPENDITURE">Expence</option>
                    <option value="LIABILITY">Liability</option>
                    <option value="REVENUE">Revenue</option>
                  </select>
                  <div class="invalid-feedback">{this.props.typeError}</div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.props.handleModalClose}
              >
                Cancel
              </button>
              {this.props.isUpdate ? (
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.props.handleEditItem}
                >
                  Update
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-primary"
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
