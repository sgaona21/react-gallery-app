const Photo = (props) => {
    return (
      <li>
        <img
          src={props.url}
          alt={props.tags}
        />
      </li>
    );
}

export default Photo;