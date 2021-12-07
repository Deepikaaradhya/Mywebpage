import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
    return(
        <React.Fragment>
            <div class="panel panel-success">
                <div class="panel-heading">
                    <h2>Post Page</h2>
                </div>
            </div>
            <div class="panel-body">
                <div className="jumbotron">
                    <p>
                        Kashmir[a] was a state of India from 1954 to 2019, constituting the southern and southeastern portion of the larger Kashmir region, which has been the subject of a dispute between India, Pakistan and China since the mid-20th century.[5][6] The underlying region of this state were parts of the former princely state of Jammu and Kashmir, whose western districts, now known as Azad Kashmir, and northern territories, now known as Gilgit-Baltistan, are administered by Pakistan. The Aksai Chin region in the east, bordering Tibet, has been under Chinese control since 1962
                    </p>
                    <button className="btn btn-danger">
                        Click
                    </button>
                    <h2>JavaScript</h2>
                    <Link className="btn btn-primary" to="/post/JavaScript">Details</Link>
                    <h2>React</h2>
                    <Link className="btn btn-success" to="/post/React">Details</Link>
                    <h2>Node</h2>
                    <Link className="btn btn-info" to="/post/Node">Details</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Post;