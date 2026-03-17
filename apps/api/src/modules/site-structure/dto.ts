import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';

class LocalizedStringDto {
  @IsString()
  ua!: string;

  @IsString()
  ru!: string;
}

export class PageCategoryDto {
  @IsString()
  id!: string;

  @IsString()
  name!: string;
}

export class PageTemplateDto {
  @IsString()
  id!: string;

  @IsString()
  name!: string;
}

class PageStructureMainDto {
  @IsString()
  id!: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PageCategoryDto)
  parentCategory!: PageCategoryDto | null;

  @IsString()
  url!: string;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  title!: LocalizedStringDto;

  @ValidateNested()
  @Type(() => PageTemplateDto)
  template!: PageTemplateDto;

  @IsBoolean()
  isHidden!: boolean;

  @IsBoolean()
  includeInSitemap!: boolean;
}

class PageStructureSeoDto {
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  title!: LocalizedStringDto;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  description!: LocalizedStringDto;

  @IsBoolean()
  noindex!: boolean;

  @IsBoolean()
  nofollow!: boolean;
}

class PageStructureCommonDto {
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  description!: LocalizedStringDto;
}

export class PageStructureDto {
  @ValidateNested()
  @Type(() => PageStructureMainDto)
  main!: PageStructureMainDto;

  @ValidateNested()
  @Type(() => PageStructureSeoDto)
  seo!: PageStructureSeoDto;

  @ValidateNested()
  @Type(() => PageStructureCommonDto)
  common!: PageStructureCommonDto;
}

export class StorePageCategoryDto {
  @IsBoolean()
  isPopularCategory!: boolean;

  @IsBoolean()
  listViewByDefault!: boolean;
}

export class ProductRatingDto {
  @IsNumber()
  value!: number;

  @IsNumber()
  votesCount!: number;

  @IsNumber()
  popularity!: number;
}

export class BrushProductDetailsDto {
  @IsString()
  hairType!: string;

  @IsString()
  hairConcern!: string;

  @IsString()
  appointment!: string;

  @IsString()
  size!: string;

  @IsString()
  sizeType!: string;

  @IsString()
  weight!: string;
}

export class StoreMainProductDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => PageCategoryDto)
  category!: PageCategoryDto | null;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PageCategoryDto)
  additionalCategories!: PageCategoryDto[] | null;

  @IsString()
  article!: string;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  shortDescription!: LocalizedStringDto;

  @IsString()
  color!: string;

  @IsUrl()
  colorImage!: string;

  @IsNumber()
  price!: number;

  @IsNumber()
  oldPrice!: number;

  @IsNumber()
  discount!: number;

  @IsString()
  brand!: string;

  @IsString()
  countryOfOrigin!: string;

  @IsString()
  unit!: string;

  @ValidateNested()
  @Type(() => ProductRatingDto)
  rating!: ProductRatingDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => BrushProductDetailsDto)
  brushProduct!: BrushProductDetailsDto | null;
}

export class BlogStructureDto {
  @IsUrl()
  previewImage!: string;

  @IsUrl()
  image!: string;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  previewText!: LocalizedStringDto;

  @ValidateNested()
  @Type(() => LocalizedStringDto)
  text!: LocalizedStringDto;
}

export class UserAddressDto {
  @IsString()
  city!: string;

  @IsString()
  address!: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;
}

export class UserProfileDto {
  @IsString()
  id!: string;

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsString()
  phone!: string;

  @IsEmail()
  email!: string;

  @ValidateNested()
  @Type(() => UserAddressDto)
  address!: UserAddressDto;
}
