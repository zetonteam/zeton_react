import React from "react";
import { connect } from "react-redux";
import HomeTemplate from "../../templates/HomeTemplate";
import Navbar from "../../structures/Navbar/Navbar";

const Consequences = ({ student }) => (
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

export default connect(mapStateToProps)(Consequences);