import { useState } from "react";
// import Counter from "./Counter";
// import FunctionalCounter from "./FunctionalCounter";
export default function ConditionalRendering() {
  const [display, setDisplay] = useState(false);
  return display ? (
    <div>
      <h1>I love Jesus</h1>
    </div>
  ) : (
    <div>
      <h1>and He Loves me too</h1>
    </div>
  );
}
