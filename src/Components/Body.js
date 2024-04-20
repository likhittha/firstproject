
export const Body = () => {
const handleClick =() => {
  console.log("opened")
alert("hello")
}

  return (
  <> <div className="outerDiv">
      <h1>Body</h1>
    </div>
    <div className="image"></div>
<div>
  <button onClick={handleClick}>tap me</button>
</div>




    </> 
  );
};
