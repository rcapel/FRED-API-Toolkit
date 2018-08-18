import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'units' })
export class UnitsPipe implements PipeTransform {

  names: string[] = ["lin", "chg", "ch1", "pch", "pc1", "pca", "cch", "cca", "log"];

  transform(value: number): string {
    return this.names[value]
  }

}
