import { Vector2D, Vector3D } from "./vectorMathTypes";

export const calculateLength = (vector: Vector2D) => {
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
}

export const normalize = (vector: Vector3D) => {
  const length = calculateLength(vector);

  return {
    x: vector.x / length,
    y: vector.y / length,
    z: vector.z / length
  }
}