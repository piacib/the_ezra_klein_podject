import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const ErrorBoundWithSuspense = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default ErrorBoundWithSuspense;
