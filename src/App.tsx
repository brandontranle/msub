import "./App.css";
import "./styles/style.css";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/resources" component={Home} />
    </Router>
  );
}

export default App;
