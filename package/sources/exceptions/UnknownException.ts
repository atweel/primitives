class UnknownException extends Error {
    constructor() {
        super('Unknown error occurred.');
    }
}

export {
    UnknownException,
};
