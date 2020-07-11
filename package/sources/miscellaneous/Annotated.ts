const Annotations = Symbol();

interface Annotated {
    readonly [Annotations]: ReadonlyMap<string | symbol, any>; 
}

export {
    Annotations,
    Annotated,
};
