import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../../api/action";
import apiClient from "../../apiClient";
import './Dashboard.css';
import Home from "../../components/Home/HomeCaregiver";
import Profile from "../../components/Profile/Profile";

const DashboardPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [choosenUser, setChoosenUser] = useState(props.user);
  const studentDataURL = "/api/users/students/";

  useEffect(() => {
    setChoosenUser(props.user);
  //   console.log(choosenUser)
  }, [props]);


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
    <section className="dashboard">
      {
        choosenUser ? <Profile data={choosenUser} /> : <Home data={props.users && props.users} /> 
      }
    </section>

  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user,
    hej: console.log(state.user)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(getUsersAction(data)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
