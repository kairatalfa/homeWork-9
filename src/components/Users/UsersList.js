import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = ({ users, removeTask }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className={classes.title}>
              {" "}
              {user.name} ({user.age} years old)
            </div>

            <div  onClick={() => removeTask(user.id)}>
                   <h1 className="color" >X</h1>  
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
