export type PageId = 'home' | 'about' | 'destinations' | 'social';

export interface Destination {
  name: string;
  country: string;
  flagCode: string;
  lat: number;
  lng: number;
  photo: string;
}

export interface NavItem {
  id: PageId;
  label: string;
}

export interface TeaserItem {
  num: string;
  title: string;
  text: string;
  link: string;
  page: PageId;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Value {
  title: string;
  text: string;
  icon: React.ReactNode;
}

export interface SocialPlatform {
  name: string;
  handle: string;
  url: string;
  followLabel: string;
  metaText: string;
  iconClass: string;
  icon: React.ReactNode;
  placeholderLabel: string;
}
