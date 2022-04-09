export class Point implements google.maps.Point {
  constructor(public x: number, public y: number) { }
  /**
   * Compares two Points
   */
  equals(other: google.maps.Point | null): boolean {
    if (!other) {
      return false;
    }

    return other.x === this.x && other.y === this.y;
  }
  /**
   * Returns a string representation of this Point.
   */
  toString(): string {
    return `x=${this.x}&y=${this.y}`;
  }
}
