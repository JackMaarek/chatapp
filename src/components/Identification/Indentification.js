import React, { Component } from 'react';

import LogoText from './../../assets/logo_text.png'

class Indentification extends Component {
  render() {
    const { title } = this.props
    return (
      <div className='identification'>
        <div className="identification__block">
          <div className="identification__block__left-side">
            <img src={LogoText} alt="logo"/>
          </div>
          <div className="identification__block__right-side">
            <div className="identification__block__right-side__content">
              <h1>{title}</h1>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Indentification;