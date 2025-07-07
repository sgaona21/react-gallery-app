import Photo from "./Photo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import loadingImage from '../assets/loading.png'

const PhotoList = (props) => {
    const { query } = useParams()

    const handleSearchNav = (newQuery) => {
      if (newQuery) {
        props.updateQuery(newQuery)
      }
    }

    useEffect(() => {
      props.updateQuery(props.category);
      handleSearchNav(query)
    }, [props.category, props.updateQuery, query])

    if (props.isFetching) {
      return (
        <div>
          <img className="loading" src={loadingImage}/>
        </div>
      );
    }

    if (props.data.length == 0) {
      return (
        <div className="photo-container">
          <ul>
            <li className="not-found">
              <h2>No Results Found</h2>
              <p>You search did not return any results. Please try again.</p>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {props.data.map(image => <Photo url={image.largeImageURL} desc={image.tags} key={image.id} />)}
        </ul>
      </div>
    );
}

export default PhotoList;