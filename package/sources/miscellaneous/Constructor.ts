type Constructor<T extends object, A extends any[] = []> = new (...args: A) => T;

export {
    Constructor,
};
