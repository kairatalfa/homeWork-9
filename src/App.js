import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

// import {Fragment} from 'react'
// import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,  
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  const removeTask = (id) => {
    setUserList([...userList].filter((todo) => todo.id !== id));
  };                                              

  return (
    <>
      <AddUser onAddUser={addUserHandler} key="add-user" />
      <UsersList removeTask={removeTask} users={userList} key="use-list" />
    </>
  );
}

export default App;
 