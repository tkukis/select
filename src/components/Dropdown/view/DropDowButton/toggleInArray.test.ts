import { toggleInArray } from ".";

it('array toggling', () => {
    expect(toggleInArray(1, [1, 2]).includes(1)).toBeFalsy()
    expect(toggleInArray({}, [{}, 2]).includes({})).toBeFalsy()
    expect(toggleInArray({ a: 10 }, [{ a: 10 }, 2]).includes({ a: 10 })).toBeFalsy()
    expect(toggleInArray(3, [1, 2]).includes(1)).toBeTruthy()
    expect(toggleInArray(3, [1, 2]).includes(3)).toBeTruthy()
});