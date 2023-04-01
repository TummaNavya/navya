import { StrictMode } from "react";
import{createRoot}from "react-dom/client";
import App from "./App";
import InputComponent from "./inputComponent";
const rootElement =document.getElementById("root");
const root=create(rootElement);
root.render(
    <StrictMode>
    <InputComponent/>
    </StrictMode>
);