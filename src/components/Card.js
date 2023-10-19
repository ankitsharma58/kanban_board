import { useState } from "react";
import avatar from "./img/avatar.jpg";
import { GoDotFill } from "react-icons/go";

function Card(props) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="card d-flex flex-col align-items-center">
      <div className="card-header d-flex flex-row align-items-center">
        <span className="card-id">{props.id}</span>
        <span className="card-user-img d-flex align-items-center">
          <img src={avatar} className="avatar" alt="avatar"></img>
        </span>
      </div>
      <div className="card-body d-flex align-items-center">
        <div className="checkbox-container d-flex align-items-center">
          <input
            type="checkbox"
            checked={props.checked}
            className="rounded-checkbox"
            id="checkbox"
          />
        </div>
        <div className="card-title">
          {props.title.length < 55
            ? props.title
            : expand
            ? props.title
            : props.title.slice(0, 55)}
          {props.title.length > 55 ? (
            <span
              className="expand"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? " << show less" : "..."}
            </span>
          ) : null}
        </div>
      </div>
      <div className="card-footer d-flex align-items-center">
        {props.icon ? (
          <span className="card-tag tag-preicon d-flex align-items-center">
            {props.icon}
          </span>
        ) : null}
        {props.tags.map((tag) => (
          <span
            className="card-tag tag-content d-flex align-items-center"
            key={tag}
          >
            <GoDotFill />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
