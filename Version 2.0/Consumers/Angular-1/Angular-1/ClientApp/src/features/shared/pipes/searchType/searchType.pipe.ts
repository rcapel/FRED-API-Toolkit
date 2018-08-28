import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchType' })
export class SearchTypePipe implements PipeTransform {

  names: string[] = ["full_text", "series_id"];

  transform(value: number): string {
    return this.names[value]
  }

}
