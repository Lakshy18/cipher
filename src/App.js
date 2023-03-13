import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import VideoDisplayer from "./components/Content/VideoDisplayer";
import VideoPlayer from "./components/Content/VideoPlayer";
import Notification from "./components/Content/Notification";
import About from "./components/Content/About";
import { useSelector } from "react-redux";

function App() {
  const movieNum = useSelector((state) => state.reducer.showNum);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<MainContent />}></Route>
        <Route
          path={`VideoDisplayer${movieNum}`}
          element={<VideoDisplayer />}
        ></Route>
        <Route
          path={`VideoPlayer${movieNum}`}
          element={<VideoPlayer />}
        ></Route>
        <Route path="Notification" element={<Notification />}></Route>
        <Route path="About" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
