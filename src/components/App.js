import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <>
   <div>dfd</div>
    <Router>
      <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/:id" element={<Detail />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
