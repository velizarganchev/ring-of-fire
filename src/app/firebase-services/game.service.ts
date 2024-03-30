import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, collectionData, onSnapshot, addDoc, updateDoc, deleteDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games: Game[] = [];
  game!: Game;

  firestore: Firestore = inject(Firestore);

  constructor() {
  }

  async addGame(game: Game) {
    let newGame = await addDoc(this.getCollectionRef(), game);
    if (newGame.id) {
      this.game = this.setGameJson(game, newGame.id);
    }
    return newGame.id;
  }

  async updateGame(game: Game) {
    if (game.id) {
      await updateDoc(this.getSingleGameRef(game.id), {
        players: game.players,
        stack: game.stack,
        playedCards: game.playedCards,
        currentPlayer: game.currentPlayer,
        pickCardAnimation: game.pickCardAnimation,
        currentCard: game.currentCard
      });
    }
  }

  subGameList() {
    return onSnapshot(this.getCollectionRef(), (list) => {
      list.forEach(
        el => {
          this.games.push(this.setGameJson(el.data(), el.id))
        }
      )
    });
  }

  getGame(id: string) {
    const gameDocRef = doc(this.firestore, `games/${id}`);
    return docData(gameDocRef);
  }

  setGameJson(obj: any, id: string): Game {
    return {
      id: id,
      players: obj.players,
      stack: obj.stack,
      playedCards: obj.playedCards,
      currentPlayer: obj.currentPlayer,
      pickCardAnimation: obj.pickCardAnimation,
      currentCard: obj.currentCard
    }
  }

  getCollectionRef() {
    return collection(this.firestore, 'games');
  }

  getSingleGameRef(docId: string) {
    return doc(collection(this.firestore, 'games'), docId);
  }

  ngOnDestroy() {

  }
}
