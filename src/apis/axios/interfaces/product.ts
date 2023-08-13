export interface CarPartsCategory {
  id: string;
  title: string;
  image?: string;
  seoDescription: string;
  description: string;
  keywords: string;
  url: string;
  carPartsCategories: CarPartsCategory[];
  metaTitle: string;
}

export const CategoryKeys = ['id', 'name', 'parent'];

export interface Category {
  id: number;
  name: string;
  image: string;
  url: string;
  parentId: number | null;
}

export interface CategoryFlat {
  id: number;
  name: string;
  seoDescription?: string;
  description?: string;
  keywords?: string;
  url: string;
  sort: number;
  promotedToRoot: boolean;
  disabled: boolean;
  image?: string;
  parentId: number | null;
  metaTitle: string;
}

export const PartKeys = ['id', 'name', 'category'];
type Options = Record<string, string>;
export interface Price {
  price: number;
  min: number | null;
  max: number | null;
}

export enum ImageSize {
  small,
  medium,
  large,
  extraLarge,
}
export interface CarPartImagesEntity {
  id: number;
  image: string;
  alt: string;
  order: number;
  carPartId: number;
  name?: string;
  size?: ImageSize;
}

export enum CarPartState {
  CONTACTUS = 'CONTACTUS',
  INQUIRY = 'INQUIRY',
  ONLINESHOPPING = 'ONLINESHOPPING',
  DISABLE = 'DISABLE',
}

export interface BriefUser {
  id: number;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}

export interface NewSupplierType {
  id: number;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  supplier: {
    title: string;
  };
}

export interface Supplier {
  id: number;
  user: BriefUser;
  callingPhoneNumber: string;
  whatsappPhoneNumber: string;
  telegramId: string;
  idNumber: string;
  igId: string;
  email: string;
  description: string;
  province: string;
  website: string;
  SeoDescription: string;
  keywords: string;
  telephones: string[];
  storesAddresses: string[];
  brandImg: string;
}

export type ContactType =
  | 'whatsapp'
  | 'telegram'
  | 'phone'
  | 'telephone'
  | 'email'
  | 'address'
  | 'website'
  | 'instagram';

export interface Contact {
  type: ContactType;
  info: string;
}

export interface SupplierBrand {
  id: number;
  url: string;
  name: string;
  image: string;
}

interface SupplierProductImage {
  image: string;
}

export interface ProductPrice {
  id: number;
  carPartId: number;
  price: number;
  min: number;
  max: number;
}

export interface SupplierProduct {
  id: number;
  name: string;
  url: string;
  images: SupplierProductImage[];
  price: ProductPrice[];
}

export interface SupplierType {
  id: number;
  contactInfo: Contact[];
  title: string;
  description: string;
  profileImage: string;
  coverImage: string;
  sliderImages: string[];
  brands: SupplierBrand[];
  products: SupplierProduct[];
  location: [number, number] | [];
  SeoDescription: string;
  url: string;
  keywords: string;
  userId: BriefUser['id'];
  province: string;
  city: string;
  idNumber: string;
  user?: BriefUser;
  metaTitle: string;
}

export interface Manufacturer {
  id: number;
  name: string;
  url: string;
  image: string;
  description: string;
  seoDescription: string;
  keywords: string;
  categories: CategoryFlat[];
  carMakers: SupplierBrand[];
  suppliers: BestSupplierType[];
  metaTitle: string;
}

export interface BestSupplierType {
  id?: number;
  userId: number;
  rate: number;
  profileImage: string;
  title: string;
  url: string;
  city: string;
  contactInfo?: Contact[];
}

export interface CarPart {
  id: number;
  options: Options;
  name: string;
  url: string;
  updateDate: string;
  price: Price[];
  images: CarPartImagesEntity[];
  manufacturer: {
    description: string;
    id: number;
    image: string;
    keywords: string;
    name: string;
    seoDescription: string;
    url: string;
  };
  state: CarPartState;
  categoryIds: number[];
  maxOrderQuantity: number;
  minOrderQuantity: number;
  shortDescription: string;
  fullDescription: string;
  keywords: string;
  capacity: number;
  discount: number;
  technicalNumber: string;
  suppliers?: SupplierType[];
  rating: number;
  rateCount: number;
  metaTitle: string;
  pinned: boolean;
}

export const getPrice = (prices: Price[], qty: number) => {
  for (let i = 0; i < prices.length; ) {
    const price = prices[i];
    if (price.min == null && price.max == null) {
      return price.price;
    }
    if (price.min == null) {
      if (qty <= price.max!) {
        return price.price;
      }
    } else if (price.max == null) {
      if (qty >= price.min) {
        return price.price;
      }
    } else if (qty >= price.min && qty <= price.max) {
      return price.price;
    }
    i += 1;
  }
  return 0;
};

export interface ProductTable {
  id: number;
  name: string;
  basePrice: number;
  price: number;
}

export interface CarpartNew {
  name: string;
  id: number;
  configs: Array<{
    id: number;
    price: number;
    basePrice: number;
  }>;
  state: CarPartState;
}

export interface UpdatePriceDto {
  configId: number;
  price?: number;
  basePrice?: number;
}

export interface UpdatedCarpartNewRow extends CarpartNew {
  price?: number;
  basePrice?: number;
}

export interface ProductQuery extends Partial<Pick<CarpartNew, 'name' | 'id' | 'state'>> {
  page?: number;
}

export interface FullCarpartNew extends CarPart {
  configs: Array<{
    id: number;
    price: number;
    basePrice: number;
  }>;
}

export interface CarPartImageDto {
  image: string;
  alt: string;
}
export interface UpdateCarPartDto {
  name: string;
  metaTitle: string;
  fullDescription: string;
  shortDescription: string;
  images: CarPartImageDto[];
}
