import React, { Component } from "react";

class NavBar extends Component {
  sectionRef = React.createRef();
  handleClick = event => {
    this.props.onSectionSelection(event.currentTarget.textContent);
  };

  render() {
    return (
      <nav>
        <ul>
          <li onClick={this.handleClick} ref={this.sectionRef}>
            All tasks
          </li>
          <li onClick={this.handleClick}>Complete</li>
          <li onClick={this.handleClick}>Incomplete</li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
