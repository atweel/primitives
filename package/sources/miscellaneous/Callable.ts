import { Annotated, Annotations } from './Annotated';

enum CallableExecutionMode {
    Synchronous = 'SYNCHRONOUS',
    Asynchronous = 'ASYNCHRONOUS',
}

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Callable {
    export const ExecutionMode = Symbol();
}

interface Callable<R = void, A extends any[] = []> extends Annotated<typeof Callable.ExecutionMode> {
    (...args: A): R;
}

export {
    Callable,
    CallableExecutionMode,
};
