import React, { Component } from 'react';
import MovieListItem from './MovieListItem';

export default ({ movies, sortMethod, setSortMethod, deleteMovie }) => {
    function renderMovies() {
        let sortedArray = movies;

        if (sortMethod) {
            switch (sortMethod) {
                case 'title':
                    sortedArray = [...movies].sort(function (a, b) {
                        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                        else if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                        return 0;
                    })
                    break;

                case 'grade':
                    sortedArray = [...movies].sort(function (a, b) {
                        if (a.grade > b.grade) return -1;
                        else if (a.grade < b.grade) return 1;
                        return 0;
                    })
                    break;
            }
        }

        console.log('movielist render', sortedArray)
        return (
            <ul>

                {sortedArray && sortedArray.map(movie => {
                    console.log('rendering ', movie)

                    return <li key={movie.id}>
                        <MovieListItem movie={movie} deleteMovie={deleteMovie} />
                    </li>

                })}
            </ul>
        )
    }

    return (
        <div className="container">
            <p style={{ marginTop: '2rem' }}>
                <button style={{marginRight: '1rem'}} onClick={() => { setSortMethod('title') }}>Sort By Title</button>
                <button onClick={() => { setSortMethod('grade') }}>Sort By Grade</button>
            </p>

            {renderMovies()}


        </div>
    )
}