import { Switch , Route } from "react-router-dom";
import Home from "../Pages/Home";
import Welcome from "../Pages/Welcome";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes;
