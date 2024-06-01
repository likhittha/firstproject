import Imageshow from './Imageshow'

function Imagelists ({images}) {
const renderedImages = images.map((image) => {
     return <Imageshow  key={ image.id } image={image} />;
})

return (
<div className="grid grid-cols-6 gap-4">{ renderedImages }</div>

)
}

export default Imagelists;
