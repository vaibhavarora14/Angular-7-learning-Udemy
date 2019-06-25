import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
    pure: false,
})
export class SearchPipe implements PipeTransform {
    transform(value: any, searchValue: string, searchColumn: string) {
        if (value.length !== 0 && searchValue.length !== 0 && searchColumn.length !== 0) {
            let returnArray: [];
            returnArray = value.filter((server) => {
                return server[searchColumn].toUpperCase().indexOf(searchValue.toUpperCase()) > -1;
            });
            return returnArray;
        }
        return value;
    }
}
