import { Category } from "./Category";
import { SubCategory } from "./SubCategory";
import { TransactionItem } from "./TransactionItem";

export class Transaction {
    id: number;
    userId: number;
    date: Date;
    value: number;
    category: Category;
    items?: TransactionItem[];
    subCategory?: SubCategory;
    description?: string;

    constructor(id: number, userId: number, date: Date, value: number, category: Category, items?: TransactionItem[], subCategory?: SubCategory, description?: string){
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.value = value;
        this.category = category;
        this.items = items? items : undefined;
        this.subCategory = subCategory? subCategory : undefined;
        this.description = description? description: "";
    }

}