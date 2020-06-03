import React, { Component } from 'react';
import Parser from 'html-react-parser'
import Star from './star.png'
import Del from './del.png'

export default ({movie, deleteMovie}) => {
    function setStars (grade){
        let g = parseInt(grade)
        let s = " "; 

        for (var i=0; i<g; i++) {
            s += '<img src=' + Star + '>'
        }
        return s
    }

    return (
        <div>
            <p id="movie">Title : {movie.title} Grade: {Parser(setStars(movie.grade))} <img className="del"src={Del} onClick={() => deleteMovie(movie)}/></p>
        </div>
    );
}