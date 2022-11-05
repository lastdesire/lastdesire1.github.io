import React, {useState, useEffect} from 'react';
import {faCircleQuestion, faComment} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Messages() {

    const [comments, setComments] = useState([{},{},{}]);
    const commentsNames = comments.map((d) => <li key={d.name}>{d.name}</li>);
    const commentsMessages = comments.map((d) => <li key={d.message}>{d.message}</li>);
    useEffect(() => {
        getComments();
    }, []);

    function getComments() {
        let response = fetch('/api/comment')
            .then(response => {
                let x = response.json();
                //console.log(x)
                return x;
            })
            .then(data => {
                setComments(data);
            });
    }

    function createComment() {
        let name = prompt('Enter your name', 'NoName');
        while (name === "") {
            name = prompt('Enter your name correctly!');
        }
        if (name === null) {
            return null;
        }

        let message = prompt('Enter your message', 'NoMessage');
        while (message === "") {
            message = prompt('Enter your message correctly!');
        }
        if (message === null) {
            return null
        }
        
        fetch('/api/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, message}),
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                //alert(data);
                getComments();
            });
    }


    let res = comments.map(function(item)
    {
        return <tr key={item.id}>
            <td className="comment_name">{item.name}:</td>
            <td className="comment">{item.message}</td>
        </tr>;
    });
    return (
        <div>
            {!comments ? 'There is no comments available' : res}

            <FontAwesomeIcon className="comment_button" style={{color:"white"}} icon={faComment} onClick={createComment}/>
        </div>
    );
}
export default Messages;