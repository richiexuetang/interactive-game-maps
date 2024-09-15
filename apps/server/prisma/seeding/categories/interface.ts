export interface Location {
  description?: string;
  regionSlug: string;
  title: string;
  longitude: number | string;
  latitude: number | string;
  media?: any[];
}

export interface CategoryLocation {
  locations: Location[];
  groupSlug: string;
  title: string;
  info?: string;
}
