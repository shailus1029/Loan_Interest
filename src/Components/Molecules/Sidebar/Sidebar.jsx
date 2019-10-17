import React, { Component } from "react";
import "./Sidebar.css";
import { List, Avatar } from "antd";
import "antd/dist/antd.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Ant Design Title 1"
        },
        {
          title: "Ant Design Title 2"
        },
        {
          title: "Ant Design Title 3"
        },
        {
          title: "Ant Design Title 4"
        }
      ]
    };
  }
  render() {
    return (
      <div className="sidebarContainer">
        <div className="historyheader">History Module</div>
        <List
          itemLayout="horizontal"
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <div className="singleHistory">
                <div className="loanheading">
                  <p className="subData1">Loan Amount</p>
                  <p className="subData2">Durations</p>
                </div>
                <div className="loanheading">
                  <p className="subData1">Interest</p>
                  <p className="subData2">Total Amount</p>
                </div>
              </div>
            </List.Item>
          )}
        />
        <div className="historyContent"></div>
      </div>
    );
  }
}
export default Sidebar;
