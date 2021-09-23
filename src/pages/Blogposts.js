import '../App.css';


import {Link} from "react-router-dom";

/*Blog component import posts from appjs with all the data of the blogs*/
function Blogposts({posts}) {
    return (
        <div id="allposts" className="wrappingcontainer">
            <h3>Blogposts</h3>

            <p>Aantal blogposts:{posts.length}</p>
            <ul>
                {posts.map(post =>
                    <Link key={post.id} to={'/blogposts/blog/' + post.id}>
                        <li><p className="postlist">{post.title}</p></li>
                    </Link>
                )}
            </ul>


        </div>
    );
}

export default Blogposts;