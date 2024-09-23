export interface Game {
  slug: string;
  title: string;
  minZoom: number;
  maxZoom: number;
  zoom: number;
  center: number[];
  description: string;
}
