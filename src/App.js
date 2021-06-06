import "./App.css";
import MainPageComponent from "./main/index.js";
import ProductPage from "./product/index.js";
import UploadPage from "./upload/index.js";
import Maincontent from "./main/indexs.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
