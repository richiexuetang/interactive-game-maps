import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function titleCase(str: string) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

export const flatten: any = (ary: any[]) =>
  ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

export function getMarkerBounds(arr: number[][] | null) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return null;

  const minX = Math.min(...arr.map((subArr) => subArr[0]));
  const minY = Math.min(...arr.map((subArr) => subArr[1]));
  const maxX = Math.max(...arr.map((subArr) => subArr[0]));
  const maxY = Math.max(...arr.map((subArr) => subArr[1]));

  return [minX, minY, maxX, maxY];
}

export const pointIsInBounds = (point: number[], bounds: number[]) => {
  return (
    point[0] < bounds[0] ||
    point[0] > bounds[2] ||
    point[1] < bounds[1] ||
    point[1] > bounds[3]
  );
};

// Generic helper function that can be used for the three operations:
const operation = (list1: any[], list2: any[], isUnion = false) =>
  list1.filter((a) => isUnion === list2.some((b) => a.slug === b.slug));

export const inBoth = (list1: any[], list2: any[]) =>
  operation(list1, list2, true);
