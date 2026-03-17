export interface UserAddress {
  city: string;
  address: string;
  country?: string;
  region?: string;
  postalCode?: string;
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: UserAddress;
}
