import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./component/top.js";
import SidemenuLeft from "./component/sidemenu_left.js";
import SidemenuRight from "./component/sidemenu_right.js";
import Memo from "./component/memo.js";
const App = () => {
  return (
    <Router>
      <header className="header">
        <p>record</p>
      </header>
      <SidemenuLeft />
      <div className="main_wrap">
        <Switch>
          <Route path="/Top">
            <Main />
          </Route>
          <Route path="/Memo">
            <Memo />
          </Route>
        </Switch>
      </div>
      <SidemenuRight />
    </Router>
  );
};

export default App;
