import Phaser from "phaser";

export class MainScene extends Phaser.Scene {

  constructor() {
    super({key: 'main'});
  }

  create() {
    console.log('create method');
    this.add.image(600,800,'mainBg');
    this.add.text(80,560,'Las Aventuras de T&L',{font:'16px Courier',color:'#ffffff'})
  }

  preload() {
    this.load.image('mainBg', 'assets/images/bg/background-1.jpg');
  }

  update() {
    console.log('update method');

  }
}
