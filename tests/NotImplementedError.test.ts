import 'jest';
import { expect } from 'chai';
import tempy from 'tempy';

import { NotImplementedException } from '@atweel/primitives';

describe('NotImplementedException', () => {
    beforeAll(() => {
        const dir = tempy.directory();


    });

    it('is throwable', () => {
        expect(() => { throw new NotImplementedException(); })
            .to.throw(NotImplementedException);
    });
});
