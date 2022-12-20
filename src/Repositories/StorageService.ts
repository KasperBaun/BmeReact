//import { Constants } from "../helpers/constants";

export class StorageService implements Storage {
    private static instance: StorageService;
    public storageSize: number = 0;
    private currentDeviceLocalStorageQuota: number = 0;
    private keyCreationTimeMap = new Map<string, number>();
    private baseStorage: Storage;
    private prefix: string = "ATPEPCF";
    length: number = 0;
    //[name: string]: any;
    public static cacheLocation = "localStorage"
    static GetStorageService() {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new StorageService(localStorage);
            return this.instance;
        }
    }


    constructor(baseStorage: Storage) {
        this.baseStorage = baseStorage;
        this.currentDeviceLocalStorageQuota = this.getLocalStorageQuotaInBytes();
        console.log("StorageService initialised with " + (this.currentDeviceLocalStorageQuota / 1000) + " kB of local storage");
        this.getCacheStatus();
       
    }
    public testCache() {
        console.log("Testing cache");
        let i: number = 0;
        do {
            try {
                let value: string = "somevalue" + i;
                let key: string = "somekey" + i;
                this.setItem(key, value, true);
                i++;
            } catch (e) {
            }

        }
        while (this.storageSize < this.currentDeviceLocalStorageQuota * 0.75)

    }
    public getCacheStatus(){
        const cacheUsedInPercent = (this.storageSize/this.currentDeviceLocalStorageQuota)*100;
        console.log("Cache used: " + cacheUsedInPercent.toFixed(2) + "% (" + this.storageSize/1000 +"/" + this.currentDeviceLocalStorageQuota +") kB");
        //console.log("Maximum cache size for current device: " + this.currentDeviceLocalStorageQuota + " kB");
        //console.log("Current cache size: " + this.storageSize + " kB");
        //console.log("Elements in baseStorage: " + this.baseStorage.length);
        //console.log("keyDateMap.count: "+ this.keyCreationTimeMap.size);
    }
    public clear(): void {
        this.length = this.baseStorage.length;
        for (let i = 0; i < this.baseStorage.length; i++) {
            const key = this.baseStorage.key(i);
            if (key?.startsWith(this.prefix)) {
                this.baseStorage.removeItem(key);
            }
        }
        this.length = this.baseStorage.length;
    }
    public getItem(key: string): string | null {
        this.length = this.baseStorage.length;
        return this.baseStorage.getItem(`${this.prefix}-${key}`);
    }
    public key(index: number): string | null {
        this.length = this.baseStorage.length;
        return this.baseStorage.key(index);
    }
    public removeItem(key: string): void {
        var storageObject = this.baseStorage.getItem(`${this.prefix}-${key}`);
        this.baseStorage.removeItem(`${this.prefix}-${key}`);
        this.length = this.baseStorage.length;
        this.storageSize = this.storageSize + key.length + storageObject!.length;
    }
    public setItem(key: string, value: string, handleCache?: boolean): void {
        this.baseStorage.setItem(`${this.prefix}-${key}`, value);
        this.length = this.baseStorage.length;
        this.storageSize = this.storageSize + key.length + value.length;
        this.keyCreationTimeMap.set(
            `${this.prefix}-${key}`,
            Date.now()
        );
        if(handleCache){
            this.handleCacheStatus();
        }
    }

    private handleCacheStatus() {
        if (this.storageSize > this.currentDeviceLocalStorageQuota * 0.75) {
            console.log("cache is 75% or more full - deleting old items");
            let oldestItem: [string, number] = ["", Date.now()];
            this.keyCreationTimeMap.forEach((value: number, key: string) => {
                if (oldestItem[1] > value) {
                    oldestItem = [key, this.keyCreationTimeMap.get(key)!];
                }
            });
            var key = oldestItem[0];
            var value = oldestItem[1];
            var itemDeleted = this.keyCreationTimeMap.delete(key);
            if (itemDeleted) {
                console.log("Item deleted from cache - key: " + key + " value: " + value + ".");
                this.getCacheStatus();
                //console.log("Current cache status: " + (this.storageSize/this.currentDeviceLocalStorageQuota)*100 + " %");
            }
            else{
                console.log("Current cache status: " + (this.storageSize/this.currentDeviceLocalStorageQuota)*100 + " %");
            }
        }
    }
    private getUsedSpaceOfLocalStorageInBytes() {
        // Returns the total number of used space (in Bytes) of the Local Storage
        var b = 0;
        for (var key in this.baseStorage) {
            if (this.baseStorage.hasOwnProperty(key)) {
                b += key.length + this.baseStorage.getItem(key)!.length;
            }
        }
        return b;
    }
    private getUnusedSpaceOfLocalStorageInBytes() {
        let maxByteSize = 10485760; // 10MB
        let minByteSize = 0;
        let tryByteSize = 0;
        let testQuotaKey = 'testQuota';
        let timeout = 20000;
        let startTime = new Date().getTime();
        let unusedSpace = 0;
        let runtime = new Date().getTime();
        do {
            runtime = new Date().getTime() - startTime;
            try {
                tryByteSize = Math.floor((maxByteSize + minByteSize) / 2);
                this.setItem(testQuotaKey, String('1').repeat(tryByteSize));
                minByteSize = tryByteSize;
            } catch (e) {
                maxByteSize = tryByteSize - 1;
            }
        } while ((maxByteSize - minByteSize > 1) && runtime < timeout);

        this.removeItem(testQuotaKey);

        if (runtime >= timeout) {
            console.log("Unused space calculation may be off due to timeout.");
        }

        // Compensate for the byte size of the key that was used, then subtract 1 byte because the last value of the tryByteSize threw the exception
        unusedSpace = tryByteSize + testQuotaKey.length - 1;
        return unusedSpace;
    }

    private getLocalStorageQuotaInBytes() {
        // Returns the total Bytes of Local Storage Space that the browser supports
        var unused = this.getUnusedSpaceOfLocalStorageInBytes();
        var used = this.getUsedSpaceOfLocalStorageInBytes();
        this.baseStorage.clear();
        this.storageSize = 0;
        return (unused + used);
    }

}