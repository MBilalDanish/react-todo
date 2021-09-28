import Home from "./components/Home";
import InformationContextProvider from "./contexts/InformationContext";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from "./components/About";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import Posts from "./components/Posts";
import Counter from "./components/Counter";
import MapBox from "./components/MapBox";
import MaterialUI from "./components/MaterialUI";
import HOC from "./components/HOC";
import Stories from "./components/Stories";

function App() {
  return (
    <div className="App" >
      <Provider store={store} >
        <Router>
          <InformationContextProvider>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/counter" component={Counter} />
            <Route path="/map-gl" component={MapBox} />
            <Route path="/material-ui" component={MaterialUI} />
            <Route path="/hoc" component={HOC} />
            <Route path="/stories" component={Stories} />
          </InformationContextProvider>
        </Router>
      </Provider>
    </div >
  );
}

export default App;
