export const Demo1 = ({ name, onClick, onTap }) => {
  //   const handleClick = () => {
  //     console.log("clicked");
  //   };
  return (
    <>
      <div>this is Demo 1</div>
      <div>my name is : {name}</div>

      {/* Making a onClick prop for the button*/}
      <div>
        <button onClick={onClick}>click me</button>
      </div>
<div>
  <button onClick={onTap}>Tap me</button>
</div>


    </>
  );
};

// here the name is a prop(Properties)
