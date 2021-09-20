import Tasks from "./components/Tasks";
import ControlsPanel from "./components/ControlsPanel";
import Header from "./components/Header";
import InformationContextProvider from "./contexts/InformationContext";
function App() {
  return (
    <div className="App">
      <InformationContextProvider>
        <Header />
        <div className="flex height">
          <Tasks />
          <ControlsPanel />
        </div>
      </InformationContextProvider>
    </div>
  );
}

export default App;
