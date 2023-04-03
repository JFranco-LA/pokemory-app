import { Routes, Route } from "react-router-dom";
import PreviewPage from "./pages/PreviewPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PreviewPage></PreviewPage>}/>
        <Route path="/home" element={<HomePage></HomePage>}/>
        {/* <Route path="/" element={<PreviewPage></PreviewPage>}/> */}
        {/* <Route path="/" element={<PreviewPage></PreviewPage>}/> */}
        {/* <Route path="/" element={<PreviewPage></PreviewPage>}/> */}
      </Routes>
    </>
  );
}

export default App;
