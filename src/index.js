import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import RootContext from "./context";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RootContext>
          <Root />
        </RootContext>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
