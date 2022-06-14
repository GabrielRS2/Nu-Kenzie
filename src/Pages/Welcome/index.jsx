import WelcomePage from "../../components/WelcomePage";
import WelcomeImage from "../../components/WelcomeImage";
import "./style.css"

function Welcome() {
  return (
    <main className="welcome_page">
      <WelcomePage />
      <WelcomeImage /> 
    </main>
  )
}

export default Welcome;