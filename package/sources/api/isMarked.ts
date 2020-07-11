import { Marked } from 'miscellaneous/Marked';

function isMarked<M extends string = string>(target: any, marker?: M | undefined): target is Marked<M> {
    return marker ? target.marker === marker : target.marker !== undefined;
}

export default isMarked;
