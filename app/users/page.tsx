import React from "react";
import UserTable from "./UserTable";

const usersPage = async () => {
  
  return (
    <>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
     <UserTable />
    </>
  );
};

export default usersPage;
