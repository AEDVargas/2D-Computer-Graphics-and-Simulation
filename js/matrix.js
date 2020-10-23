class Matrix {
    constructor(
            R1C1, R1C2, R1C3,
            R2C1, R2C2, R2C3,
            R3C1, R3C2, R3C3) {
                    
            this.R1C1 = R1C1;
            this.R1C2 = R1C2;
            this.R1C3 = R1C3;

            this.R2C1 = R2C1;
            this.R2C2 = R2C2;
            this.R2C3 = R2C3;

            this.R3C1 = R3C1;
            this.R3C2 = R3C2;
            this.R3C3 = R3C3;


    }
    //array of arrays to define a matrix
    getElement(row, column) {
        var matrix =[ [this.R1C1, this.R1C2, this.R1C3],
                      [this.R2C1, this.R2C2, this.R2C3],
                      [this.R3C1, this.R3C2, this.R3C3]];
    return matrix[row][column];
    }
    //creates a fixed identiy of a matrix.
    static createIdentity() {
        return new Matrix(1,0,0,0,1,0,0,0,1);
    }
    //Creates the translation between vector X and Y.    
    static createTranslation(pVector) {
        return new Matrix(1,0,pVector.getX(),0,1,pVector.getY(),0,0,1);
    }
    //Creates a scale by multiplying the matrix with the corresponding vectors.
    static createScale(pVector) {
        return new Matrix(pVector.getX() * 1, pVector.getY() * 0, pVector.getZ() * 0,
        pVector.getX() * 0, pVector.getY() * 1, pVector.getZ() * 0,
        pVector.getX() * 0, pVector.getY() * 0, pVector.getZ() * 1);
    }
    //Creates a rotation using the simple formula of Math.Cos and Math.Sin taking the Scalar as a Parameter.s
    static createRotation(pScalar) {
        return new Matrix(Math.cos(pScalar), -Math.sin(pScalar), 0,
                        Math.sin(pScalar), Math.cos(pScalar), 0,
                        0, 0, 1);
    }
    //Multiplying every element of the matrix to one another.
    multiply(pMatrix) {
        return new Matrix(
        //Row 1
            this.getElement(0,0) * pMatrix.getElement(0,0) + this.getElement(0,1) * pMatrix.getElement(1,0) + this.getElement(0,2) * pMatrix.getElement(2,0),
            this.getElement(0,0) * pMatrix.getElement(0,1) + this.getElement(0,1) * pMatrix.getElement(1,1) + this.getElement(0,2) * pMatrix.getElement(2,1),
            this.getElement(0,0) * pMatrix.getElement(0,2) + this.getElement(0,1) * pMatrix.getElement(1,2) + this.getElement(0,2) * pMatrix.getElement(2,2),
        //Row 2
            this.getElement(1,0) * pMatrix.getElement(0,0) + this.getElement(1,1) * pMatrix.getElement(1,0) + this.getElement(1,2) * pMatrix.getElement(2,0),
            this.getElement(1,0) * pMatrix.getElement(0,1) + this.getElement(1,1) * pMatrix.getElement(1,1) + this.getElement(1,2) * pMatrix.getElement(2,1),
            this.getElement(1,0) * pMatrix.getElement(0,2) + this.getElement(1,1) * pMatrix.getElement(1,2) + this.getElement(1,2) * pMatrix.getElement(2,2),
        //Row 3
            this.getElement(2,0) * pMatrix.getElement(0,0) + this.getElement(2,1) * pMatrix.getElement(1,0) + this.getElement(2,2) * pMatrix.getElement(2,0),
            this.getElement(2,0) * pMatrix.getElement(0,1) + this.getElement(2,1) * pMatrix.getElement(1,1) + this.getElement(2,2) * pMatrix.getElement(2,1),
            this.getElement(2,0) * pMatrix.getElement(0,2) + this.getElement(2,1) * pMatrix.getElement(1,2) + this.getElement(2,2) * pMatrix.getElement(2,2),

        );
    }
    //Multiplying the elements of the matrxi to the corresponding vectors.
    multiplyVector(pVector) {
        let x, y, z;
        x = (this.getElement(0,0) * pVector.getX()) + (this.getElement(0,1) * pVector.getY()) + (this.getElement(0,2) * pVector.getZ());
        y = (this.getElement(1,0) * pVector.getX()) + (this.getElement(1,1) * pVector.getY()) + (this.getElement(1,2) * pVector.getZ());
        z = (this.getElement(2,0) * pVector.getX()) + (this.getElement(2,1) * pVector.getY()) + (this.getElement(2,2) * pVector.getZ());
        return new Vector(x,y,z);
    }
    //Creates the setTransform function to give the ability to transform a matrix.
    setTransform(pContext) {
        return pContext.setTransform(
            this.R1C1, this.R2C1, this.R1C2,
            this.R2C2, this.R1C3, this.R2C3);
    }
    //Creates the transform function to be able to start the transform of matrix.
    transform(pContext) {
        return pContext.transform(
            this.R1C1, this.R2C1, this.R1C2,
            this.R2C2, this.R1C3, this.R2C3);
    }

}
