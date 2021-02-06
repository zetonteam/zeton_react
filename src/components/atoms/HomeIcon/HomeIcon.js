import SvgIcon from "@material-ui/core/SvgIcon";
import React   from "react";

const HomeIcon = (svgProps) => {
  return (
    <SvgIcon {...svgProps}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

export default HomeIcon;
