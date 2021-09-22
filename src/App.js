import Home from "./components/Home";
import InformationContextProvider from "./contexts/InformationContext";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from "./components/About";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import Posts from "./components/Posts";
import PostsN from './components/PostsN';
import Counter from "./components/Counter";
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
            <Route path="/postsn" component={PostsN} />
            <Route path="/counter" component={Counter} />
          </InformationContextProvider>
        </Router>
      </Provider>
    </div >
  );
}

export default App;
