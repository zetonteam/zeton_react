import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './Profile.css';
import apiClient from "../../apiClient";
import ProfileMain from './ProfileMain';
import ProfilePoints from './ProfilePoints';
import Footer from '../Footer/Footer';


const Profile = ({ data, ...props }) => {
  const [points, setPoints] = useState(0);
  const [panel, setPanel] = useState('0');

  const handlePanel = (nmbr) => {
    setPanel(nmbr)
  }

  const panelSwitcher = (nmbr) => {
    switch (nmbr) {
      case '0':
        return <ProfileMain data={data} handlePanel={handlePanel}/>;
        break;
      case '1':
        return <ProfilePoints data={data} handlePanel={handlePanel}/>;
        break;
      default:
        return <ProfileMain data={data} />;
    }
  }

  return (
    <>
      {panelSwitcher(panel)}
      <Footer />
    </>

  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    //hej: console.log(state.users)
  };
};

export default connect(mapStateToProps)(Profile);



// const [dailyPoints, setDailyPoints] = useState(0);
// const [exp, setExp] = useState(0);
// const [studentName, setStudentName] = useState("-")
// const studentDataURL = "/api/users/students/1";

// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   const fetchData = async () => {
//     setIsLoading(true);

//     const result = await apiClient(studentDataURL);

//     setStudentName(result.data.first_name);
//     setPoints(result.data.total_points);
//     setDailyPoints(result.data.daily_points);
//     setExp(result.data.exp_points);
//     setIsLoading(false);
//   };

//   fetchData();
// }, [studentDataURL]);

// const addPoints = () => {
//   setPoints(points + 1);
//   setDailyPoints(dailyPoints + 1);
// };

// useEffect(() => {

//   findUser(props.users)

// }, [props])