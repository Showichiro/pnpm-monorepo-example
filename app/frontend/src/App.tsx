import { Suspense } from "react";
import Hello from "./features/hello/components/Hello";

function App() {
  return (
    <Suspense fallback="...loading">
      <Hello />
    </Suspense>
  );
}

export default App;
