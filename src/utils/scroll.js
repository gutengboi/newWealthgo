import { useRef } from "react";

const ScrollDemo = () => {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  // run this function from an event handler or an effect to execute scroll

  return (
    <>
      <div ref={myRef}>Element to scroll to</div>
      <button onClick={executeScroll}> Click to scroll </button>
    </>
  );
};
