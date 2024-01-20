import {
  IReview,
  ICard,
  ILocation,
  ISubscription,
  IOrganization,
  IUser
} from 'typing';

export type User = IUser & { id: number; password?: string };
export type Organization = IOrganization & { id: number; locations?: Location[] };
export type Location = ILocation & { id: number; card?: Card };
export type Subscription = ISubscription & { id: number };
export type Card = ICard & { id: number };
export type Review = IReview & { id: number };
