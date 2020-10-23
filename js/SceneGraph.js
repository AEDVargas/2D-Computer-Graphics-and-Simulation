class SceneGraphNode {
    constructor(localtransformation) {
    this.mChildren = [];
    this.setlocalTransformationMatrix(localtransformation);
    }
    setlocalTransformationMatrix(localtransformation) {
        this.localtransformation = localtransformation;
    }
    getlocalTransformationMatrix() {
        return this.localtransformation;
    }
    getNumberOfChildren() {
        return this.mChildren.length;
    }
    getChildAt(index) {
        return this.mChildren[index];
    }
    addChild(child) {
        this.mChildren.push(child);
    }
    draw(pContext, pMatrix) {
        var newTransformMatrix = pMatrix.multiply(this.getlocalTransformationMatrix());
        newTransformMatrix.setTransform(pContext);

        for(var i = 0; i < this.getNumberOfChildren(); i += 1) {
            this.getChildAt([i]).draw(pContext, newTransformMatrix);
        }
        pMatrix.setTransform(pContext)
    }

}