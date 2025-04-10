import { echo } from '@company/node-package'
import { Injectable } from '@nestjs/common';

@Injectable()
export class SomeService {
  constructor() {}

  public getHello(): string {
    return echo('world');
  }
}