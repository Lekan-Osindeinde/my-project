function FunctionEvent() {
  function handleClick() {
    console.log("I love Esther");
  }
  return (
    <div>
      <h1>I love Ifeoluwa Esther Osindeinde</h1>
      <button onClick={handleClick}>Clicked</button>
    </div>
  );
}
export default FunctionEvent;
