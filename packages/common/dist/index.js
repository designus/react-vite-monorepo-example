import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const someObject = {
    a: 1,
    b: "penki di",
};
export const SomeComponent = ({ a, b }) => {
    return (_jsxs("div", { children: [_jsx("h1", { children: "This is react component" }), _jsxs("div", { children: ["Property a = ", a] }), _jsxs("div", { children: ["Property b = ", b] })] }));
};
