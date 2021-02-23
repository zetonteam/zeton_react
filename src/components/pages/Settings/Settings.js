import React from "react";
import { connect } from "react-redux";
import HomeTemplate from "../../templates/HomeTemplate";
import Navbar from "../../structures/Navbar/Navbar";

const Settings = ({ student }) => (
  <HomeTemplate>
    <div>Settings</div>
    <Navbar />
  </HomeTemplate>
);

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(Settings);
