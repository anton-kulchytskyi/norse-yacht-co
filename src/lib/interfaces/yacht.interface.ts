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
