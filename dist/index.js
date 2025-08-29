'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

// src/Button.tsx
function Button({ children, variant = "primary", className = "", ...rest }) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium";
  const styles = variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-zinc-200 text-zinc-900 hover:bg-zinc-300";
  return /* @__PURE__ */ jsxRuntime.jsx("button", { className: `${base} ${styles} ${className}`, ...rest, children });
}

exports.Button = Button;
exports.default = Button;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map