import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'frequency' })
export class FrequencyPipe implements PipeTransform {

  names: string[] = ["d", "w", "bw", "m", "q", "sa", "a",
    "wef", "weth", "wew", "wetu", "wem", "wesu", "wesa", "bwew", "bwem"];

  transform(value: number): string {
    return this.names[value]
  }

}
