import React from "react";
import StudentTemplate from "../../templates/StudentTemplate";
import HomeTemplate from "../../templates/HomeTemplate";
import Navbar from "../../structures/Navbar/Navbar";
import { useStudentById } from "../../../api/useStudentById";

const Student = () => {
  const pathId = window.location.pathname.replace("/", "");
  const { student, isStudentLoading, isStudentError } = useStudentById(pathId);
  return (
    <HomeTemplate>
      {console.log(student)}
      <StudentTemplate
        name={student?.first_name}
        points={student?.total_points}
      />
      <Navbar />
    </HomeTemplate>
  );
};

export default Student;
