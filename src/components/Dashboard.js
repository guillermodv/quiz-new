import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

const Dashboard = ({ posts }) => {
  const [idToShow, setIdToShow] = useState(-1);

  // useEffect(() => {
  //   if (idToShow >= 0) {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${idToShow}/comments`)
  //       .then((res) => res.json())
  //       .then((data) => setComment(data));
  //   }
  // }, [idToShow]);

  const { items } = useFetch(
    idToShow > 0,
    `https://jsonplaceholder.typicode.com/posts/${idToShow}/comments`
  );

  return (
    <>
      {posts?.length > 0 &&
        posts?.map((post) => (
          <div
            key={post.id}
            style={{
              flex: 1,
              flexDirection: "column",
              justifyItems: "center"
            }}
          >
            <Card
              comment={items}
              post={post}
              setIdToShow={setIdToShow}
              idToShow={idToShow}
            />
          </div>
        ))}
    </>
  );
};

export default Dashboard;
