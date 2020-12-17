import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../../api/action";
import apiClient from "../../apiClient";
import Profile from "../../components/Profile/Profile";
import Home from "../../components/Home/HomeCaregiver";

const DashboardPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [children, setChildren] = useState();
  const studentDataURL = "/api/users/students/";

  // useEffect(() => {
  //   console.log(children)
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await apiClient(studentDataURL);
      //setChildren(result.data)
      props.getData(result.data)
      setIsLoading(false);
    };

    fetchData();

  }, [studentDataURL]);

  return (
    <>
      <Home data={props.users && props.users} />
    </>

  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    //hej: console.log(state.users)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(getUsersAction(data)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
