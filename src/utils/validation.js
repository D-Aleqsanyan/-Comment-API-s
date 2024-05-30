export const validatePostForm = (title, body) => {
    const errors = {};
    if (!title.trim()) {
        errors.title = 'Title is required';
    }
    if (!body.trim()) {
        errors.body = 'Body is required';
    }
    return errors;
};

export const validateCommentForm = (body) => {
    const errors = {};
    if (!body.trim()) {
        errors.body = 'Comment is required';
    }
    return errors;
};
