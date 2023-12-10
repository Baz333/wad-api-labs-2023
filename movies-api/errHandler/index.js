const defaultErrHandler = (err, req, res, next) => {
    if(process.env.NODE_ENV === 'production') {
        return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`You caught the error. Here's the details: ${err.stack}`);
};

export default defaultErrHandler;