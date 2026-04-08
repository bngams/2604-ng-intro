// same than export interface HousingLocation { ... }
export type HousingLocation = {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

// ALIAS
//export type HousingLocations = Array<HousingLocation>;
export type HousingLocations = HousingLocation[];
