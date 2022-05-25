import {Component, OnInit} from '@angular/core';
import Phaser from 'phaser';
import {GameOverScene} from "../scenes/game-over";
import {PreloadScene} from "../scenes/preload";
import {MainScene} from "../scenes/main";
import {BootScene} from "../scenes/boot";
import {GameTitleScene} from "../scenes/game-title";
import GameConfig = Phaser.Types.Core.GameConfig;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;


  constructor() {
    this.config  = {
      type: Phaser.AUTO,
      width: (window.innerWidth * window.devicePixelRatio),
      height: (window.innerHeight * window.devicePixelRatio),
      zoom: 1,
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      physics: {
        default: 'arcade',
        arcade: {
          debug: false
        }
      },
    };
    this.phaserGame = new Phaser.Game(this.config);
  }

  public onGameReady(): void {
    this.phaserGame.scene.add('Boot', BootScene, false);
    this.phaserGame.scene.add('Preload', PreloadScene, false);
    this.phaserGame.scene.add('GameTitle', GameTitleScene, false);
    this.phaserGame.scene.add('Main', MainScene, false);
    this.phaserGame.scene.add('GameOver', GameOverScene, false);
    this.phaserGame.scene.start('Boot');
  }

  ngOnInit(): void {
    this.onGameReady()
  }

}
