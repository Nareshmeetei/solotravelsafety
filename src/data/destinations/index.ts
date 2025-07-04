import { Destination } from './types';
import reykjavik from './reykjavik';
import tokyo from './tokyo';
import osaka from './osaka';
import kyoto from './kyoto';
import seoul from './seoul';
import nagano from './nagano';
import kamakura from './kamakura';
import busan from './busan';
import copenhagen from './copenhagen';
import helsinki from './helsinki';
import zurich from './zurich';
import vienna from './vienna';
import riodejaneiro from './rio-de-janeiro';
import cairo from './cairo';
import lagos from './lagos';
import karachi from './karachi';
import stockholm from './stockholm';
import amsterdam from './amsterdam';
import melbourne from './melbourne';
import vancouver from './vancouver';
import capetown from './cape-town';
import manila from './manila';
import mexicocity from './mexico-city';
import caracas from './caracas';
import auckland from './auckland';
import oslo from './oslo';
import johannesburg from './johannesburg';
import munich from './munich';
import singapore from './singapore';
import edinburgh from './edinburgh';
import brisbane from './brisbane';
import sansalvador from './san-salvador';
import portauprince from './port-au-prince';
import dublin from './dublin';
import wellington from './wellington';
import bern from './bern';
import guatemalacity from './guatemala-city';
import toronto from './toronto';
import bogota from './bogota';

// Import all destinations here
const destinations: Destination[] = [
  reykjavik,
  tokyo,
  osaka,
  kyoto,
  seoul,
  nagano,
  kamakura,
  busan,
  copenhagen,
  helsinki,
  zurich,
  vienna,
  riodejaneiro,
  cairo,
  lagos,
  karachi,
  stockholm,
  amsterdam,
  melbourne,
  vancouver,
  capetown,
  manila,
  mexicocity,
  caracas,
  auckland,
  oslo,
  johannesburg,
  munich,
  singapore,
  edinburgh,
  brisbane,
  sansalvador,
  portauprince,
  dublin,
  wellington,
  bern,
  guatemalacity,
  toronto,
  bogota,
];

export default destinations;
export { destinations };

// Utility functions
export const getDestinationBySlug = (city: string, country: string): Destination | undefined => {
  return destinations.find(dest => 
    dest.city.toLowerCase() === city.toLowerCase() && 
    dest.country.toLowerCase() === country.toLowerCase()
  );
};

export const createDestinationSlug = (city: string, country: string): string => {
  return `${city.toLowerCase().replace(/\s+/g, '-')}-${country.toLowerCase().replace(/\s+/g, '-')}`;
};

// Export types
export type { Destination } from './types';
 