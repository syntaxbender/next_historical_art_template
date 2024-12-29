import React from 'react'
import style from "./buttonSet.module.css"
const ButtonSet = ({ children, classNames,customWidth }) => {
    const outputProps = {};
    let classes1 = classNames?.split(/\s+/).map(className=>style[className]).join(" ") ?? "primary";
    let classes2 = classes1+" "+style.buttonSet;
    outputProps.className = classes2;
    if(customWidth){
      outputProps.style = {width:customWidth};
    }
  return (
    <button {...outputProps}>{children}</button>
  )
}

export default ButtonSet