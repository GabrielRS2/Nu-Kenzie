import { useHistory } from "react-router-dom";
import "./index.css";

function WelcomePage({setIsWelcomePage}) {
  const hystory = useHistory()

  function goHome() {
    hystory.push("/home")
  }

  return (
    <div className="welcome_container">
      <h1 className="tittle"><span className="nu_tittle tittle">Nu</span> Kenzie</h1>
      <p className="welcome_text">Centralize o</p>
      <p className="welcome_text">controle das suas</p>
      <p className="welcome_text">finanças</p>
      <p className="welcome_text--small">de forma rápida e segura</p>
      <button className="begin_Button" onClick={goHome}>iniciar</button>
    </div>
  )
}

export default WelcomePage;