import React from "react";
import Title from "../../components/UI/Title/Title";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";

const Prizes = () => {
  const title = "Przyznaj nagrodę";
  const selectValue = "Wybierz nagrodę";
  return (
    <div>
      <Title title={title} />
      <Dropdown selectValue={selectValue} />
      <Footer />
    </div>
  );
};

export default Prizes;
