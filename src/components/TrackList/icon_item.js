import React from 'react';
import Fontawesome from 'react-fontawesome';

const IconItem = (props) => {
    return (
      <div className="col-md-2">
        <Fontawesome
          className="float-right"
          name={props.setIcons ? 'plus' : 'minus'}
          size="2x"
          onClick={() => props.showDetails(props.id)}
        />
      </div>
    );
}
export default IconItem;
