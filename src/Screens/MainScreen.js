 import { useParams } from "react-router-dom";
 import pic from "./butterfly.jpeg";
 import pic1 from "./heart.jpeg";
 import pic2 from "./brain.png";
 import  "./MainScreen.css"
 export const MainScreen = () => {
    
        const { name , email} = useParams();
console.log(name , email);
return(

    <>
    <div className="main"> 
 
    <div className="main1">
<div className="div1">
<div className="card"> 
<div className="aligin">
<h1>Heart</h1>
<div>
    <img className="heart" src={pic1}/>
</div>
</div>
<div className="p">
<p>
And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.</p>
</div>


</div>

</div>

<div className="div2">
<div className="pic"> 
<div><img className="pic1" src={pic}/></div>
<div className="name"> { name } </div>
<div className="name"> { email } </div>

</div>

<div className="card1"> 
<div className="aligin">
<h1>Brain</h1>
<div>
    <img className="brain" src={pic2}/>
</div>
</div>
<div className="p">
<p>
If you throw the covers over your head, and that triggers other thoughts such as "I'm tired," "I can't get up," or "Life is hard," complex interactions in your brain may send signals to other parts of your body.
</p>
</div>
</div>
</div>
    </div>
    </div>
    
    </>
)


 }
