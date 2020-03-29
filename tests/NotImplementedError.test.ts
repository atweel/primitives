import 'jest';
import tempy from 'tempy';

import { NotImplementedException } from '@atweel/primitives';

describe('NotImplementedException', () => {
    beforeAll(() => {
        const dir = tempy.directory();


    });

    it('is throwable', () => {
        expect(() => { throw new NotImplementedException(); })
            .toThrow(NotImplementedException);
    });
});
