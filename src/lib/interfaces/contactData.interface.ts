export interface IContactData {
  workHours: Map<string, string>;
  address: string;
  phoneNumber: string;
  emailAddress: string;
  center: {
    lat: number;
    lng: number;
  }
}
