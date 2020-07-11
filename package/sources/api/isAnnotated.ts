import { Annotated, Annotations } from 'miscellaneous/Annotated';

function isAnnotated<K extends string | symbol = never>(target: any, required?: Array<K> | undefined): target is Annotated<Record<K, any>> {
    return !!target[Annotations] && (!required || required.every((name) => !!target[Annotations][name]));
}

export default isAnnotated;
