import "./index.css";

function ButtonList({text, callback, backgroundColor, color}) {
  return (
    <>
      <button style={{backgroundColor: backgroundColor, color: color}} className="button_list" onClick={() => callback()}>{text}</button>
    </>
  )
}

export default ButtonList;