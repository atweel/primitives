import { Annotated } from './Annotated';

interface Callable<R, A extends any[] = []> extends Annotated {
    (...args: A): R;
}

export {
    Callable,
};
