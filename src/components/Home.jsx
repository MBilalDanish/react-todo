import Tasks from "./Tasks";
import ControlsPanel from "./ControlsPanel";
const Home = () => {
    return (
        <>
            <div className="flex height">
                <Tasks />
                <ControlsPanel />
            </div>
        </>
    );
}
export default Home
