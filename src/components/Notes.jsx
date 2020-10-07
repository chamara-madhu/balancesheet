import React, { Component } from "react";

import "../styles/notes.css";

export default class Notes extends Component {
  render() {
    return (
      <div className="row m-0">
        <div className="col note-div">
          <p className="report-heading mb-2">Question :</p>
          <p>
            Balance sheet – Do your research on a simple balance sheet from the
            finance sector and implement a program to manage a balance sheet
            using a programing language that you like. Please note that you need
            to research on what a balance sheet is on your own, design the
            system, make note of assumption and then implement and test the
            system.
          </p>
          <p className="report-heading mb-2 mt-4">Scope :</p>
          <ol>
            <li>Can add items to the "Trial Balance"</li>
            <li>Can edit items in the "Trial Balance"</li>
            <li>Can delete items from the "Trial Balance"</li>
            <li>
              Generate "Income Statement" and "Balance Sheet" simultaneously
            </li>
          </ol>

          <p className="report-heading mb-2 mt-4">Note :</p>
          <p>
            The "Trial Balance" credit and debit values should be equal to
            generate a proper (balanced) balance sheet.
          </p>
        </div>
      </div>
    );
  }
}
