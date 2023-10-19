import { PiCellSignalFullFill, PiCellSignalHighFill, PiCellSignalMediumFill, PiCellSignalNoneFill } from "react-icons/pi";
import Card from "./Card";
import { BsExclamationSquareFill, BsPlusLg, BsThreeDots } from "react-icons/bs";

function Group(props) {
  const cmp = props.order === "Title" ? ((a, b) => { return a.title <= b.title ? -1 : 1}) : ((a, b) => { return b.priority - a.priority; });
  const tickets = props.groupData;
  tickets.sort(cmp);

  const priority_icons = [
    <PiCellSignalNoneFill />,
    <PiCellSignalMediumFill />,
    <PiCellSignalHighFill />,
    <PiCellSignalFullFill />,
    <BsExclamationSquareFill />,
  ];

  return (
    <div className="group d-flex flex-col">
      <div className="group-header d-flex align-items-center flex-row">
        <div className="group-preicon d-flex align-items-center">{props.icon}</div>
        <div className="group-header-content d-flex align-items-center">
          <span className="group-title">{props.groupTitle}</span>
          <span className="group-count">{props.groupCount}</span>
        </div>
        <div className="group-posticon d-flex flex-row align-items-center">
            <BsPlusLg />
            <BsThreeDots />
        </div>
      </div>
      <div className="group-content">
        {
          tickets.map((ticket) => (
            <Card
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              tags={ticket.tag}
              icon={props.grouping !== "Priority" ? priority_icons[ticket.priority] : null}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Group;
