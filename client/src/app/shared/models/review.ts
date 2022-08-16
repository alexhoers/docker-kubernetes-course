export class Review {
    
    id: number;
    wine: number;
    reviewer: number;
    description: string;
    rating: number;
    notes: string[];

    public constructor(init?: Partial<Review>) {
        Object.assign(this, init);
    }
}
