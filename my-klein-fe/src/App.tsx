import { useState } from "react";
import { Outlet } from "react-router-dom";
import ErrorBoundWithSuspense from "./components/ErrorBoundary/ErrorBoundWithSuspense";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ErrorBoundWithSuspense>
      <div className="App">
        <Outlet />
      </div>
    </ErrorBoundWithSuspense>
  );
}

export default App;
