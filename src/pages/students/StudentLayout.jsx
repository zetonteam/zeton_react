import { useMemo, useState } from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import Navbar from "../../components/structures/Navbar/Navbar";
import { getStudent } from "../../api/getStudent";

function Student() {
  const { student_id } = useParams();
  const { student = {}, refresh } = getStudent(student_id);

  const studentValue = useMemo(
    () => ({ ...student }),
    [student.pk]
  );

  return (
    <>
      <header hidden>
        <h1>Żeton</h1>
      </header>
      <Navbar />
      <main>
        <header>
          <h2>{student?.first_name}</h2>
          <p>{student?.total_points}</p>
        </header>
        <Outlet context={{ student: studentValue, refresh}} />
      </main>
      <footer hidden>
        <p>{(new Date()).toLocaleDateString()}</p>
      </footer>
    </>
  );
}

export const useStudentContext = () => {
  return useOutletContext();
};

export default Student;
