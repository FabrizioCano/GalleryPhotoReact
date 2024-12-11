import React,{useState,useEffect} from "react";
import ImageCard from './components/ImageCard';
import SearchBar from "./components/SearchBar";


function App() {
  const [images,setImages]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [term,setTerm]=useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY}&q=${term}&image_type=photo&pretty=true`)
    .then(response => response.json())
    .then(data=>{
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(error=>console.log(error));
  },[term])

  return (
    <div className="container mx-auto items-center">
      <SearchBar searchText={(text)=>setTerm(text)}/>

      {!isLoading && images.length===0 && <h1 className="text-5xl text-center mx-auto mt-5">No images found with the term <strong>{term}</strong></h1>}
      {isLoading ? <h1 className="text-5xl text-center mx-auto mt-5">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image=>(
          <ImageCard key={image.id} image={image}></ImageCard>
        ))}
      </div>}
    </div>
  );
}

export default App;
