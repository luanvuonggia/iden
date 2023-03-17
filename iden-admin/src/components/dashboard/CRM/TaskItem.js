import React from "react";
import {Avatar, Checkbox, Tooltip, Button} from "antd";


import Aux from "util/Auxiliary";
import {taskTags} from "../../../../src/routes/main/dashboard/CRM/data";
import jisoo from "assets/images/jisoo.webp";

const getTags = (tags) => {
  return taskTags.map((tag, index) => {
    if (tags.includes(tag.id)) {
      return <Tooltip key={index} title={tag.name}>
        <li className={`gx-text-${tag.color}`}>
          <i className="icon icon-circle gx-fs-xxs"/>
        </li>
      </Tooltip>
    }
    return null;
  });
};

const TaskItem = ({data, onChange}) => {

  const {title, tags, completed, user, dueDate} = data;
  return (
    <Aux>
      <div className="gx-media gx-task-list-item gx-flex-nowrap">
        <div className="gx-mr-3">
          <Checkbox checked={completed} onChange={() => onChange(data)}/>
        </div>
        <div className="gx-media-body gx-task-item-content">
          <div>
            <p>Request an IDEN</p>
          </div>
          <div>
            <Avatar size={40} src={jisoo}/>
            <span style={{marginRight: '18px', marginLeft: '8px'}}>Jisoo</span>
            <Button type="danger">Reject</Button>
            <Button type="primary">Approve</Button>
          </div>
          <></>
        </div>
      </div>
    </Aux>
  );
};

export default TaskItem;
