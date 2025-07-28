import { Controller, Get, Post } from '@nestjs/common';
import { DepartementService } from './departement.service';

@Controller('departements')
export class DepartementController {
  constructor(private readonly departementService: DepartementService) {}

  // Récupérer toute la hiérarchie
  @Get('tree')
  async getTree() {
    return await this.departementService.getTree();
  }

  // Créer la hiérarchie de base (seed)
  @Post('seed')
  async seed() {
    return await this.departementService.seed();
  }
}
