import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main/index.js";
import ProductPage from "./product/index.js";
import UploadPage from "./upload/index.js";
import Maincontent from "./main/indexs.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/icons/logo.png" alt="" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<CloudDownloadOutlined />}
          >
            상품업로드
          </Button>
        </div>
      </div>
      <div id="body">
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
      <div id="footer"></div>
    </div>
  );
}

export default App;
