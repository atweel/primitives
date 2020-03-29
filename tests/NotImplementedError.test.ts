import 'jest';

import { NotImplementedException } from 'self';

describe('NotImplementedException', () => {
    it('is throwable', () => {
        expect(() => { throw new NotImplementedException(); })
            .toThrow(NotImplementedException);
    });
});
