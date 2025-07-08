import Photo from "./Photo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import loadingImage from '../assets/loading.png'

const PhotoList = (props) => {
    const { query } = useParams(); // grabs current search query from url

    const handleSearchNav = (newQuery) => {
      // upon forward/back nagivation in browser, creates a new fetch request for current url to update images to match url
      if (newQuery) {
        props.updateQuery(newQuery)
      }
    }

    useEffect(() => {
      //creates new fetch request upon new search from user input
      props.updateQuery(props.category);
      handleSearchNav(query)
    }, [props.category, props.updateQuery, query])

    if (props.isFetching) {
      // shows loading icon while images are being fetched 
      return (
        <div>
          <img className="loading" src={loadingImage}/>
        </div>
      );
    }

    if (props.data.length == 0) {
      //conditionally renders a "no results found" if no images are returned from Pixabay
      return (
        <div className="photo-container">
          <ul>
            <li className="not-found">
              <h2>No Results Found</h2>
              <p>Your search did not return any results. Please try again.</p>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <div className="photo-container">
        <h2>Image Results For "{props.currentQuery}"</h2>
        <ul>
          {props.data.map(image => <Photo url={image.largeImageURL} desc={image.tags} key={image.id} />)}
        </ul>
      </div>
    );
}

export default PhotoList;