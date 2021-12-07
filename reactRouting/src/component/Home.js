import React from 'react';

const Home = (props) => {
    return(
        <React.Fragment>
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h2>Home Page</h2>
                </div>
            </div>
            <div class="panel-body">
                <div className="jumbotron">
                    <p>
                        Jammu and Kashmir[a] was a state of India from 1954 to 2019, constituting the southern and southeastern portion of the larger Kashmir region, which has been the subject of a dispute between India, Pakistan and China since the mid-20th century.[5][6] The underlying region of this state were parts of the former princely state of Jammu and Kashmir, whose western districts, now known as Azad Kashmir, and northern territories, now known as Gilgit-Baltistan, are administered by Pakistan. The Aksai Chin region in the east, bordering Tibet, has been under Chinese control since 1962
                    </p>
                    <button className="btn btn-success">
                        Click
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;