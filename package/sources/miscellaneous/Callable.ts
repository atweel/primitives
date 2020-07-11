import { Annotated } from './Annotated';

interface Callable<R, A extends any[] = []> extends Annotated {
    (...args: A): R;
}

enum CallableExecutionMode {
    Synchronous = 'SYNCHRONOUS',
    Asynchronous = 'ASYNCHRONOUS',
}

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Callable {
    export const ExecutionMode = Symbol();
}

export {
    Callable,
    CallableExecutionMode,
};
