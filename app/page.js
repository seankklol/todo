import getPosts from "../_actions/postAction.js";

// aync functions allow you to use the await, which pauses execution until that line is complete
export default async function Home() {
  //response is the result of the getPosts function
  //the getPosts functions retrieves all posts from the database
  const response = await getPosts();
  console.log(response);

  return (
    <>
      <h1>Hello Sean, </h1>

      {/* "response.posts" is all the posts with its id and other fields. */}
      {/* post and index are from response.posts and can be used inside the "for loop"/map */}
      {response.posts.map((post, index) => (
        // key is used to identify the element in the list. so all <p>(s) arent the same
        <p key={index}>{index + '| '+ post.msg}</p>
      ))}
    </>
  );
}
