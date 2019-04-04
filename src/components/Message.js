import React, { Component } from 'react';
import './Message.css';
import moment from 'moment';

class Message extends Component {
 // trashedButton changes the text of the trash button and uses the functionality
 // prop to actually remove the message from view. 
 trashedButton() {
    const { isTrashed } = this.props.message.meta;
    const modifier = (isTrashed) ? 'Message__trash-btn-untrash' : '';
    const text = (isTrashed) ? 'Untrash' : 'Trash'

    return (
      <button 
        className={`Message__trash-btn ${modifier}`}
        onClick={() => this.props.toggleTrashed(this.props.message.id)}
      >
        {text}
      </button>
    );
  }
  // Changes the text of the starred box, calling upon the toggleStarred prop
  // in order to change the number of starred messages
  starredButton() {
    const { isStarred } = this.props.message.meta;
    const modifier = (isStarred) ? 'Message__button--starred' : '';
    const text = (isStarred) ? 'Starred!' : 'Star Message!'

    return (
      <button 
        className={`Message__button ${modifier}`}
        onClick={() => this.props.toggleStarred(this.props.message.id)}
      >
        {text}
      </button>
    );
  }

  render() {
    // Using object destructuring to create a message variable
    const { message } = this.props;

    const containsSearch = message.content.includes(this.props.searchValue);
    const infoModifier = (containsSearch) ? 'Message__info--highlighted' : '';

   
    if (this.props.hideTrashedMessages && message.meta.isTrashed) {
      return null;
    } else if (!this.props.hideTrashedMessages && !message.meta.isTrashed) {
      return null;
    }
    return (
      <div className="Message">
          <div className="Message__picture">
            <img src={message.avatar} alt= "message.avatar"/>
              <div className="Message__name">
                {message.handle}
              </div>
          </div>
          <div className="Message__content">
            <div className="Message__date">
              {message.source} | {moment(message.timestamp).format('LL')} 
            </div>
            <div className={`Message__info ${infoModifier}`}>
              {message.content} 
            </div>
          </div>
          <div className="Message__button-container">
            {this.trashedButton()} 
            {this.starredButton()}
          </div>
      </div>
    );
  }
}

export default Message;