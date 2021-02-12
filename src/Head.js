import React from "react";
import { Helmet } from "react-helmet-async";
import FAVICON from "./images/icons/zeton-favicon-blue.png";

const Head = () => (
  <Helmet>
    <link rel="icon" href={FAVICON} />
    <meta name="description" content="Application Zeton" />
    <link rel="apple-touch-icon" href={FAVICON} />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href={`"https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap"`}
      rel="stylesheet"
    />
  </Helmet>
);

export default Head;
