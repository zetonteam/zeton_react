import React from "react";
import { connect } from "react-redux";
import StudentTemplate from "../../templates/StudentTemplate";
import HomeTemplate from "../../templates/HomeTemplate";
import BottomNavbar from "../../structures/BottomNavbar/BottomNavbar";

const Settings = ({ student }) => (
  <HomeTemplate>
    <div>Settings</div>
    <BottomNavbar />
  </HomeTemplate>
);

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(Settings);
