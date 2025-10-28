export type Language = 'ar' | 'en';

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  image?: string;
}

export interface MenuCategory {
  title: string;
  description?: string;
  note?: string;
  items: MenuItem[];
}

export interface Content {
  nav: {
    home: string;
    menu: string;
    contact: string;
    language_switch: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_button: string;
  };
  menu: {
    title: string;
    categories: MenuCategory[];
  };
  info: {
    hours_title: string;
    hours: string[];
    hours_note?: string;
    location_title: string;
    location: string;
  };
  footer: {
    social_title: string;
    rights_reserved: string;
  };
}

export interface Translations {
  ar: Content;
  en: Content;
}
