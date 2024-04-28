export const Demo2 = ({ name, myClass, college, id,  }) => {
 const onClick1 =() => {
  console.log("tapped");

 }

  return (
    <>
      <div>this is Demo 2 {name}</div>
      <div>class :{myClass}</div>
      <div>college:{college}</div>
      <div>id:{id}</div>
      <div>
        <button onClick={onClick1}>tap me  </button>
      </div>
      
    </>

  );
}