export const Footer = () => {
 const handleClick =() => {
  console.log("opened")
 }


  return (
 <> <div className="outerDiv">
      <h1>Footer</h1>
    </div>
            <div className="image"></div>
      <div>
        <button onClick={handleClick}>click me  </button>
      </div>



            </>  
  );


};
