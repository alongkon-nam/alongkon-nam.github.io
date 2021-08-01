
import { Injectable } from '@angular/core';
import { AngularFirestore,QueryFn } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getDataWhere(collection: any, whereClause: QueryFn) {
    return this.firestore.collection(collection, whereClause);
  }

  getDataWhereID(collection: any) {
    return this.firestore.collection(collection);
  }

  addData(collection: any, data: any) {
    return this.firestore.collection(collection).add(data);
  }

  updateDataById(collection: any, data: any) {
    return this.firestore.collection(collection).doc(data.key).update(data);
  }

  updateData(collection: any, Id: string, data: any) {
    return this.firestore.doc(collection + '/' + Id).update(data);
  }

  setData(collection: any, Id: string, data: any) {
    return this.firestore.doc(collection + '/' + Id).set(data, { merge: true });
  }

  deleteData(collection: any, Id: string) {
    return this.firestore.doc(collection + '/' + Id).delete();
  }

  getDataAll(collection: any) {
    return this.firestore.collection(collection).snapshotChanges();
  }
}
