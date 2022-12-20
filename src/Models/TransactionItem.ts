export class TransactionItem {
    id: number;
    transactionId: number;
    name: string;
    value: number;
    quantity: number;

    constructor(id: number, transactionId: number, name: string, value: number, quantity: number){
        this.id = id;
        this.transactionId = transactionId;
        this.name = name;
        this.value = value;
        this.quantity = quantity;
    }
}