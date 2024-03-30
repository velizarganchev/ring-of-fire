import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Game } from '../../models/game';
import { GameInfoComponent } from '../game-info/game-info.component';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PlayerAddDialogComponent } from '../player-add-dialog/player-add-dialog.component';
import { Firestore, collection, doc, collectionData, onSnapshot, addDoc, updateDoc, deleteDoc, docData } from '@angular/fire/firestore';

import { GameService } from '../firebase-services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    GameInfoComponent,
    MatButtonModule,
    MatIconModule,],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {

  firestore: Firestore = inject(Firestore);
  game!: Game;

  constructor(
    public dialog: MatDialog,
    public gameService: GameService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.gameService.getGame(params.id).subscribe((game) => {
        this.game = this.gameService.setGameJson(game, params.id);
      });
    })
  }

  takeCard() {
    if (!this.game.pickCardAnimation) {
      this.game.currentCard = this.game.stack.pop()!;
      this.game.pickCardAnimation = true;
      
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      this.gameService.updateGame(this.game);
      
      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard);
        this.game.pickCardAnimation = false;
        this.gameService.updateGame(this.game);
      }, 900);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PlayerAddDialogComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.gameService.updateGame(this.game);
      }
    });
  }
}
