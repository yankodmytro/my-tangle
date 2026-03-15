import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AuthService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || user.passwordHash !== password || user.role !== 'ADMIN') {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      token: Buffer.from(`${user.id}:${user.email}`).toString('base64url'),
    };
  }
}
