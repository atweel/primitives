interface AsyncDisposable {
    dispose(): Promise<void>;
}

export {
    AsyncDisposable,
};
