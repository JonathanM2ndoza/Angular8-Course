import { Item } from './item.model';

export class List {

    id: number;
    title: string;
    creationDate: Date;
    endDate: Date;
    done: boolean;
    items: Item[];

    constructor(title: string) {
        this.title = title;
        this.creationDate = new Date();
        this.done = false;
        this.items = [];
        this.id = new Date().getTime(); // Only for the test
    }
}
