import { Marked } from 'miscellaneous/Marked';

function mark<T, M extends string>(marker: M): (target: T) => Marked<M> & T;
function mark<T, M extends string>(target: T, marker: M): Marked<M> & T;
function mark<T, M extends string>(...args: any[]): (Marked<M> & T) | ((target: T) => Marked<M> & T) {
    if (args.length === 1) {
        return (target: any): Marked<M> & T => Object.assign(target, { marker: args[0] });
    } else {
        return Object.assign(args[0], { marker: args[1] });
    }
}

export default mark;
