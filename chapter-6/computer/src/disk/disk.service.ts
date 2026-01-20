import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Drawing 5 watts power');
    this.powerService.supplyPower(5);
    return 'Data from disk';
  }
}
