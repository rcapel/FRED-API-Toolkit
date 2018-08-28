import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'outputType' })
export class OutputTypePipe implements PipeTransform {

  names: string[] = [undefined, "RealTimePeriod", "VintageDateAll", "VintageDateNewAndRevised", "InitialRelease"];

  transform(value: number): string {
    return this.names[value]
  }

}
