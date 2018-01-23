import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMessage } from './actions';
import { bindActionCreators } from 'redux';

const Toggle = ({ messageVisibility, toggleMessage }) =>  (
  <div>
    {messageVisibility &&
      <p>See this if redux toggled</p>
      }
    <button onClick = {toggleMessage}> Toggle Me  
    </button>
  </div>
)
 // onClick: without bindActionCreators below, this would be: dispatch(toggleMessage())
 //Not sure if its worth it?


const mapStateToProps = (state) => ({
  messageVisibility: state.message.messageVisibility, //so we can pluck what we want
});

const mapDispatchToProps = (dispatch) => bindActionCreators( {toggleMessage}, dispatch );
//ABOVE: now this.props.toggleMessage. Same as toggleMessage : toggleMessage

export default connect(mapStateToProps, mapDispatchToProps)(Toggle); //now using enhanced version of toggle 