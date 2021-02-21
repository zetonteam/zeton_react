import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./api/store";
import { HelmetProvider } from "react-helmet-async";

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
        <HelmetProvider>
            <MemoryRouter>{children}</MemoryRouter>
        </HelmetProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };