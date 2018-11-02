import React from "react";

const Toolbar = props => {
  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <button className="btn btn-default">
          <i
            className={false ? "fa fa-check-square-o" : "fa fa-minus-square-o"}
          />
        </button>

        <button className="btn btn-default"onClick={props.markAsReadButtonClicked}>Mark As Read</button>

        <button className="btn btn-default">Mark As Unread</button>

        <select className="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select class="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" onClick={props.deleteMessageButtonClicked}>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
