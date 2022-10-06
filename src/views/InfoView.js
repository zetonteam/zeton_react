import React from "react";
import { connect } from "react-redux";
import HomeTemplate from "../components/templates/HomeTemplate";
import Navbar from "../components/structures/Navbar/Navbar";

const InfoView = ({ student }) => (
  <HomeTemplate>
    <div>Info</div>
    <Navbar />
  </HomeTemplate>
);

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(InfoView);