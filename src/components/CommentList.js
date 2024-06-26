import React from 'react';

const CommentList = ({ comments }) => {
    return (
        <div>
            <h3>Comments</h3>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
