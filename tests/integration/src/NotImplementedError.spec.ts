import 'mocha';
import { expect } from 'chai';

import { NotImplementedError } from '@atweel/primitives';

describe('NotImplementedError', () => {
    it('is throwable', () => {
        expect(() => { throw new NotImplementedError();})
            .to.throw(NotImplementedError);
    });
});
