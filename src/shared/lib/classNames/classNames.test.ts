import { classNames } from './classNames'


describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    })
    test('with additional param', () => {
        const expected = 'someClass class1 class2 hovered scrolltable'
        expect(classNames('someClass', { hovered: true, scrolltable: true }, ['class1', 'class2'])).toBe(expected);
    })
    test('with additional param', () => {
        const expected = 'someClass class1 class2 scrolltable'
        expect(classNames('someClass', { hovered: false, scrolltable: true }, ['class1', 'class2'])).toBe(expected);
    })
    test('with additional param', () => {
        const expected = 'someClass class1 class2 scrolltable'
        expect(classNames('someClass', { hovered: undefined, scrolltable: true }, ['class1', 'class2'])).toBe(expected);
    })
})