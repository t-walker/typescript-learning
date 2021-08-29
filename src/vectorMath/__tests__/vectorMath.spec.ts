import { calculateLength } from "../vectorMath";
import { NamedVector2D, Vector2D } from "../vectorMathTypes";

describe('Vector2D', () => {
  test('is assignable', () => {
    const x: Vector2D = {
      x: 1,
      y: 2
    } as Vector2D;

    expect(x.x).toBe(1);
    expect(x.y).toBe(2);
  });

  test('can get length for a Vector2D', () => {
    const vector1: Vector2D = {
      x: 5,
      y: 5
    };

    const length = calculateLength(vector1);

    expect(length).toBe(7.0710678118654755);
  });

  test('can get length for a NamedVector2D', () => {
    const vector1: NamedVector2D = {
      name: 'vector1',
      x: 5,
      y: 5
    };

    const length = calculateLength(vector1);

    expect(length).toBe(7.0710678118654755);
  });
})