interface Reconstructible<A extends any[] = []> {
    reconstruct(...args: A): this;
}

export {
    Reconstructible,
};
