import React from "react";
import { connect } from "react-redux";
import StudentTemplate from "../../templates/StudentTemplate";
import HomeTemplate from "../../templates/HomeTemplate";
import BottomNavbar from "../../structures/BottomNavbar/BottomNavbar";

const Student = ({ student }) => (
  <HomeTemplate>
    <StudentTemplate name={student.first_name} />
    <BottomNavbar />
  </HomeTemplate>
);

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(Student);
