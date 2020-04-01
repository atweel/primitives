import 'jest';

import { UnknownException } from 'self';

describe('UnknownException', () => {
    it('is throwable', () => {
        expect(() => { throw new UnknownException(); })
            .toThrow(UnknownException);
    });
});
