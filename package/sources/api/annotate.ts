import { Annotated, Annotations } from 'miscellaneous/Annotated';
import isAnnotated from './isAnnotated';

function annotate<T extends object>(target: T): T & Annotated;
function annotate<T extends object, A extends string | symbol>(target: T, essential: Record<A, any>): T & Annotated<A>;
function annotate<T extends object, A extends string | symbol = never>(target: T, essential?: Record<A, any>): any {
    if (!isAnnotated(target)) {
        return Object.assign({}, target, { [Annotations]: Object.assign({}, essential, new Map<string | symbol, any>()) });
    } else {
        if (essential) {
            Object.assign(target[Annotations], essential);
        } 

        return target;
    }
}

export default annotate;
