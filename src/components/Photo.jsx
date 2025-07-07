const Photo = (props) => {
    return (
      <li>
        <img
          src={props.url}
          alt='photo of search result'
        />
      </li>
    );
}

export default Photo;