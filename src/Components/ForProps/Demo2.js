export const Demo2 = ({ name, myClass, college, id, handleClick, newClick}) => {
 const handleClick =() => {
  console.log("tapped");

 }

  return (
    <>
      <div>this is Demo 2 {name}</div>
      <div>class :{myClass}</div>
      <div>college:{college}</div>
      <div>id:{id}</div>
      <div>
        <button onClick={handleClick}>tap me  </button>
      </div>
      <div>
        <button onClick={newClick}>click</button>
      </div>
    </>
  );
};
