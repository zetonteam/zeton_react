import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../../../api/action";
import apiClient from "../../../apiClient";

const Home = (props) => {
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
    <div>
      <h1>Hej</h1>
      {/* {
        choosenUser ? <Profile data={choosenUser} /> : <Home data={props.users && props.users} /> 
      } */}
    </div>

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


export default connect(mapStateToProps, mapDispatchToProps)(Home);
