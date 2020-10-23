class Vector {
    constructor(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);

    }
    //getting and setting the values for all X, Y, Z vectors.
    getX() {
        return this.mX;
    }
    setX(pX) {
        this.mX = pX;
    }
    getY() {
        return this.mY;
    }
    setY(pY) {
        this.mY = pY;
    }
    getZ() {
        return this.mZ;
    }
    setZ(pZ) {
        this.mZ = pZ;
    }
    add(pVector) {
        return new Vector(this.getX() + pVector.getX(), this.getY() + pVector.getY(), this.getZ() + pVector.getZ()); 
    }
    subtract(pVector) {
        return new Vector(this.getX() - pVector.getX(), this.getY() - pVector.getY(), this.getZ() - pVector.getZ());
    }
    multiply(pScalar) {
        return new Vector(this.getX() * pScalar, this.getY() * pScalar, this.getZ() * pScalar);
    }
    divide(pScalar) {
        return new Vector(this.getX() / pScalar, this.getY() / pScalar, this.getZ() / pScalar);
    }
    magnitude() {
        return (Math.sqrt(this.getX() * this.getX() + this.getY() * this.getY() + this.getZ() * this.getZ()));
    }
    normalise() {
        var magnitude = (Math.sqrt(this.getX() * this.getX() + this.getY() * this.getY() + this.getZ() * this.getZ()));
        return new Vector(this.getX() / magnitude, this.getY() / magnitude, this.getZ() / magnitude);
    }
    limitTo(pScalar) {
        if(this.magnitude > pScalar) {
            return new Vector(this.getX(), this.getY(), this.getZ());
        } else {
            return this.normalise().multiply(Math.min(this.magnitude(), pScalar));
        }
    }
    dotProduct(pVector) {

        return this.getX()*pVector.getX() + this.getY()*pVector.getY();
    }
    interpolate(pVector, pScalar) {

        return new Vector(this.getX() + (pVector.getX() - this.getX()) * pScalar, this.getY() + (pVector.getY() - this.getY()) * pScalar);
        
    }
    rotate(pScalar) {
        
        return new Vector(Math.cos(pScalar) * this.getX() - Math.sin(pScalar) * this.getY(),
         Math.sin(pScalar) * this.getX() + Math.cos(pScalar) * this.getY());
    }
    angleBetween(pVector) {

        return (Math.acos(pVector.getZ() / pVector.getX() * pVector.getY()));
    }

}