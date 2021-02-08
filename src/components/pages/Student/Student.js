import React, { useState } from "react";
import { connect } from "react-redux";
import StudentTemplate from "../../templates/StudentTemplate";
import PointsTemplate from "../../templates/PointsTemplate";
import HomeTemplate from "../../templates/HomeTemplate";
import Navbar from "../../structures/Navbar/Navbar";

const Student = ({ student }) => {
  const [actualPanel, setActualPanel] = useState("dashboard");

  const handlePanel = (event) => {
    setActualPanel(event);
  };

  return (
    <HomeTemplate>
      {actualPanel === "dashboard" && (
        <StudentTemplate
          name={student.first_name}
          points={student.total_points}
          handlePanel={handlePanel}
        />
      )}
      {actualPanel === "points" && (
        <PointsTemplate
          points={student.total_points}
          handlePanel={handlePanel}
        />
      )}
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
