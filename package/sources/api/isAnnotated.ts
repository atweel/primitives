import { Annotated, Annotations } from 'miscellaneous/Annotated';

function isAnnotated<A extends string | symbol = never>(target: any, annotations?: Array<A> | undefined): target is Annotated<A> {
    return !!target[Annotations] && (!annotations || annotations.every((name) => !!target[Annotations][name]));
}

export default isAnnotated;
