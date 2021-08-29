import { Vector2D } from "./vectorMathTypes";

export const calculateLength = (vector: Vector2D) => {
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
}

