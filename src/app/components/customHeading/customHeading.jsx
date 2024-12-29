import style from "./customHeading.module.css"
const CustomHeading = ({ children,classNames }) => {
  const outputProps = {};
  let classes1 = classNames?.split(/\s+/).map(className=>style[className]).join(" ") ?? "primary";
  let classes2 = classes1+" "+style.customHeading;
  outputProps.className = classes2;
    return (
      <div {...outputProps}>
        {children}
      </div>
    )
  }
  export default CustomHeading