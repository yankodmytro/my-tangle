import { Controller, Get } from '@nestjs/common';

@Controller('cart')
export class CartController {
  @Get()
  getCart() {
    return { items: [], total: 0 };
  }
}
