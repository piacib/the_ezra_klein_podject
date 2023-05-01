import { useState } from "react";
import { Outlet } from "react-router-dom";
import ErrorBoundWithSuspense from "./components/ErrorBoundary/ErrorBoundWithSuspense";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <ErrorBoundWithSuspense>
      <div className="App">
        <Header />
        <Outlet />
        <Footer/>
      </div>
    </ErrorBoundWithSuspense>
  );
}

export default App;
