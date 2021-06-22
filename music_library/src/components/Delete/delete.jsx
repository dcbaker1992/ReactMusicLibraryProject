import React, { Component } from 'react';


function Delete (props) {

        return (
            <div>
                <button className="btn btn-danger" onClick={() => props.deleteSongs(props.songid)}>Delete</button>
            </div>
        );
    }


export default Delete;