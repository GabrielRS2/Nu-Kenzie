import "./index.css";
import ButtonList from "../ButtonList";
import { useHistory } from "react-router-dom";

function Header() {

  const hystory = useHistory()

  function goWelcomePage() {
    hystory.push("/")
  }

  return (
    <header>
      <h1 className="tittle-list"><span className="nu_tittle-list tittle-list">Nu</span> Kenzie</h1>
      <ButtonList callback={goWelcomePage} text={"Inicio"} color={"#5B6166"} backgroundColor={"#E9ECEF"}/>
    </header>
  )
}

export default Header;