export class Item {
    
    description: string;
    done: boolean;
    id: number;

    constructor(description: string) {
        this.description = description;
        this.done = false;
        this.id = Math.random(); // Only for the test
    }
}
