import Phaser from 'phaser';
export default class Player {

    private player;
    private scene;
    private x;
    private y;
    private cursor;
    private controls;
    private type;
    private dir;
    private timmer = 0;

    constructor(x, y, scene, type) {

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.type = type;
        this.cursor = scene.input.keyboard.createCursorKeys();
        this.controls = scene.input.keyboard.addKeys('F,I,G,X,ESC');
        this.addToScene();
        this.addAnimations();


    }

    get entity() {
        return this.player;
    }

    changeMov(dir) {
        this.dir = dir;
    }

    update(time): void {
        let THAT = this;

        if (time > this.timmer) {
            this.cursorDownEvents();
            this.cursorUpEvents();
            this.controlDownEVent();
            this.timmer = time + 150;
        }
    }

    cursorDownEvents(): void {
        let THAT = this;
        this.cursor.left.on('down', function (event) {
            THAT.player.setVelocityX(-160);
            THAT.player.anims.play('left', true);

        });
        this.cursor.right.on('down', function (event) {
            THAT.player.setVelocityX(160);
            THAT.player.anims.play('right', true);
        });
        this.cursor.up.on('down', function (event) {
            THAT.player.setVelocityY(-160);
            THAT.player.anims.play('up', true);
        });
        this.cursor.down.on('down', function (event) {
            THAT.player.setVelocityY(160);
            THAT.player.anims.play('down', true);
        });

    }

    controlDownEVent(): void {
        let THAT = this;
        this.controls.F.on('down', function (event) {
            if (THAT.cursor.down.isDown) {
                THAT.player.setVelocityY(0);
                THAT.player.anims.play('attack_down', true);
            } else if (THAT.cursor.up.isDown) {
                THAT.player.setVelocityY(0);
                THAT.player.anims.play('attack_up', true);
            } else if (THAT.cursor.left.isDown) {
                THAT.player.setVelocityX(0);
                THAT.player.anims.play('attack_left', true);
            } else if (THAT.cursor.right.isDown) {
                THAT.player.setVelocityX(0);
                THAT.player.anims.play('attack_right', true);
            }


        });
    }

    cursorUpEvents(): void {
        let THAT = this;
        this.cursor.left.on('up', function (event) {
            THAT.stopWalk();

        });
        this.cursor.right.on('up', function (event) {
            THAT.stopWalk();
        });
        this.cursor.up.on('up', function (event) {
            THAT.stopWalk();
        });
        this.cursor.down.on('up', function (event) {
            THAT.stopWalk();
        });

    }

    stopWalk(): void {
        this.player.anims.play('stop', true);
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);
    }

    addToScene(): void {

        this.player = this.scene.physics.add.sprite(this.x, this.y, this.type, 'front-stop');

    }

    addAnimations(): void {
        var leftFrame = this.scene.anims.generateFrameNames(this.type, {
            start: 1, end: 6, prefix: 'walk_left_'
        });
        var rightFrame = this.scene.anims.generateFrameNames(this.type, {
            start: 1, end: 6,
            prefix: 'walk_right_'
        });
        var upFrame = this.scene.anims.generateFrameNames(this.type, {
            start: 1, end: 6,
            prefix: 'walk_up_'
        });
        var downFrame = this.scene.anims.generateFrameNames(this.type, {
            start: 1, end: 6,
            prefix: 'walk_front_'
        });

        var attackDownFrame = this.scene.anims.generateFrameNames(this.type, {
            start: 1, end: 6,
            prefix: 'attack_down_'
        });
        var attackUpFrame = this.scene.anims.generateFrameNames(this.type, {
            start: 1, end: 6,
            prefix: 'attack_up_'
        });
        var attackLeftFrame = this.scene.anims.generateFrameNames(this.type, {
            start: 1, end: 6,
            prefix: 'attack_left_'
        });
        var attackRightFrame = this.scene.anims.generateFrameNames(this.type, {
            start: 1, end: 6,
            prefix: 'attack_right_'
        });

        this.scene.anims.create({
            key: 'right',
            frames: rightFrame,
            frameRate: 8,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'left',
            frames: leftFrame,
            frameRate: 8,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'up',
            frames: upFrame,
            frameRate: 8,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'down',
            frames: downFrame,
            frameRate: 8,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'attack_down',
            frames: attackDownFrame,
            frameRate: 20,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'attack_up',
            frames: attackUpFrame,
            frameRate: 20,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'attack_left',
            frames: attackLeftFrame,
            frameRate: 20,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'attack_right',
            frames: attackRightFrame,
            frameRate: 20,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'stop',
            frames: [{key: this.type, frame: 'front-stop'}],
            frameRate: 20,
            repeat: -1
        });
    }


}
