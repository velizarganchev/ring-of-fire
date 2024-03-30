import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../firebase-services/game.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

  constructor(
    private router: Router,
    public gameService: GameService,
  ) { }

  startGame() {
    this.newGame();
  }

  newGame() {
    let game = new Game();
    this.addNewGame(game);
  }

  addNewGame(game: Game) {
    let newGame: Game = {
      players: game.players,
      stack: game.stack,
      playedCards: game.playedCards,
      currentPlayer: game.currentPlayer,
      pickCardAnimation: game.pickCardAnimation,
      currentCard: game.currentCard
    }

    this.gameService.addGame(newGame).then(
      (res) => {
        this.router.navigateByUrl('/games/' + res);
      }
    );
  }
}
