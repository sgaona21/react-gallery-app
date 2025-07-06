import Photo from "./Photo";

const PhotoList = (props) => {
    // const results = props
    // let gifs = results.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />)

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