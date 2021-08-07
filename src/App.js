import { BrowserRouter as Router, Route, Switch } from "react-router";
import Top from "./component/top.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Top" component={Top}></Route>
      </Switch>
    </Router>
  );
}

export default App;
