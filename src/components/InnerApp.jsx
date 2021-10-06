import Home from "./Home";
import InformationContextProvider from "../contexts/InformationContext";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from "./About";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../store";
import Posts from "./Posts";
import Counter from "./Counter";
import MapBox from "./MapBox";
import MaterialUI from "./MaterialUI";
import HOC from "./HOC";
import Stories from "./Stories";
import Custom from "./Custom";
import { Switch } from "react-router";

function InnerApp() {
  return (
    <div className="App" >
      <Provider store={store} >
        <Router>
          <InformationContextProvider>
            <Header />
            <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/map-gl" component={MapBox} />
            <Route exact path="/material-ui" component={MaterialUI} />
            <Route exact path="/hoc" component={HOC} />
            <Route exact path="/stories" component={Stories} />
            <Route exact path="/styled" component={Custom} />
            <Route exact path="/" component={InnerAppContent} />
            </Switch>
          </InformationContextProvider>
        </Router>
      </Provider>
    </div >
  );
}

export default InnerApp;

function InnerAppContent(){
    return (
        <div>Inner APP</div>
    )
}
