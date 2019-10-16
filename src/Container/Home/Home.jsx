import React, { Component } from "react";
import "./Home.css";
import AddLoanAmount from "../../Components/Molecules/AddLoanAmount/AddLoanAmount.jsx";
import LoanDetails from "../../Components/Molecules/LoanDetails/LoanDetails.jsx";
import Sidebar from "../../Components/Molecules/Sidebar/Sidebar.jsx";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="mainDiv">
          <div className="leftDiv">
            <div className="addAmountDiv">
              <AddLoanAmount />
            </div>
            <div className="DetailsDiv">
              <LoanDetails />
            </div>
          </div>
          <div className="rightDiv">
            <div className="sidebar">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
