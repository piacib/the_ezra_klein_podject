import { useState } from "react";
import { Outlet } from "react-router-dom";
import ErrorBoundWithSuspense from "./components/ErrorBoundary/ErrorBoundWithSuspense";
import Header from "./components/Header/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ErrorBoundWithSuspense>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </ErrorBoundWithSuspense>
  );
}

export default App;
