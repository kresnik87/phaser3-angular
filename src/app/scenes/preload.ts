export class PreloadScene extends Phaser.Scene {

	preload(): void {

		this.load.crossOrigin = 'anonymous';
		this.load.maxParallelDownloads = Infinity;

	    this.load.image('ground', 'assets/images/sprites/platform.png');
	    this.load.spritesheet('dude', 'assets/images/sprites/dude.png', { frameWidth: 32, frameHeight: 48 });
	    this.load.spritesheet(' paladin','assets/images/sprites/paladin.png',{ frameWidth: 32, frameHeight: 48 });
        this.load.atlas('caballero','assets/images/sprites/caballero.png', 'assets/data/caballero.json');
		this.load.image("map",'assets/images/maps/mapsprite.png');
		this.load.tilemapTiledJSON('map-json','assets/images/maps/map2.json');
	}

	create(): void {
		this.scene.start('GameTitle');
	}

}
