import React, { Component } from "react";

export default class Balancesheet extends Component {
  render() {
    return (
      <table className="table  report-table">
        <tbody>
          <tr>
            <td className="sec-heading-td">Assets</td>
            <td></td>
            <td></td>
          </tr>
          {this.props.assets.map((asset, i) => (
            <tr key={i}>
              <td>{asset.name}</td>
              <td></td>
              <td>{asset.amount}</td>
            </tr>
          ))}
          <tr style={{ fontWeight: 500 }}>
            <td>Total Asset</td>
            <td></td>
            <td className="border-top border-bottom">
              {this.props.totalAssets}
            </td>
          </tr>
          <tr>
            <td className="sec-heading-td">Equity</td>
            <td></td>
            <td></td>
          </tr>
          {this.props.equity.map((equ, i) => (
            <tr key={i}>
              <td>{equ.name}</td>
              <td>{equ.amount}</td>
              <td></td>
            </tr>
          ))}
          <tr>
            <td>Net Income</td>
            <td>{this.props.totalRev - this.props.totalExp}</td>
            <td></td>
          </tr>
          <tr style={{ fontWeight: 500 }}>
            <td>Total Equity</td>
            <td className="border-top"></td>
            <td>
              {this.props.totalEqu + this.props.totalRev - this.props.totalExp}
            </td>
          </tr>
          <tr>
            <td className="sec-heading-td">Liabilities</td>
            <td></td>
            <td></td>
          </tr>
          {this.props.liabilities.map((lib, i) => (
            <tr key={i}>
              <td>{lib.name}</td>
              <td>{lib.amount}</td>
              <td></td>
            </tr>
          ))}
          <tr style={{ fontWeight: 500 }}>
            <td>Total Liabilities</td>
            <td className="border-top"></td>
            <td>{this.props.totalLib}</td>
          </tr>

          <tr style={{ fontWeight: 500 }}>
            <td>Total Equity and Liabilities</td>
            <td></td>
            <td className="border-top">
              {this.props.totalLib +
                this.props.totalEqu +
                this.props.totalRev -
                this.props.totalExp}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
