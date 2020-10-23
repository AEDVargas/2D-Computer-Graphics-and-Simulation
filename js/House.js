class House {
    constructor(position, angle, scale) {
        this.position = position;
        this.angle = angle;
        this.scale = scale;
        this.initialiseSceneGraph();
        
    }
    setRootSGN(rootNode) {
        this.rootNode = rootNode;
    }
    getRootSGN() {
        return this.rootNode;
    }
    //create scenegraphnode to 
    initialiseSceneGraph() {
        var wall = new Wall();
        var window = new  Window();
        var roof = new Roof();
        var door = new Door();

        //set the matrix position of the node
        var nodeTranslation = Matrix.createTranslation(this.position);
        var rootNode = new SceneGraphNode(nodeTranslation);
        this.setRootSGN(rootNode);

        var nodeRotation = Matrix.createRotation(this.angle);
        var rotateNode = new SceneGraphNode(nodeRotation);
        rootNode.addChild(rotateNode);

        var nodeScale = Matrix.createScale(this.scale);
        var scaleNode = new SceneGraphNode(nodeScale);
        rotateNode.addChild(scaleNode);

        var wallPosNode = new SceneGraphNode(Matrix.createTranslation(new Vector (-250, 0, 1)));
        var wallRotNode = new SceneGraphNode(Matrix.createRotation(0));
        var wallScaleNode = new SceneGraphNode(Matrix.createScale(new Vector(1, 1, 1)));


        scaleNode.addChild(wallPosNode);
        wallPosNode.addChild(wallRotNode);
        wallRotNode.addChild(wallScaleNode);

        wallScaleNode.addChild(wall);
        wallScaleNode.addChild(window);
        wallScaleNode.addChild(roof);
        wallScaleNode.addChild(door);

    }
    draw(pCtx, pMatrix) {
        this.getRootSGN().draw(pCtx, pMatrix);
    }

}


class Wall {
    draw(pCtx) {
        pCtx.beginPath();
        pCtx.fillStyle = '#808080' || '#000000';
        pCtx.strokeStyle = '#000000'
        pCtx.rect(0, 0, 125, 300)
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();
        
    }
}

class Window {
    draw(pCtx) {



        //new window
        pCtx.beginPath();
        pCtx.fillStyle = '#404040';
        pCtx.strokeStyle = '#000000';
        pCtx.arc(35, 250, 20, 1.1 * Math.PI, 1.9 * Math.PI, false);
        pCtx.lineTo(54, 270);
        pCtx.lineTo(16, 270);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(35, 230);
        pCtx.lineTo(35, 270);
        pCtx.closePath();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(16, 255);
        pCtx.lineTo(54, 255);
        pCtx.closePath();
        pCtx.stroke();

        //new window
        pCtx.beginPath();
        pCtx.fillStyle = '#404040';
        pCtx.strokeStyle = '#000000';
        pCtx.arc(35, 150, 20, 1.1 * Math.PI, 1.9 * Math.PI, false);
        pCtx.lineTo(54, 170);
        pCtx.lineTo(16, 170);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(35, 130);
        pCtx.lineTo(35, 170);
        pCtx.closePath();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(16, 155);
        pCtx.lineTo(54, 155);
        pCtx.closePath();
        pCtx.stroke();

        //new window
        pCtx.beginPath();
        pCtx.fillStyle = '#CCCC00';
        pCtx.strokeStyle = '#000000';
        pCtx.arc(90, 150, 20, 1.1 * Math.PI, 1.9 * Math.PI, false);
        pCtx.lineTo(109, 170);
        pCtx.lineTo(71, 170);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(90, 130);
        pCtx.lineTo(90, 170);
        pCtx.closePath();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(71, 155);
        pCtx.lineTo(109, 155);
        pCtx.closePath();
        pCtx.stroke();

        //new window
        pCtx.beginPath();
        pCtx.fillStyle = '#404040';
        pCtx.strokeStyle = '#000000';
        pCtx.arc(35, 50, 20, 1.1 * Math.PI, 1.9 * Math.PI, false);
        pCtx.lineTo(54, 70);
        pCtx.lineTo(16, 70);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(35, 30);
        pCtx.lineTo(35, 70);
        pCtx.closePath();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(16, 55);
        pCtx.lineTo(54, 55);
        pCtx.closePath();
        pCtx.stroke();

        //new window
        pCtx.beginPath();
        pCtx.fillStyle = '#404040';
        pCtx.strokeStyle = '#000000';
        pCtx.arc(90, 50, 20, 1.1 * Math.PI, 1.9 * Math.PI, false);
        pCtx.lineTo(109, 70);
        pCtx.lineTo(71, 70);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(90, 30);
        pCtx.lineTo(90, 70);
        pCtx.closePath();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(71, 55);
        pCtx.lineTo(109, 55);
        pCtx.closePath();
        pCtx.stroke();
    }
}

class Roof {
    draw(pCtx) {
        pCtx.beginPath();
        pCtx.fillStyle = '#962938  ';
        pCtx.strokeStyle = '#000000';
        pCtx.moveTo(0, 0);
        pCtx.lineTo(-2.5, -2.5);
        pCtx.lineTo(-2.5, -5);
        pCtx.lineTo(129, -5);
        pCtx.lineTo(129, -2.5);
        pCtx.lineTo(125, 0);


        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();
    }
}

class Door {
    draw(pCtx) {
        pCtx.beginPath();
        pCtx.fillStyle = '#663300';
        pCtx.strokeStyle = '#000000';
        pCtx.rect(85, 235, 30, 55);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();

        pCtx.beginPath();
        pCtx.fillStyle = '#404040';
        pCtx.strokeStyle = '#000000';
        pCtx.rect(77.5, 290, 45, 10);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();
    }
}

