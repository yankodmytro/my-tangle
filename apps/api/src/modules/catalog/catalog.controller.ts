import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { LeadDto } from './dto';

@Controller('catalog')
export class CatalogController {
  constructor(@Inject(CatalogService) private readonly catalogService: CatalogService) {}

  @Get('products')
  products() {
    return this.catalogService.getProducts();
  }

  @Post('lead')
  lead(@Body() body: LeadDto) {
    return this.catalogService.captureLead(body);
  }
}
