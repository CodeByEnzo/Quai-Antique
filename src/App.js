import Site from './containers/site/Site';
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Site />
            </BrowserRouter>

        </div>
    );
}

export default App;
