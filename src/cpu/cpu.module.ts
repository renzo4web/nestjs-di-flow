import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module';

@Module({
  // import the entire power module, now cpu have access to exports from power module
  imports: [PowerModule],
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
