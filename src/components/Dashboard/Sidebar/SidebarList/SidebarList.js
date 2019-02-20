import React, { Component } from 'react';

class SidebarList extends Component {
  render() {
    const { title, children } = this.props
    return (
      <div>
        <p>{title}</p>
        {children}
      </div>
    );
  }
}

export default SidebarList;