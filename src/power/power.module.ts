import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], // private to his own intance module
  exports: [PowerService], // to share to to other modules
})
export class PowerModule {}
