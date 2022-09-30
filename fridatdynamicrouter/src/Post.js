import { useParams } from 'react-router-dom';
function Post() {
    const params = useParams();
    // localhost:3000/post/45 => 45 is the postID
    return <div>The post number called is : {params.postID}</div>;
}
export default Post;