import { Marked } from 'miscellaneous/Marked';

function isMarked<M extends string>(marker: M, target: any): target is Marked<M> {
    return target.marker === marker;
}

export default isMarked;
