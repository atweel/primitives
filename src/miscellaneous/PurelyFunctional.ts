type PurelyFunctional<T> = {
    [key in keyof T]: (...args: any[]) => void;
};

export {
    PurelyFunctional,
};
