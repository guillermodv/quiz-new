import Comments from "./Comments";

const Card = ({ comment, post, idToShow, setIdToShow }) => {
  const showComments = (id) => setIdToShow(id);
  return (
    <div
      style={{
        borderRadius: "10%",
        border: "5px solid grey",
        padding: "20px",
        margin: "10px"
      }}
    >
      <div
        style={{
          margin: "1rem"
        }}
      >
        <h2> {post?.title.toUpperCase()} </h2>
      </div>
      <div
        style={{
          margin: "1rem",
          color: "grey"
        }}
      >
        <h5>{post?.body}</h5>
      </div>
      <div
        style={{
          margin: "1rem"
        }}
      >
        {idToShow !== post?.id ? (
          <button
            style={{ height: "2rem", width: "6rem" }}
            onClick={() => showComments(post.id)}
          >
            Comments
          </button>
        ) : (
          <Comments comment={comment} />
        )}
      </div>
    </div>
  );
};

export default Card;
