class Ball {
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

    initialiseSceneGraph() {
        var ball = new ballbody();

        var nodeTranslation = Matrix.createTranslation(this.position);
        var rootNode = new SceneGraphNode(nodeTranslation);
        this.setRootSGN(rootNode);

        var nodeRotation = Matrix.createRotation(this.angle);
        var rotateNode = new SceneGraphNode(nodeRotation);
        rootNode.addChild(rotateNode);

        var nodeScale = Matrix.createScale(this.scale);
        var scaleNode = new SceneGraphNode(nodeScale);
        rotateNode.addChild(scaleNode);

        scaleNode.addChild(ball);
    }
    draw(pCtx, pMatrix) {
        this.getRootSGN().draw(pCtx, pMatrix);
    }
}

class ballbody {
    draw(pCtx) {

        pCtx.beginPath();
        pCtx.fillStyle = '#F5F3CE';
        pCtx.strokeStyle = '#F5F3CE';
        pCtx.arc(0, 0, 50, 0, Math.PI * 2, true);
        pCtx.closePath();
        pCtx.fill();
        pCtx.stroke();

        
    }
}
