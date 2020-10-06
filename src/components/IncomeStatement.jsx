import React, { Component } from "react";

import "../styles/income-statement.css";

export default class IncomeStatement extends Component {
  render() {
    return (
      <table className="table report-table">
        <tbody>
          <tr>
            <td className="sec-heading-td">Revenues</td>
            <td></td>
            <td></td>
          </tr>
          {this.props.revenues.map((rev, i) => (
            <tr key={i}>
              <td>{rev.name}</td>
              <td></td>
              <td>{rev.amount}</td>
            </tr>
          ))}
          <tr style={{ fontWeight: 500 }}>
            <td>Total Revenue</td>
            <td></td>
            <td>{this.props.totalRev}</td>
          </tr>
          <tr>
            <td className="sec-heading-td">Expences</td>
            <td></td>
            <td></td>
          </tr>
          {this.props.expences.map((exp, i) => (
            <tr key={i}>
              <td>{exp.name}</td>
              <td>{exp.amount}</td>
              <td></td>
            </tr>
          ))}
          <tr style={{ fontWeight: 500 }}>
            <td>Total Expences</td>
            <td></td>
            <td>({this.props.totalExp})</td>
          </tr>
          <tr style={{ fontWeight: 500 }}>
            <td>Net Income</td>
            <td></td>
            <td>{this.props.totalRev - this.props.totalExp}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
