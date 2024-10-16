export interface Product {
  id: number;
  product_type: string;
  variant_key: any;
  variant_key_array: any[];
  variant_options: any[];
  slug: string;
  slug_path: string;
  link: Link;
  basic_data: BasicData;
  image: string[];
  image_data: ImageDaum[];
  categories: Category[];
  price: Price;
  stickers: Sticker[];
  inventory: Inventory;
  digital_data: DigitalData;
  behaviours: Behaviours;
}

export interface Link {
  link_path: string;
  absolute_link: string;
  url: Url;
}

export interface Url {
  base: string;
  base_suffix: string;
  path_prefix: string;
  path: string;
}

export interface BasicData {
  id_product: number;
  id_product_parent: any;
  is_main_product: boolean;
  is_selected_product: boolean;
  name: string;
  brand_id: any;
  brand_name: any;
  id_manufacture: any;
  manufacture_name: any;
  barcode: string;
  sku: string;
  short_description: string;
  description: any;
  attributes_text: any;
}

export interface ImageDaum {
  url: string;
  type: string;
  file_data: FileData;
  descriptions: Descriptions;
}

export interface FileData {
  relation: string;
  filename: string;
  extension: string;
  mimetype: string;
  width: number;
  height: number;
}

export interface Descriptions {
  alt: string;
}

export interface Category {
  id: number;
  slug: string;
  name: string;
  category_path: CategoryPath[];
  category_path_name: string;
}

export interface CategoryPath {
  id: number;
}

export interface Price {
  price_defined: boolean;
  price: Price2;
  currency: string;
  discount: Discount;
  min: any[];
  max: any[];
}

export interface Price2 {
  original: number;
  discount: any;
}

export interface Discount {
  active: boolean;
  amount: number;
  campaigns: any[];
}

export interface Sticker {
  image: any;
  slug: string;
  name: string;
  title: any;
  subtitle: any;
  description: any;
  button: any;
  target: any;
  url: any;
}

export interface Inventory {
  inventory_defined: boolean;
  status: string;
  amount: string;
  unit: any;
}

export interface DigitalData {
  is_digital: any;
  digital_type: any;
  using_from: any;
  using_to: any;
}

export interface Behaviours {
  cart: Cart;
  checkout: Checkout;
}

export interface Cart {
  countable: boolean;
  display: Display;
}

export interface Display {
  quantity_field: boolean;
}

export interface Checkout {
  countable: boolean;
  display: Display2;
}

export interface Display2 {
  quantity_field: boolean;
}
