import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';

class IconItem extends Component {
  state = {
    selected: false
  }

  handleClick = (id) => {
    this.setState({
      selected: !this.state.selected
    });
    document.getElementById(`${id}`).classList.toggle('hide');
  }

  render() {
    return (
      <div className="col-md-2">
        <Fontawesome
          className="float-right"
          name={this.state.selected ? 'minus' : 'plus'}
          size="2x"
          onClick={() => this.handleClick(this.props.id)}
        />
      </div>
    );
  }

}

export default IconItem;
