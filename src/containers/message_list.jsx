import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { fetchMessages } from '../actions';
import MessageForm from '../containers/message_form';
import Message from '../components/message';


class MessageList extends Component {

  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrolHeight;

  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedGroup);
  }


  render() {
    return(
      <div className="message-list">
        <div className="channel-title">
          <span>Channel #{this.props.selectedGroup}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedGroup: state.selectedGroup
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchMessages}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
