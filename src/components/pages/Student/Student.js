import React from "react";
import { connect } from "react-redux";
import StudentTemplate from "../../templates/StudentTemplate";
import HomeTemplate from "../../templates/HomeTemplate";
import Navbar from "../../structures/Navbar/Navbar";

const Student = ({ student }) => (
  <HomeTemplate>
    <StudentTemplate name={student.first_name} points={student.total_points} />
    {console.log(student)}
    <Navbar />
  </HomeTemplate>
);

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(Student);
