export interface PlanetDataType {
  name: string;
  Content: string;
  "ROTATION TIME": string;
  "REVOLUTION TIME": string;
  RADIUS: string;
  "AVERAGE TEMP": string;
  image: string;
  "INTERNAL STRUCTURE": string;
  "SURFACE GEOLOGY": string;
}

export type Planets =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";
