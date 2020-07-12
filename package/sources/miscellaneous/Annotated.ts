const Annotations = Symbol();

interface Annotated<A extends Exclude<string | symbol, keyof ReadonlyMap<any, any>> = never> {
    readonly [Annotations]: Partial<Readonly<Record<A, any>>> & ReadonlyMap<string | symbol, any>;
}

export {
    Annotations,
    Annotated,
};
