import { useEffect, useState } from "react";



 function HomePage() {
  //Declare state
  const [movies, setMovies] = useState([]);
  console.log(movies);

    
  

  return (
    <>
      <h1> Welcome to Studio Ghibli Films List</h1>
      <p>Find and learn about your favorite Ghibli movies!</p>
     
    </>
  );
}

export default HomePage;
