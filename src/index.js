import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootContext from "./context";
import { QueryClient, QueryClientProvider } from "react-query";

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
