// Auto-generated destination index
// Last updated: 2025-07-26T06:09:21.686Z

import amsterdam from './amsterdam';
import auckland from './auckland';
import bern from './bern';
import bogota from './bogota';
import brisbane from './brisbane';
import busan from './busan';
import cairo from './cairo';
import cape-town from './cape-town';
import caracas from './caracas';
import copenhagen from './copenhagen';
import dublin from './dublin';
import edinburgh from './edinburgh';
import guatemala-city from './guatemala-city';
import helsinki from './helsinki';
import johannesburg from './johannesburg';
import kamakura from './kamakura';
import karachi from './karachi';
import kyoto from './kyoto';
import lagos from './lagos';
import manila from './manila';
import melbourne from './melbourne';
import mexico-city from './mexico-city';
import munich from './munich';
import nagano from './nagano';
import osaka from './osaka';
import oslo from './oslo';
import port-au-prince from './port-au-prince';
import reykjavik from './reykjavik';
import rio-de-janeiro from './rio-de-janeiro';
import san-salvador from './san-salvador';
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
  bern,
  bogota,
  brisbane,
  busan,
  cairo,
  cape-town,
  caracas,
  copenhagen,
  dublin,
  edinburgh,
  guatemala-city,
  helsinki,
  johannesburg,
  kamakura,
  karachi,
  kyoto,
  lagos,
  manila,
  melbourne,
  mexico-city,
  munich,
  nagano,
  osaka,
  oslo,
  port-au-prince,
  reykjavik,
  rio-de-janeiro,
  san-salvador,
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
  return destinations.find(dest => 
    dest.city.toLowerCase().replace(/s+/g, '-') === city.toLowerCase() &&
    dest.country.toLowerCase().replace(/s+/g, '-') === country.toLowerCase()
  );
};

export const createDestinationSlug = (city: string, country: string): string => {
  return `${city.toLowerCase().replace(/s+/g, '-')}-${country.toLowerCase().replace(/s+/g, '-')}`;
};

// Export individual destinations
export {
  amsterdam,
  auckland,
  bern,
  bogota,
  brisbane,
  busan,
  cairo,
  cape-town,
  caracas,
  copenhagen,
  dublin,
  edinburgh,
  guatemala-city,
  helsinki,
  johannesburg,
  kamakura,
  karachi,
  kyoto,
  lagos,
  manila,
  melbourne,
  mexico-city,
  munich,
  nagano,
  osaka,
  oslo,
  port-au-prince,
  reykjavik,
  rio-de-janeiro,
  san-salvador,
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
