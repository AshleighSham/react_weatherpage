import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/index.css";
import Form from "./form";
import Githublink from "./githublink";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="container bkgr">
        <div className="content">
          <div className="bigicon"></div>
          <div className="container">
            <Form />
          </div>
        </div>
        <Githublink />
        <script src="src/index.js"></script>
      </div>
    </div>
  </StrictMode>
);
