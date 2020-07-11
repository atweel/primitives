import 'jest';

import isAnnotated from './isAnnotated';
import { Annotations } from '../miscellaneous/Annotated';

describe('isAnnotated', () => {
    it('recognizes a correctly annotated object without required properties', () => {
        const instance = {
            [Annotations]: {},
        };

        expect(isAnnotated(instance)).toBe(true);
    });

    it('rejects an incorrectly annotated object without required properties', () => {
        const instance = {

        };

        expect(isAnnotated(instance)).toBe(false);
    });

    it('recognizes a correctly annotated object with a single required property', () => {
        const instance = {
            [Annotations]: {
                'required': true,
            },
        };

        expect(isAnnotated(instance, [ 'required' ])).toBe(true);
    });

    it('recognizes a correctly annotated object with multiple required properties', () => {
        const instance = {
            [Annotations]: {
                'required1': true,
                'required2': true,
            },
        };

        expect(isAnnotated(instance, [ 'required1', 'required2' ])).toBe(true);
    });

    it('rejects an annotated object without required properties', () => {
        const instance = {
            [Annotations]: {

            },
        };

        expect(isAnnotated(instance, [ 'required' ])).toBe(false);
    });

    it('rejects an annotated object with one required property missing', () => {
        const instance = {
            [Annotations]: {
                'required1': true,
            },
        };

        expect(isAnnotated(instance, [ 'required1', 'required2' ])).toBe(false);
    });
});
