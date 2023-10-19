import Group from "./Group";
import {
  BsCheckCircleFill,
  BsCircle,
  BsExclamationSquareFill,
  BsSkipBackwardFill
} from "react-icons/bs";
import { RxAvatar, RxHalf2 } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import {
  PiCellSignalNoneFill,
  PiCellSignalMediumFill,
  PiCellSignalHighFill,
  PiCellSignalFullFill,
} from "react-icons/pi";

function Content(props) {
  const groups = props.groups;
  const keys = Object.keys(groups);
  keys.sort();
  const priorities = ["No priority", "Low", "Medium", "High", "Urgent"];
  const user_hash = new Map();
  props.users.forEach((user) => {
    user_hash.set(user.id, user.name);
  });

  const priority_icons = [
    <PiCellSignalNoneFill />,
    <PiCellSignalMediumFill style={{ color: "cadetblue" }} />,
    <PiCellSignalHighFill style={{ color: "limegreen" }} />,
    <PiCellSignalFullFill style={{ color: "orange" }} />,
    <BsExclamationSquareFill style={{ color: "orangered" }} />,
  ];
  const status_icons = {
    "Backlog": <BsSkipBackwardFill style={{ color: "brown" }} />,
    "Todo": <BsCircle />,
    "In progress": <RxHalf2 style={{ color: "orange" }} />,
    "Done": <BsCheckCircleFill style={{ color: "#5E6AD2" }} />,
    "Canceled": <MdCancel style={{ color: "silver" }} />,
  };
  const colors = ["cornflowerblue", "orange", "seagreen", "purple", "olive"];

  return (
    <div className="content d-flex flex-row">
      {keys.map((key, index) => (
        <Group
          key={key}
          icon={
            props.grouping === "User" ? (
              <RxAvatar style={{color:colors[index]}}/>
            ) : props.grouping === "Status" ? (
              status_icons[key]
            ) : (
              priority_icons[key]
            )
          }
          groupTitle={
            props.grouping === "Priority"
              ? priorities[key]
              : props.grouping === "User"
              ? user_hash.get(key)
              : key
          }
          groupCount={groups[key].length}
          groupData={groups[key]}
          grouping={props.grouping}
          order={props.order}
        />
      ))}
    </div>
  );
}

export default Content;
