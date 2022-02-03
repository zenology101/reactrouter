
import './App.css';
// Import route and components
import {Route, Switch} from "react-router-dom";
import Stocks from "./pages/stocks";
import Main from "./pages/main";
import About from "./pages/about";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/stocks">
        <Stocks />
      </Route>
      <Route
      path="/about/:symbol"
      render={(routerProps) => <About {...routerProps} />}
      />
      </Switch>
    </div>
  );
}

export default App;