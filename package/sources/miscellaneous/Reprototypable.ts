import { Constructor } from 'miscellaneous/Constructor';

interface Reprototypable<A extends any[] = [], CA extends any[] = []> {
    reprototype(...args: A): Constructor<this>;
}

export {
    Reprototypable,
};
