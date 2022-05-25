import Player from '../classes/objects/player';
import Phaser from 'phaser';
import { WORLD_WIDTH, WORLD_HEIGHT } from '../hooks/constants';

export class MainScene extends Phaser.Scene {

	private player;
	private platforms;
	private maps;

	create(): void {


		this.maps=this.make.tilemap({key:'map-json'});


        this.createMap();

	}

	update(time): void {

		this.player.update(time);

	}


	createMap(){
        // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
        // Phaser's cache (i.e. the name you used in preload)
        const tileset = this.maps.addTilesetImage("tileset", "map");

        // Parameters: layer name (or index) from Tiled, tileset, x, y
        const belowLayer = this.maps.createDynamicLayer("ground", tileset, 0, 0);
        const worldLayer = this.maps.createDynamicLayer("map", tileset, 0, 0);
        worldLayer.setCollisionByProperty({ collides: true });
        const spawnPoint = this.maps.findObject("spawn_player", obj => obj.name === "spawn_player");
        this.player = new Player(spawnPoint.x,spawnPoint.y, this,'caballero');
        const camera = this.cameras.main;

        this.physics.add.collider(this.player.entity, worldLayer, null, null, this);
        camera.startFollow(this.player.entity);
        camera.setBounds(0, 0, this.maps.widthInPixels, this.maps.heightInPixels);
	}

}
