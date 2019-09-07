const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
const RefreshRuntime = require("react-refresh/runtime");
const enqueueUpdate = require("./update");

window.$RefreshReg$ = (type, id) => {
  const fullId = module.id + " " + id;
  RefreshRuntime.register(type, fullId);
};
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

try {
  /// Actual component code
  const React = require("react");

  const Index = () => {
    const [counter, setCounter] = React.useState(0);
    return (
      <div onClick={() => setCounter(counter + 1)}>
        Change here does not! {counter}
      </div>
    );
  };

  module.exports = Index;
  ///

  $RefreshReg$(Index, "Index");
  module.hot.accept();
  enqueueUpdate();
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
