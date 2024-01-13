import "./App.css";
import "./styles/style.css";
import Home from "./Home";
import History from "./History";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/history" exact component={History} />
        <Route path="/resources" exact component={History} />
      </Switch>
    </Router>
  );
}

export default App;
