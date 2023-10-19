import axios from "axios";
import Header from "./components/Header";
import Content from "./components/Content";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [groupBy, setGroupBy] = useState(localStorage.getItem("groupBy") || "Status");
  const [orderBy, setOrderBy] = useState(localStorage.getItem("orderBy") || "Title");
  const [groups, setGroups] = useState(undefined);
  const [users, setUsers] = useState(undefined);
  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
  async function GetData() {
    await axios
      .get(url)
      .then((res) => {
        setUsers(res.data.users);
        if (groupBy === "Status")
          setGroups(Object.groupBy(res.data.tickets, ({ status }) => status));
        else if (groupBy === "User")
          setGroups(Object.groupBy(res.data.tickets, ({ userId }) => userId));
        else if (groupBy === "Priority")
          setGroups(
            Object.groupBy(res.data.tickets, ({ priority }) => priority)
          );
      })
      .catch((err) => {
        console.log("Couldn't fetch data from API", err);
      });
  }

  useEffect(() => {
    GetData();
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("orderBy", orderBy);
  }, [groupBy, orderBy]);

  return (
    <div>
      <Header groupBy={groupBy} setGroupBy={setGroupBy} orderBy={orderBy} setOrderBy={setOrderBy} />
      {groups  ? (
        <Content groups={groups} users={users} grouping={groupBy} order={orderBy} />
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}
export default App;
