import { DataFilter } from "src/app/model/data-filter.model";

export class FilterManagerController {

    // applied filters
    public appliedFilters: DataFilter[] = [];

    constructor(){}

    public add_filter(): void{

        // adding filter
        const newFilter: DataFilter = new DataFilter( 'Insulin', 0, 10 );
        this.appliedFilters.push(newFilter);
    }

}