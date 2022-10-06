import React from "react";
import { connect } from "react-redux";
import HomeTemplate from "../components/templates/HomeTemplate";
import Navbar from "../components/structures/Navbar/Navbar";

const ConsequencesView = ({ student }) => (
  <HomeTemplate>
    <div>Consequences</div>
    <Navbar />
  </HomeTemplate>
);

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(ConsequencesView);