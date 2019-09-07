const React = require("react");
const ReactDOM = require("react-dom");
const Index = require("./component");
const Something = ({ children }) => {
  return <div>Change here reloads the page {children}</div>;
};

ReactDOM.render(
  <Something>
    <Index />
  </Something>,
  document.getElementById("app")
);
