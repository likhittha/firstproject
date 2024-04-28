import "./header.css"

export const Header = () => {
 const handleClick =() =>{
  console.log("clicked")
 }
  return (
    <>
      <div className="outerDiv">
        <h1>Header</h1>
        <div className="image"></div>
      </div>
      {/*below button has been */}
  <div>
    <button onClick={handleClick}>click me </button>
  </div>
  
    </>
  );
};




