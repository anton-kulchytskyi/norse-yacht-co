export interface Yacht {
  yacht_id: number;
  yacht_top: boolean;
  yacht_hot_price: boolean;
  yacht_vat: boolean;
  yacht_price: string;
  yacht_price_old: string;
  yacht_main_image_key: string;
  yacht_make: string;
  yacht_model: string;
  yacht_year: number;
  yacht_country: string;
  yacht_town: string;
  yacht_created_at: string;
  yacht_favourites: number[];
  yacht_favourites_count: number;
}

export interface YachtImage {
  yacht_image_id: number;
  createdAt: string;
  updatedAt: string | null;
  yacht_image_key: string;
  yacht_image_index: number;
}

export interface YachtDetail extends Yacht {
  yacht_loa: number;
  yacht_beam: number;
  yacht_draft: number;
  yacht_keel_type: string;
  yacht_fuel_type: string;
  yacht_images: YachtImage[];
  yacht_cabin: number;
  yacht_berth: number;
  yacht_heads: number;
  yacht_shower: number;
  yacht_description: string;
  yacht_owner_first_name: string;
  yacht_owner_last_name: string;
  yacht_owner_telephone: string;
  yacht_owner_email: string;
}
