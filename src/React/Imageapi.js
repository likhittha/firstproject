import Searchbar from "./Searchbar";
import Imagelists from "./Imagelists";
import searchImages from "../api";
import { useState } from  'react';

function Imageapi () {
const [images, setImages] = useState( [] );

    const handleSubmit =async (term) =>{
  const response = await searchImages(term);

setImages(response);
}

return (
    <div>
        <Searchbar  onSubmit={ handleSubmit }  />
        <Imagelists images={images} />
    </div>
)



}

export default Imageapi;