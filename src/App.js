import "./app.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes ,Route } from 'react-router-dom'
import MainContent from "./components/MainContent";
import VideoDisplayer from "./components/Content/VideoDisplayer";
import VideoPlayer from "./components/Content/VideoPlayer";
import Notification from "./components/Content/Notification";
import About from "./components/Content/About";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
            <Route index path='/' element={<MainContent/>}></Route>
            <Route path='Videodisplayer' element={<VideoDisplayer/>}></Route>
            <Route path="VideoPlayer" element={<VideoPlayer/>}></Route>
            <Route path="Notification" element={<Notification/>}></Route>
            <Route path="About" element={<About/>}></Route>
            <Route path="videoPlayer" element={<VideoPlayer/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
