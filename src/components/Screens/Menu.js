// Package Import
import React from "react";

// File Import
import MenuItems from "./MenuItems";

class Menu extends React.Component {
  render() {
    const { selectedOption } = this.props;
    return (
      <div className="screen-menu">
        <div className="app-logo">
          <h3>
            <i>REACT IPOD</i>
          </h3>
        </div>
        <MenuItems
          optionsInMenu={this.props.optionsInMenu}
          selectedOption={selectedOption}
        />
      </div>
    );
  }
}

export default Menu;
