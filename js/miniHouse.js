class MiniHouse {
    constructor(pPosition) {
        this.setPosition(pPosition);
    }
    getPosition() {
        return this.mPosition;
    }
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
    drawWall(pCtx) {
        
        pCtx.beginPath();
        pCtx.fillStyle = '#808080';
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(this.getPosition().getX() - 0,
            this.getPosition().getY() - 50);
            pCtx.lineTo(this.getPosition().getX() + 50,
        this.getPosition().getY() - 0);
        pCtx.lineTo(this.getPosition().getX() + 50,
        this.getPosition().getY() + 100);
        pCtx.lineTo(this.getPosition().getX() - 50,
        this.getPosition().getY() + 100);
        pCtx.lineTo(this.getPosition().getX() - 50,
        this.getPosition().getY() - 0);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();

    }
    drawRoof(pCtx) {
        pCtx.beginPath();
        pCtx.fillStyle = '#cb4154';
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(this.getPosition().getX() - 0,
            this.getPosition().getY() - 60);
            pCtx.lineTo(this.getPosition().getX() + 60,
        this.getPosition().getY() - 0);
        pCtx.lineTo(this.getPosition().getX() - 60,
        this.getPosition().getY() - 0);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();
    }
    drawDoor(pCtx) {
        //lineto text for door
        pCtx.beginPath();
        pCtx.fillStyle = '#663300';
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(this.getPosition().getX() - 15,
        this.getPosition().getY() + 25);
        pCtx.lineTo(this.getPosition().getX() + 15,
        this.getPosition().getY() + 25);
        pCtx.lineTo(this.getPosition().getX() + 15,
        this.getPosition().getY() + 100);
        pCtx.lineTo(this.getPosition().getX() - 15,
        this.getPosition().getY() + 100);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();
    }
    drawWindow(pCtx) {
        //left window
        pCtx.beginPath();
        pCtx.fillStyle = '#CCCC00';
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(this.getPosition().getX() - 45,
        this.getPosition().getY() + 25);
        pCtx.lineTo(this.getPosition().getX() - 25,
        this.getPosition().getY() + 25);
        pCtx.lineTo(this.getPosition().getX() - 25,
        this.getPosition().getY() + 60);
        pCtx.lineTo(this.getPosition().getX() - 45,
        this.getPosition().getY() + 60);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();

        //right window
        pCtx.beginPath();
        pCtx.fillStyle = '#696969';
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(this.getPosition().getX() + 25,
        this.getPosition().getY() + 25);
        pCtx.lineTo(this.getPosition().getX() + 25,
        this.getPosition().getY() + 60);
        pCtx.lineTo(this.getPosition().getX() + 45,
        this.getPosition().getY() + 60);
        pCtx.lineTo(this.getPosition().getX() + 45,
        this.getPosition().getY() + 25);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();
    }
    drawWindowPanes(pCtx) {
        //left window panes
        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(this.getPosition().getX() - 35,
        this.getPosition().getY() + 25);
        pCtx.lineTo(this.getPosition().getX() - 35,
        this.getPosition().getY() + 60);
        pCtx.closePath();
        pCtx.stroke();
        
        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(this.getPosition().getX() - 25,
        this.getPosition().getY() + 42.5);
        pCtx.lineTo(this.getPosition().getX() - 45,
        this.getPosition().getY() + 42.5);
        pCtx.closePath();
        pCtx.stroke();
        
        //right window panes
        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(this.getPosition().getX() + 25,
        this.getPosition().getY() + 42.5);
        pCtx.lineTo(this.getPosition().getX() + 45,
        this.getPosition().getY() + 42.5);
        pCtx.closePath();
        pCtx.stroke();
    
        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(this.getPosition().getX() + 35,
        this.getPosition().getY() + 25);
        pCtx.lineTo(this.getPosition().getX() + 35,
        this.getPosition().getY() + 60);
        pCtx.closePath();
        pCtx.stroke();
    }
    drawchimney(pCtx) {
        // pCtx.beginPath();
        // pCtx.fillStyle = '#000000'
        // pCtx.strokeStyle = '#000000';
        // pCtx.moveTo(this.getPosition().getX() + 50,
        // this.getPosition().getY() - 48.9);
        // pCtx.lineTo(this.getPosition().getX() + 50,
        // this.getPosition().getY() - 70);
        // pCtx.lineTo(this.getPosition().getX() + 70,
        // this.getPosition().getY() - 70);
        // pCtx.lineTo(this.getPosition().getX() + 70,
        // this.getPosition().getY() - 30);
        // pCtx.closePath();
        // pCtx.fill();
        // pCtx.stroke();
    }
    draw(pCtx) {
        this.drawWall(pCtx);
        this.drawDoor(pCtx);
        this.drawRoof(pCtx);
        this.drawWindow(pCtx);
        this.drawWindowPanes(pCtx);
        this.drawchimney(pCtx);
    }
}