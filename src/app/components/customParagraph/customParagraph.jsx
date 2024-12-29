import style from "./customParagraph.module.css"
const CustomParagraph = ({ children }) => {
    return (
      <div className={style.customParagraph}>
        {children}
      </div>
    )
  }
  export default CustomParagraph