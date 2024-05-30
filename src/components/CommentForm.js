import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ body });
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea placeholder="Comment" value={body} onChange={(e) => setBody(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommentForm;
