import 'jest';
import 'jest';

import annotate from './annotate';
import { Annotations } from '../miscellaneous/Annotated';

describe('annotate', () => {
    it('annotates an object if not yet anotated', () => {
        const target = {
            property: 'value',
        };
        
        const annotated = annotate(target);

        expect(Object.is(annotated, target)).toBe(true);
        expect(annotated.property).toBe('value');
        expect(annotated[Annotations]).toBeDefined();
    });

    it('returns the same object unmodified if already annotated', () => {
        const target = {
            property: 'value',
            [Annotations]: {},
        };
        
        const annotated = annotate(target);

        expect(Object.is(annotated, target)).toBe(true);
    });

    it('annotates the target with essential annotations even if already annotated', () => {
        const target = {
            property: 'value',
            [Annotations]: {},
        };
        
        const annotated = annotate(target, {
            additional: 'value',
        });

        expect(Object.is(annotated, target)).toBe(true);
        expect(annotated.property).toBe('value');
        expect(annotated[Annotations]).toBeDefined();
        expect(annotated[Annotations].additional).toBe('value');
    });

    it('correctly annotates a function', () => {
        const target = (arg: string): string => arg;
        
        const annotated = annotate(target, {
            additional: 'value',
        });

        expect(Object.is(annotated, target)).toBe(true);
        expect(annotated[Annotations]).toBeDefined();
        expect(annotated[Annotations].additional).toBe('value');
        expect(annotated('test')).toBe('test');
    });
});
