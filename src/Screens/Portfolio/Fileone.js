import { Link } from 'react-router-dom';
import { useTypewriter, Cursor} from 'react-simple-typewriter';
export const Fileone =()=> {

const {text} = useTypewriter({
  words: ['Developer', 'Designer', 'Freelancer'],
  loop: {},
  typeSpeed:120,
  deleteSpeed: 80 ,

});


    return(
<>
<div className="bg-white h-[100vh]">

<div className="flex p-8 justify-between items-center px-60 ">
<div className=" flex justify-center items-center cursor-pointer ">
 <p className="text-3xl text-white bg-blue-500 rounded-full font-bold justify-center items-center flex h-9 w-9 "> R</p>
 <p className="text-2xl font-bold ">onaldo</p>
</div>

<nav className="">
      <ul className="flex gap-9   ">
        <li className="hover:underline decoration-blue-500 decoration-2 ">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline decoration-blue-500 decoration-2" >
          <Link to="/about">About</Link>
        </li>
        <li className="hover:underline  decoration-blue-500 decoration-2">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="hover:underline  decoration-blue-500 decoration-2">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:underline  decoration-blue-500 decoration-2">
          <Link to="/project">Project</Link>
        </li>
        <li className="hover:underline  decoration-blue-500 decoration-2">
          <Link to="/my blog">My blog</Link>
        </li>
        <li className="hover:underline  decoration-blue-500 decoration-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
</div>
<div className="justify-around flex flex-col items-center p-40">
<p className="text-blue-500 text-xl font-bold ">Hey ! I Am</p>  
<p className="text-6xl font-bold ">Ronaldo Fredrickson </p>
<p className="text-3xl font-bold ">I'm a  
<span style={{fontWeight: 'bold' , color:'green'}}> {text} </span>
<span style={{color: 'red'}}>
  <Cursor cursorStyle='<'/>
  </span>

</p>
</div>
</div>
</>

    )
}   