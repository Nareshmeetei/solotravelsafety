// Auto-generated destination index
// Last updated: 2025-07-26T06:09:21.686Z

import amsterdam from './amsterdam';
import auckland from './auckland';
import bangkok from './bangkok';
import barcelona from './barcelona';
import bern from './bern';
import bogota from './bogota';
import brisbane from './brisbane';
import brussels from './brussels';
import busan from './busan';
import cairo from './cairo';
import capeTown from './cape-town';
import caracas from './caracas';
import copenhagen from './copenhagen';
import dublin from './dublin';
import edinburgh from './edinburgh';
import florence from './florence';
import guatemalaCity from './guatemala-city';
import helsinki from './helsinki';
import johannesburg from './johannesburg';
import kamakura from './kamakura';
import karachi from './karachi';
import kyoto from './kyoto';
import lagos from './lagos';
import lisbon from './lisbon';
import manila from './manila';
import melbourne from './melbourne';
import mexicoCity from './mexico-city';
import munich from './munich';
import nagano from './nagano';
import osaka from './osaka';
import oslo from './oslo';
import paris from './paris';
import portAuPrince from './port-au-prince';
import prague from './prague';
import reykjavik from './reykjavik';
import rioDeJaneiro from './rio-de-janeiro';
import sanSalvador from './san-salvador';
import seoul from './seoul';
import singapore from './singapore';
import stockholm from './stockholm';
import tokyo from './tokyo';
import toronto from './toronto';
import vancouver from './vancouver';
import vienna from './vienna';
import wellington from './wellington';
import zurich from './zurich';
import { Destination } from './types';

export const destinations: Destination[] = [
  amsterdam,
  auckland,
  bangkok,
  barcelona,
  bern,
  bogota,
  brisbane,
  brussels,
  busan,
  cairo,
  capeTown,
  caracas,
  copenhagen,
  dublin,
  edinburgh,
  guatemalaCity,
  helsinki,
  johannesburg,
  kamakura,
  karachi,
  kyoto,
  lagos,
  lisbon,
  manila,
  melbourne,
  mexicoCity,
  munich,
  nagano,
  osaka,
  oslo,
  portAuPrince,
  reykjavik,
  rioDeJaneiro,
  sanSalvador,
  seoul,
  singapore,
  stockholm,
  tokyo,
  toronto,
  vancouver,
  vienna,
  wellington,
  zurich,
];

export const getDestinationBySlug = (city: string, country: string): Destination | undefined => {
  // Convert search parameters to lowercase and replace spaces with hyphens for comparison
  const searchCity = city.toLowerCase().replace(/\s+/g, '-');
  const searchCountry = country.toLowerCase().replace(/\s+/g, '-');
  
  return destinations.find(dest => 
    dest.city.toLowerCase().replace(/\s+/g, '-') === searchCity &&
    dest.country.toLowerCase().replace(/\s+/g, '-') === searchCountry
  );
};

export const createDestinationSlug = (city: string, country: string): string => {
  return `${city.toLowerCase().replace(/\s+/g, '-')}-${country.toLowerCase().replace(/\s+/g, '-')}`;
};

// Export individual destinations
export {
  amsterdam,
  auckland,
  bern,
  bogota,
  brisbane,
  brussels,
  busan,
  cairo,
  capeTown,
  caracas,
  copenhagen,
  dublin,
  edinburgh,
  guatemalaCity,
  helsinki,
  johannesburg,
  kamakura,
  karachi,
  kyoto,
  lagos,
  manila,
  melbourne,
  mexicoCity,
  munich,
  nagano,
  osaka,
  oslo,
  portAuPrince,
  reykjavik,
  rioDeJaneiro,
  sanSalvador,
  seoul,
  singapore,
  stockholm,
  tokyo,
  toronto,
  vancouver,
  vienna,
  wellington,
  zurich,
};
