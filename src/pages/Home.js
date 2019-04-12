import React from "react";

function Home () {
    return (
        <div className="jumbotron">
            <h1 className="display-4">
                Test Text
            </h1>
            <p className="lead">
                Test text
            </p>
            <hr className="my-4"/>
            <a className="btn btn-primary btn-lg" href="/create" role="button">
                Create A Character
            </a>
            <a className="btn btn-primary btn-lg" href="/load" role="button">
                Load A Character
            </a>
        </div>

    )
}

export default Home;
