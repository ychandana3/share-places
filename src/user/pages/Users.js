import React, {useEffect, useState} from "react";
import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import HttpHook from "../../shared/hooks/http-hook";

const Users = () => {
  const [users, setUsers] = useState();
  const {isLoading, error, sendRequest, clearError} = HttpHook();

  useEffect(() =>{
      const getUsers = async() => {
      try{
        const responseData = await sendRequest('http://localhost:5000/api/users');
        setUsers(responseData.users);
      }
      catch(err){}
    };
    getUsers();  
  },[]);

  return (
  <React.Fragment>
    <ErrorModal error = {error} onClear = {clearError}/>
    {isLoading && 
    <div className="center">
      <LoadingSpinner></LoadingSpinner>
      </div>
    }
    {!isLoading && users && <UsersList items={users} />}
  </React.Fragment>
  )
};

export default Users;
