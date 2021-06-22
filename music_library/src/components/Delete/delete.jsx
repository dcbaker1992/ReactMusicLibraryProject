import React, { Component } from 'react';


function Delete (props) {

        return (
            <div>
            <button onClick={() => props.deleteSongs(props.songid)}>Delete</button>
        </div>
        );
    }


export default Delete;