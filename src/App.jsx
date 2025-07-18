import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import CalendarPage from './components/CalendarPage';
import ReadMePage from "./pages/Readme";
import Weather from "./pages/Weather";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<CalendarPage />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
        <Route path="/readme" element={<ReadMePage />} />
        <Route path="/projects" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
