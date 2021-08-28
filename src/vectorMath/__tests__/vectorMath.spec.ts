import { Vector2D } from "../vectorMathTypes";

describe('Vector math', () => {
  test('is assignable', () => {
    const x: Vector2D = {
      x: 1,
      y: 2
    } as Vector2D;

    expect(x.x).toBe(1);
    expect(x.y).toBe(2);

  })
})