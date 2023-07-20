import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeekTwo from "./Components/Week2";
import WeekOne from "./Components/Week1";
import Main from "./Components/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/weekOne" element={<WeekOne />}></Route>
        <Route path="/weekTwo" element={<WeekTwo />}></Route>
        {/* <Route path="/weekThree" element={<Week3 />}></Route>
        <Route path="/weekThree" element={<Week4 />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
