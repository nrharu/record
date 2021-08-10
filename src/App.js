import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./component/main.js";
import SidemenuLeft from "./component/sidemenu_left.js";
import SidemenuRight from "./component/sidemenu_right.js";

const App = () => {
  return (
    <Router>
      <header className="header">
        <p>record</p>
      </header>
      <Switch>
        <Route path="/Top">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
