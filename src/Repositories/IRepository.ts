
export interface IRepository<T> {
    _instance: any;
    getInstance(): IRepository<T>;
    data: T[];
    create(t: T): Promise<T>;
    update(t: T): Promise<T>;
    delete(t: T): boolean;
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;

}