import axios from 'axios';

const searchImages = async (term) =>{
 const response =  await  axios.get('https://api.unsplash.com/search/photos' ,{
        headers : {
          Authorization: 'Client-ID jzhdcINkMML8oKA3XN7loO01Y1XQylNXxRLk5z1Txj0'
        },
        params : {
        query: term ,

        }   
    });


    return response.data.results;
}
export const likhitha = () =>{
const name = "likhi"
return name
}
export default searchImages;