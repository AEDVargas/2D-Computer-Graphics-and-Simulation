class Sun {
    constructor(position, angle, scale) {
        this.position = position;
        this.angle = angle;
        this.scale = scale;
        this.initialiseSceneGraph();
        
    }
    setRootSGN(rootNode) {
        this.rootNode = rootNode;
    }
    getRootSGN2() {
        return this.rootNode;
    }

    initialiseSceneGraph() {
        var body = new SunBody();
        var spike = new Spike();
        var spike2 = new Spike2();
        var spike3 = new Spike3();
        var spike4 = new Spike4();

        var nodeTranslation = Matrix.createTranslation(this.position);
        var rootNode = new SceneGraphNode(nodeTranslation);
        this.setRootSGN(rootNode);

        var nodeRotation = Matrix.createRotation(this.angle);
        var rotateNode = new SceneGraphNode(nodeRotation);
        rootNode.addChild(rotateNode);

        var nodeScale = Matrix.createScale(this.scale);
        var scaleNode = new SceneGraphNode(nodeScale);
        rotateNode.addChild(scaleNode);

        var sunBodyPosNode = new SceneGraphNode(Matrix.createTranslation(new Vector(0, 0, 1)));
        var sunBodyRotNode = new SceneGraphNode(Matrix.createRotation(0));
        var sunBodyScaleNode = new SceneGraphNode(Matrix.createScale(new Vector(1, 1, 1)));

        scaleNode.addChild(sunBodyPosNode);
        sunBodyPosNode.addChild(sunBodyRotNode);
        sunBodyRotNode.addChild(sunBodyScaleNode);
        sunBodyScaleNode.addChild(body);

        var spikePosNode = new SceneGraphNode(Matrix.createTranslation(new Vector(0, 0, 1)));
        var spikeRotNode = new SceneGraphNode(Matrix.createRotation(0));
        var spikeScaleNode = new SceneGraphNode(Matrix.createScale(new Vector(1, 1, 1)));

        scaleNode.addChild(spikePosNode);
        spikePosNode.addChild(spikeRotNode);
        spikeRotNode.addChild(spikeScaleNode);
        spikeScaleNode.addChild(spike);

        var spike2PosNode = new SceneGraphNode(Matrix.createTranslation(new Vector(0, 0, 1)));
        var spike2RotNode = new SceneGraphNode(Matrix.createRotation(0));
        var spike2ScaleNode = new SceneGraphNode(Matrix.createScale(new Vector(1, 1, 1)));

        scaleNode.addChild(spike2PosNode);
        spike2PosNode.addChild(spike2RotNode);
        spike2RotNode.addChild(spike2ScaleNode);
        spike2ScaleNode.addChild(spike2);

        var spike3PosNode = new SceneGraphNode(Matrix.createTranslation(new Vector(0, 0, 1)));
        var spike3RotNode = new SceneGraphNode(Matrix.createRotation(0));
        var spike3ScaleNode = new SceneGraphNode(Matrix.createScale(new Vector(1, 1, 1)));

        scaleNode.addChild(spike3PosNode);
        spike3PosNode.addChild(spike3RotNode);
        spike3RotNode.addChild(spike3ScaleNode);
        spike3ScaleNode.addChild(spike3);

        var spike4PosNode = new SceneGraphNode(Matrix.createTranslation(new Vector(0, 0, 1)));
        var spike4RotNode = new SceneGraphNode(Matrix.createRotation(0));
        var spike4ScaleNode = new SceneGraphNode(Matrix.createScale(new Vector(1, 1, 1)));

        scaleNode.addChild(spike4PosNode);
        spike4PosNode.addChild(spike4RotNode);
        spike4RotNode.addChild(spike4ScaleNode);
        spike4ScaleNode.addChild(spike4);
        
        
    }
    draw(pCtx, pMatrix) {
        this.getRootSGN2().draw(pCtx, pMatrix);
    }
    
}

class SunBody {
    draw(pCtx) {

        pCtx.beginPath();
        pCtx.fillStyle = '#F4F1C9';
        pCtx.strokeStyle = '#F4F1C9';
        pCtx.arc(0, 0, 50, 0, 2 * Math.PI);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();

    }
}
class Spike {
    draw(pCtx) {
        pCtx.beginPath();
        pCtx.fillStyle = '#F4F1C9';
        pCtx.strokeStyle = '#F4F1C9';
        pCtx.moveTo(40, 40);
        pCtx.lineTo(40,75);
        pCtx.lineTo(10,55);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();
    }
}
class Spike2 {
    draw(pCtx) {
        pCtx.beginPath();
        pCtx.fillStyle = '#F4F1C9';
        pCtx.strokeStyle = '#F4F1C9';
        pCtx.moveTo(55, 5);
        pCtx.lineTo(85,25);
        pCtx.lineTo(45,35);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();
    }
}

class Spike3 {
    draw(pCtx) {
        pCtx.beginPath();
        pCtx.fillStyle = '#F4F1C9';
        pCtx.strokeStyle = '#F4F1C9';
        pCtx.moveTo(-40, -40);
        pCtx.lineTo(-40,-75);
        pCtx.lineTo(-10,-55);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();
    }
}

class Spike4 {
    draw(pCtx) {
        pCtx.beginPath();
        pCtx.fillStyle = '#F4F1C9';
        pCtx.strokeStyle = '#F4F1C9';
        pCtx.moveTo(-55, -5);
        pCtx.lineTo(-85,-25);
        pCtx.lineTo(-45,-35);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();
    }
}