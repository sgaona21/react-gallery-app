import Photo from "./Photo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {props.data.map(image => <Photo url={image.largeImageURL} desc={image.tags} key={image.id} />)}
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
      </div>
    );
}

export default PhotoList;