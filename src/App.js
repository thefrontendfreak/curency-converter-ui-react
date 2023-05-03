
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.scss';
import Sidebar from './core/layout/Sidebar';
import CurrencyConverter from "./core/pages/CurrencyConverter";
import HomePage from "./core/pages/HomePage";
import Pricing from "./core/pages/Pricing";

function App() {
  return (
    <div className="App">
      <Router basename="/currency-converter">
        <Sidebar />
        <div className="container">
          <Switch>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/converter">
              <CurrencyConverter />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
