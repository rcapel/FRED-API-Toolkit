import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tagsOrderBy' })
export class TagsOrderByPipe implements PipeTransform {

  names: string[] = ["series_count", "popularity", "created", "name", "group_id"];

  transform(value: number): string {
    return this.names[value]
  }

}
