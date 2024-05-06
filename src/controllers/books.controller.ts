import { Body, Controller, Post, Req, Get,Patch } from '@nestjs/common';
import { BookService, PartsService } from '../service';
import { BooksDto, PartsDto } from '../models';
import { UserLeanDoc } from '../schema';

@Controller({ path: '/books' })
export class BooksController {
  constructor(private readonly orderService: BooksService) {}

  @Post('/')
  async createBook(
    @Body() body: BooksDto,
    @Req() req: Request & { user: UserLeanDoc },
  ) {
    try {
      const { user } = req;

      const order = await this.orderService.createBook({
        ...body,
        login: user.login,
      });
      return order;
    } catch (err) {
      throw err;
    }
  }

  @Get('/')
  async getBook(@Req() req: Request & { user: UserLeanDoc }) {
    try {
      const { user } = req;

      const books = await this.booksService.getBook(user);
      return books;
    } catch (err) {
      throw err;
    }
  }

  @Get('/parts')
  async getParts(@Req() req: Request & { user: UserLeanDoc }) {
    try {
      const { user } = req;

      const books = await this.partsService.getBook(user);
      return books;
    } catch (err) {
      throw err;
    }
  }


  @Get('/addresses/from/last-5')
  async getLast5Fromddresses(@Req() req: Request & { user: UserLeanDoc }) {
    try {
      const { user } = req;
      const last5Addresses = await this.orderService.getRecentFromAddresses(user.login);
      return last5Addresses;
    } catch (err) {
      throw err;
    }
  }

  @Get('/addresses/to/last-3')
  async getLast3ToAddresses(@Req() req: Request & { user: UserLeanDoc }) {
    try {
      const { user } = req;
      const last3Addresses = await this.orderService.getRecentToAddresses(user.login);
      return last3Addresses;
    } catch (err) {
      throw err;
    }
  }

  @Get('/lowest')
  async getLowestPriceOrder(@Req() req: Request & { user: UserLeanDoc }) {
    try {
      const { user } = req;
      const lowestPriceOrder = await this.orderService.getLowestPrice(user.login);
      return lowestPriceOrder;
    } catch (err) {
      throw err;
    }
  }

  @Get('/biggest')
  async getBiggestPriceOrder(@Req() req: Request & { user: UserLeanDoc }) {
    try {
      const { user } = req;
      const biggestPriceOrder = await this.orderService.getBiggestPrice(user.login);
      return biggestPriceOrder;
    } catch (err) {
      throw err;
    }
  }
  }


