// Embassy data for major countries in Seoul, South Korea (July 2024)
// Source: Official embassy websites

export interface Embassy {
  country: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
}

export const seoulEmbassies: Embassy[] = [
  {
    country: 'United States',
    name: 'US Embassy Seoul',
    address: '188 Sejong-daero, Jongno-gu, Seoul',
    phone: '+82-2-397-4114',
    email: 'SeoulInfo@state.gov',
    website: 'https://kr.usembassy.gov/',
  },
  {
    country: 'United Kingdom',
    name: 'British Embassy Seoul',
    address: '24, Sejong-daero 19-gil, Jung-gu, Seoul 04518',
    phone: '+82-2-3210-5500',
    email: 'britishembassy.seoul@fcdo.gov.uk',
    website: 'https://www.gov.uk/world/organisations/british-embassy-seoul',
  },
  {
    country: 'Australia',
    name: 'Australian Embassy Seoul',
    address: '19th Floor, Kyobo Building, 1 Jong-ro, Jongno-gu, Seoul 03154',
    phone: '+82-2-2003-0100',
    email: 'seoul.info@dfat.gov.au',
    website: 'https://southkorea.embassy.gov.au/',
  },
  // Add more embassies as needed
]; 