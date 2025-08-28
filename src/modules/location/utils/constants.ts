import type { RegionData, CountryData, StateData } from "./types";

export const regionRecords: RegionData[] = [
  { regionName: "Africa", dateCreated: "2025-05-27 19:25pm" },
  { regionName: "Oceania", dateCreated: "2025-05-27 19:25pm" },
];

export const countryRecords: CountryData[] = [
  {
    sn: 1,
    flag: "circle-flags:au",
    countryName: "Australia",
    capital: "Canberra",
    region: "Oceania",
    mainCurrency: "Australian Dollar",
    symbol: "$",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    sn: 2,
    flag: "circle-flags:ng",
    countryName: "Nigeria",
    capital: "Abuja",
    region: "Africa",
    mainCurrency: "Naira",
    symbol: "₦",
    dateCreated: "2025-03-01 17:50:36",
  },
];

export const stateRecords: StateData[] = [
  {
    sn: 1,
    stateName: "Australia Capital Territory",
    capital: "Canberra",
    country: "Australia",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    sn: 2,
    stateName: "Federal Capital Territory",
    capital: "Abuja",
    country: "Nigeria",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    sn: 3,
    stateName: "Lagos",
    capital: "Ikeja",
    country: "Nigeria",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    sn: 4,
    stateName: "New South Wales",
    capital: "Sydney",
    country: "Nigeria",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    sn: 5,
    stateName: "Northern Territory",
    capital: "Darwin",
    country: "Nigeria",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    sn: 6,
    stateName: "Queensland",
    capital: "Brisbane",
    country: "Nigeria",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    sn: 7,
    stateName: "South Australia",
    capital: "Adelaide",
    country: "Nigeria",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    sn: 8,
    stateName: "Tasmania",
    capital: "Hobart",
    country: "Nigeria",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    sn: 9,
    stateName: "Victoria",
    capital: "Melbourne",
    country: "Nigeria",
    dateCreated: "2025-03-01 17:50:36",
  },
  {
    sn: 10,
    stateName: "Western Australia",
    capital: "Perth",
    country: "Nigeria",
    dateCreated: "2025-03-01 17:50:36",
  },
];
