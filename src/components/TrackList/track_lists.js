import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';

import { convertToMinute } from '../../settings/const_func';

import HeadTrack from './head_track';
import IconItem from './icon_item';
import './track_list.css';

class TrackLists extends Component {

  render() {
    return (
      <div>
        <HeadTrack />
        <div>
          { this.props.trackList && this.props.trackList.length > 0 ?
            this.props.trackList.map((item, i) => (
              <div key={i} className={ i%2 === 0 ? 'row event' : 'row odd'} >
                <div className="col-md-2"><img src={ item.artworkUrl60 } alt={item.artistName} /></div>
                <div className="col-md-2">{ item.artistName }</div>
                <div className="col-md-2">{ item.trackName }</div>
                <div className="col-md-2">{ item.collectionName }</div>
                <div className="col-md-2">{ item.primaryGenreName }</div>
                <IconItem id={i} showDetails={this.props.showDetails} setIcons={item.setIcons}/>
                <div className="col-md-2"></div>
                <div id={i} className={`col-md-8 ${item.opened ? '' : 'hide'}`}>
                  <h4>{item.artistName}-{item.trackName} <Fontawesome name="music"/></h4>
                  <div className="row">
                  <div className="col-md-6">
                    <div>Collection: {item.collectionName}</div>
                    <div>Track count: {item.trackCount}</div>
                    <div>Price: {item.collectionPrice} USD</div>
                  </div>
                  <div className="col-md-4">
                    <div>Track duration: {convertToMinute(item.trackTimeMillis)} min</div>
                    <div>Track price: {item.trackPrice} USD</div>
                  </div>
                  </div>
                </div>
              </div>

            )) : null }
        </div>
      </div>
      );
  }
}

export default TrackLists;
