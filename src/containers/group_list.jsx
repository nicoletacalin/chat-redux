import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectGroup, fetchMessages } from '../actions/index';

class GroupList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedGroup !== this.props.selectedGroup) {
      this.props.fetchMessages(nextProps.selectedGroup);
    }
  }

  handleClick = (channel) => {
    this.props.selectGroup(channel);
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedGroup ? 'active' : null}
        onClick={() => this.handleClick(channel)}
        role="presentation"
      >
        #{channel}
      </li>
    );
  }

  render() {
    return (
      <div className="channel-list">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedGroup: state.selectedGroup
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGroup, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
