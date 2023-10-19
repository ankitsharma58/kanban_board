import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";

function Header(props) {
  const [displayOpen, setDisplayOpen] = useState(false);

  return (
    <div className="header d-flex align-items-center">
      <div className="dropdown-display">
        <button
          className="dropdown-btn d-flex align-items-center"
          onClick={() => {
            setDisplayOpen(!displayOpen);
          }}
        >
          <BsSliders /> Display <HiOutlineChevronDown />
        </button>
        {displayOpen && (
          <div className="dropdown-content d-flex flex-col">
            <div className="dropdown-item d-flex align-items-center">
              <span>Grouping</span>
              <select
                className="dropdown-item-value"
                value={props.groupBy}
                onChange={(e) => {
                  props.setGroupBy(e.target.value);
                  setDisplayOpen(false);
                }}
              >
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>

            <div className="dropdown-item d-flex align-items-center">
              <span>Ordering</span>
              <select
                className="dropdown-item-value"
                value={props.orderBy}
                onChange={(e) => {
                  props.setOrderBy(e.target.value);
                  setDisplayOpen(false);
                }}
              >
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
