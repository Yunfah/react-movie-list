import React, { Component, useState, useRef } from "react";


// input form för användaren
export default function AddMovie({ addMovie }) {
    const [title, setTitle] = useState('')
    const [grade, setGrade] = useState('')
    let formRef = useRef(null)

    return <div className="container">

        <form ref={(ref) => formRef = ref} onSubmit={(e) => {
            e.preventDefault();

            addMovie({title, grade});
            formRef.reset();
        }}>
            <fieldset>
                <div className="form-group">
                    <label>Titel</label>
                    <input type="text" id="title" className="form-control" onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label>Betyg</label>
                    <select id="grade" className="form-control" onChange={(e) => setGrade(e.target.value)}>
                        <option value="0"> Välj betyg här</option>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                    </select>
                </div>
                <input type="submit" value="Submit" />

            </fieldset>
        </form>
    </div>
}
