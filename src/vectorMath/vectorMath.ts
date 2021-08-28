import { Vector2D } from "./vectorMathTypes";

const calculateLength = (vector: Vector2D) => {
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
}

