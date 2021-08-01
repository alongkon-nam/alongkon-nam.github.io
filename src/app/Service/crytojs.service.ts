  
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})

export class CryptoJSService {
    constructor() { }

    key: any = 'baac-2020';

    encryptStr(msg: any) {
        return CryptoJS.AES.encrypt(msg, this.key).toString();
    }

    decryptStr(msg: any) {
        return CryptoJS.AES.decrypt(msg, this.key).toString(CryptoJS.enc.Utf8);
    }

    encryptObj(obj: any) {
        return CryptoJS.AES.encrypt(JSON.stringify(obj), this.key).toString();
    }

    decryptObj(obj: any) {
        const bytes  = CryptoJS.AES.decrypt(obj, this.key);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
}