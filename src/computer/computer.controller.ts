import { Controller, Get } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private diskService: DiskService,
    private cpuService: CpuService,
  ) {}

  @ApiProperty()
  @Get('run')
  run() {
    return {
      CPU: this.cpuService.compute(),
      DISK: this.diskService.getData(),
      Computer:
        this.cpuService.compute() === this.diskService.getData()
          ? 'OK'
          : 'ERROR',
    };
  }
}
