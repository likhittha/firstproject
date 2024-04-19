import "./Navbar.css";
export default function Navbar() {
  const name = "likhitha";
  const numberid = "123";
  let data = {
    name: "likhi (pandhi)",
    number: 123,
    group: "blue",
  };

  return (
    <>
      <div className="Nav">
        {" "}
        This is Navbar {name} {numberid}{" "}
      </div>
      <div className="Two">
        {" "}
        <div> {data.name} </div>
        <div> {data.number} </div>
        <div> {data.group} </div>
      </div>
    </>
  );
}
