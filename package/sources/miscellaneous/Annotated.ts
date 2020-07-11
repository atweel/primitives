const Annotations = Symbol();

interface Annotated<A extends Record<string | symbol, any> = {}> {
    readonly [Annotations]: A & ReadonlyMap<string | symbol, any>;
}

export {
    Annotations,
    Annotated,
};
