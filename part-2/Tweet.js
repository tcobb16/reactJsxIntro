function Tweet(props) {
    return (
      <div className="tweet">
        <h2>{props.name}</h2>
        <p className="username">@{props.username}</p>
        <p className="date">{props.date}</p>
        <p>{props.message}</p>
      </div>
    );
  }