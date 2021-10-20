import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower() {
    return true;
  }
}
