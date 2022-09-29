import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Layout from "./Components/Layout/Layout";
import Questions from "./Components/Questions/Questions";

function App() {
  return (
    <div>
      <Layout />
      <Questions />
    </div>
  );
}

export default App;
