import { Annotated, Annotations } from 'miscellaneous/Annotated';
import isAnnotated from './isAnnotated';
function annotate<T extends object>(target: T): T & Annotated;
function annotate<T extends object, E extends Record<string | symbol, any>>(target: T, essential: E): T & Annotated & E;
function annotate<T extends object, E extends Record<string | symbol, any> = {}>(target: T, essential?: E): any {
    return !isAnnotated(target)
        ? Object.assign({}, target, { [Annotations]: new Map<string | symbol, any>() }, essential || {}) 
        : essential
            ? Object.assign({}, target, essential)
            : target;
}

export default annotate;
