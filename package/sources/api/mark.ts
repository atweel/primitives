import { Marked } from 'miscellaneous/Marked';

function mark<T, M extends string>(marker: M, target: T): Marked<M> & T {
    return Object.assign(target, { marker });
}

export default mark;
