import { Route, BrowserRouter as Router } from 'react-router-dom';
import NotFound from "./components/NotFound";
import { Switch } from "react-router";
import InnerApp from "./components/InnerApp";

function App() {
  return (
    <div>
        <Router>
            <Switch>
            <Route path="/" exact component={InnerApp} />
            <Route component={NotFound} />
            </Switch>
        </Router>
    </div >
  );
}

export default App;
