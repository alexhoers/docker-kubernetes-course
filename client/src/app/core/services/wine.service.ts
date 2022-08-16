import { Injectable } from "@angular/core";
import { Firestore, collectionData, collection, DocumentData, getDoc, setDoc } from '@angular/fire/firestore';
import { addDoc, doc } from "@firebase/firestore";
import { getDocFromCache } from "firebase/firestore";
import { docData } from "rxfire/firestore";
import { Observable } from "rxjs";
import { delay, filter, find, map, take } from "rxjs/operators";
import { News } from "src/app/shared/models/news";
import { Note } from "src/app/shared/models/note";
import { Wine } from "src/app/shared/models/wine";

@Injectable({
    providedIn: 'root'
})
export class WineService {

    wines: Observable<Wine[]>;
    notes: Observable<Note[]>
    private afs: Firestore;

    constructor(private firestore: Firestore) {
        this.afs = firestore;
        this.wines = collectionData(collection(this.afs, 'wines'),{ idField: 'id' }).pipe(map((wines: DocumentData[]) => wines as Wine[]));
        this.notes = collectionData(collection(this.afs, 'notes'),{ idField: 'id' }).pipe(map((notes: DocumentData[]) => notes as Note[]));
    }

    /**
     * 
     * @returns List of wines as a list of Observables
     */
    getWines(): Observable<Wine[]> {
        // Simulate delay 1000ms
        return this.wines.pipe(delay(1000));
    }

    /**
     * 
     * @param id 
     * @returns A specific wine as an Observable
     */
    getWine(id: string): Observable<Wine> {
        return this.wines.pipe(map(wines => wines.find(wine => wine.id === id)));
    }

    /**
    * Adds wine
    * @param wine
    */
    async addWine(wine: Wine) {
        await addDoc(collection(this.afs, 'wines'), wine);
    }

    /**
     * 
     */
     getNotes(): Observable<Note[]> {
        // Simulate delay 1000ms
        return this.notes;
    }
}