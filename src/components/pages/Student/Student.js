import React from "react";
import { connect } from "react-redux";
import StudentTemplate from "../../templates/StudentTemplate";
import HomeTemplate from "../../templates/HomeTemplate";
import Navbar from "../../structures/Navbar/Navbar";

const Student = ({ student }) => {
  return (
    <HomeTemplate>
      <StudentTemplate
        name={student.first_name}
        points={student.total_points}
      />
      <Navbar />
    </HomeTemplate>
  );
};

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(Student);
