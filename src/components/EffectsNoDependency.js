import React, { useState, useRef, useEffect } from "react";

export default function EffectsNoDependency() {
  const [title, setTitle] = useState("Browser Title");
  const titleRef = useRef();

  useEffect(() => {
    console.log("useEffect lifecycle method to set current title");
    document.title = title;
  });

  console.log("call function to render update");
  const handleClick = () => setTitle(titleRef.current.value);

  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>change title</button>
    </div>
  );
}
