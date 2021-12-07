import React from 'react';
import {Link} from 'react-router-dom';

const PostDetails = (props) => {
    console.log(props)
    console.log(props.match.params.topic)
    console.log(props.location.search.split('=')[1])
    return(
        <React.Fragment>
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h2>{props.match.params.topic} Details Page</h2>
                </div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <p>{props.match.params.topic}Details was a state of India from 1954 to 2019, constituting the southern and southeastern portion of the larger Kashmir region, which has been the subject of a dispute between India, Pakistan and China since the mid-20th century.[5][6] The underlying region of this state were parts of the former princely state of Jammu and Kashmir, whose western districts, now known as Azad Kashmir, and northern territories, now known as Gilgit-Baltistan, are administered by Pakistan. The Aksai Chin region in the east, bordering Tibet, has been under Chinese control since 1962
                        </p>
                        <h3>You are not page number {props.location.search.split('=')[1]}</h3>
                        <Link className="btn btn-info" to="/post">
                            Post
                        </Link>
                    </div>
                </div>
            </div>    
        </React.Fragment>
    )
}

export default PostDetails;