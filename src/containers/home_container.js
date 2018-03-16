import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDefaultList, getAutorList, showDetails } from '../actions';
import { bindActionCreators } from 'redux';

import TrackLists from '../components/TrackList/track_lists';
import SearchAutor from '../components/Search/search_autor';

class HomeContainer extends Component {

  state = {
      inputValue: 'The Bitls'
  }

  componentWillMount() {
    this.props.getDefaultList();
  }

  getSearch = (e) => {
    this.setState({
      inputValue: e.target.value
    })
    this.props.getAutorList(this.state.inputValue);
  }

  render() {
    return (
      <div>
        <SearchAutor getSearch={this.getSearch} value={this.state.inputValue}/>
        <TrackLists trackList={this.props.trackList} showDetails={this.props.showDetails}/>
      </div>
    );
  }

}

const mapStateToProps = state => ({
    trackList: state.defaultList.trackList
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDefaultList, getAutorList, showDetails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
