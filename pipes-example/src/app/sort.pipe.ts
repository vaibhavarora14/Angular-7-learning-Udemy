import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
    pure: false,
})

export class SortPipe implements PipeTransform {
    transform(value: any, sortStatus: boolean): any {
        if (sortStatus) {
            return value.slice(0).sort(this.compare);
        }
        return value;
    }

    compare(value1, value2) {
        const name1 = value1.name.toUpperCase();
        const name2 = value2.name.toUpperCase();

        let comparison = 0;
        if (name1 > name2) {
            comparison = 1;
        } else if (name1 < name2) {
            comparison = -1;
        }
        return comparison;
    }
}
