export type RegionData = {
  regionName: string;
  dateCreated: string;
};

export type CountryData = {
  sn: number;
  flag: string;
  countryName: string;
  capital: string;
  region: string;
  mainCurrency: string;
  symbol: string;
  dateCreated: string;
};

export type StateData = {
  sn: number;
  stateName: string;
  capital: string;
  country: string;
  dateCreated: string;
};
