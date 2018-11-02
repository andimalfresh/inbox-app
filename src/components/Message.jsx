import React from "react";

const Message = props => {
  return (
    <div className={props.message.read ? "row message read" : "row message unread"} onClick={() => props.messageRead(props.message.id)}>
      <div class="col-xs-1">
        <div class="row">
          <div class="col-xs-2">
            <input type="checkbox" onClick={props.messageSelected} className={(typeof props.message.selected !== "undefined") && props.message.selected === true ? "selected" : "not selected"}/>
          </div>
          <div class="col-xs-2">
            <i class="star fa fa-star-o" />
          </div>
        </div>
      </div>
      <div class="col-xs-11">
        <a href="#">{props.message.subject}</a>
      </div>
    </div>
  );
};

export default Message;
