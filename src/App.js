import "./App.css";
import NavBar from "./components/navbar";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import { useState, useEffect } from "react";

function App() {
  const [Images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("tech");
  const [view, setView] = useState('grid');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
const setViewClasses = () => {
    if(view === 'list'){
      return "flex flex-col gap-6 m-2"
    }else if(view === 'grid'){
      return "grid grid-cols-3 gap-4";
    }
  }
  return (
    <>
      <NavBar setView={setView}/>
      <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className={setViewClasses()}>
            {Images.map((image) => (
              <ImageCard view={view} key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );

  
}

export default App;
