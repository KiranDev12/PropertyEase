import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./list.scss";
import apiRequest from "../../lib/apiRequest";

function List() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Make GET request to fetch user's posts
        const response = await apiRequest.get(`/posts/postsById`);

        // Update state with fetched posts
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts
  console.log(posts);
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
