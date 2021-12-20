import React from 'react'
import * as Icons from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
//import {GoTelescope} from "react-icons/go";

 

const IconComponent = ({name}) => {
    const IconComponent = GoIcons[name];

  if (!IconComponent) { // Return a default one
    return <Icons.FaBeer />;
  }

  return <IconComponent />;
    
}

export default IconComponent
