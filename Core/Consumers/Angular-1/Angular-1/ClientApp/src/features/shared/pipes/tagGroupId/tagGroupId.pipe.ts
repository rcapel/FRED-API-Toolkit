import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tagGroupId' })
export class TagGroupIdPipe implements PipeTransform {

  names: string[] = ["freq", "gen", "geo", "geot", "rls", "seas", "src"];

  transform(value: number): string {
    return this.names[value]
  }

}
