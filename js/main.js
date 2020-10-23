// the window load event handler
function onLoad() {
    var mainCanvas, mainContext, worldMatrix, sunNode, houseNode, house, sun, ball, ballNode, miniHouse;
    var backgroundSprite = new Image();
    var carLeft = new Image();
    var carRight = new Image();

    //starSprite variables
    var star = new Image();
    var srcX; var srcY;
    var sheetWidth = 150;
    var col = 3;
    var frameWidth = sheetWidth / col;
    var starLocationX;
    var starLocationY;
    var currentFrame = 0;
    var counter = 5;

    //carSprite variables
    var carSpeed = 800;
    var carSpeed2 = -250;

    //multiple house variables
    var houseLocation = [150, 240, 475, 565, 835];
    var sceneHouses = [];

    //physics variables
    var rotationSpeed = 1;
    var deltaTime;
    var gravity = 1;
    var friction = 0.95;
    var lastTime = Date.now();
    var x = 250; var y = 50; var dx = 5; var dy = 5;
    var x2 = 100; var y2 = 0; var dx2 = 5; var dy2 = 5;
    var colourChanger = '#ffffff';

    function initialiseCanvasContext() {
        mainCanvas = document.getElementById('mainCanvas');
        if (!mainCanvas) {
            return;
        }
        mainContext = mainCanvas.getContext('2d');
        if (!mainContext) {
            alert('Error: failed to get context!');
            return;
        }

        worldMatrix = Matrix.createTranslation(new Vector(mainCanvas.width / 2, mainCanvas.height / 2, 1));
        worldMatrix.setTransform(mainContext);

        backgroundSprite.src = 'css/BG.png';
        carLeft.src = 'css/carSprite.png';
        carRight.src = 'css/carSpriteFlipped.png';
        star.src = 'css/StarSprite.png';

        miniHouse = new MiniHouse(new Vector(600, 300, 1));

        house = new House(new Vector(0, 0, 1), 0, new Vector(1, 1, 1));
        sun = new Sun(new Vector(0, 0, 1), 0, new Vector(2, 2, 1));
        ball = new Ball(new Vector(0, 0, 1), 0, new Vector(1, 1, 1));

        starLocationX = Math.floor(Math.random() * (700 - 100 + 1) + 100);
        starLocationY = Math.floor(Math.random() * (300 - 50 + 1) + 50);
        posY = Math.floor(Math.random() * (300 - 0 + 1) + 0); // (max - min + 1) + min

        houseNode = new SceneGraphNode(Matrix.createTranslation(new Vector(450, 100, 1)));
        houseNode.addChild(house.getRootSGN());

        for (var count = 0; count < 10; count++) {
            var random = houseLocation[Math.floor(Math.random() * houseLocation.length)];
            sceneHouses.push(new House(new Vector(random, 250, 1), 0, new Vector(0.5, 0.5, 1)));
        }

    }

    //Changing the frames between the single png file 
    function updateFrame() {
        currentFrame = ++currentFrame % col;

        srcX = currentFrame * frameWidth;
        srcY = 0;
    }

    //Animated star sprite read from a single png file and loading it into a random location in the canvas.
    function drawStarSprite() {
        if (counter == 50) {

            updateFrame();
            mainContext.drawImage(star, srcX, srcY, frameWidth, 50, starLocationX, starLocationY, 50, 50);
            counter = 5;
        }
        else {
            mainContext.drawImage(star, srcX, srcY, frameWidth, 50, starLocationX, starLocationY, 50, 50);
            counter++;
        }
    }
    
    //Random colour changer to generate a randomer colour for another response to collision detection
    function RandomColourChanger() {
        var lettersList = '0123456789ABCDEF';
        var colourInit = '#';
        for (var i = 0; i < 6; i++) {
            colourInit += lettersList[Math.floor(Math.random() * 16)];
        }
        return colourInit;
    }

    //Update function to update any changes to the objects
    function update(deltaTime) {
        rotationSpeed += 0.1;

        var distanceX = x - x2;
        var distanceY = y - y2;
        var radiusSum = 50 + 20;

        //Collision detection and response for Scenegraph ball
        if (x + dx < 50 || x + dx > mainCanvas.width - 50) {
            dx = -dx * 0.85;
        }
        if (y + dy < 50 || y + dy > backgroundSprite.height * 2.59 - 50) {
            dy = -dy * friction;
        }
        else {
            dy += gravity;
        }

        //Collision detection and response for simple ball

        if (x2 + dx2 < 0 || x2 + dx2 > mainCanvas.width - 15) {
            dx2 = -dx2;
            colourChanger = RandomColourChanger();
        } if (y2 + dy2 < 0 || y2 + dy2 > backgroundSprite.height * 2.59 - 15) {
            dy2 = -dy2;
            colourChanger = RandomColourChanger();
        }

        //Collision detection and response between both balls
        if (distanceX * distanceX + distanceY * distanceY <= radiusSum * radiusSum) {
            dx = -dx;
            dy = -dy;
            dx2 = -dx2;
            dy2 = -dy2;

            colourChanger = RandomColourChanger();
        }

        x += (dx * deltaTime);
        y += (dy * deltaTime);
        x2 += (dx2 * deltaTime);
        y2 += (dy2 * deltaTime);

    }


    function draw() {

        mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);


        mainContext.fillStyle = '#ffffff';
        mainContext.fillRect(0, 0, 1000, 1000);

        mainContext.fillStyle = '#84857C';
        mainContext.fillRect(0, 350, 1000, 300);

        mainContext.drawImage(backgroundSprite, 0, 0, backgroundSprite.width * 3.35, backgroundSprite.height * 2.59);

        mainContext.fillStyle = '#606060';
        mainContext.fillRect(0, 450, 800, 85);

        mainContext.fillStyle = '#808080';
        mainContext.fillRect(0, 450, 800, 75);

        carSpeed2 += 2;
        mainContext.drawImage(carRight, carSpeed2, 410, carRight.width / 2, carRight.height / 2);


        if (carSpeed2 > 700) {
            mainContext.drawImage(carLeft, carSpeed, 445, carLeft.width / 2, carLeft.height / 2);
            carSpeed -= 2;
        }

        for (var delaySpeed = 0; delaySpeed < 3; delaySpeed++) {
            drawStarSprite();
        }
        sunNode = new SceneGraphNode(Matrix.createRotation(rotationSpeed));
        sunNode.addChild(sun.getRootSGN2());
        sunNode.draw(mainContext, Matrix.createIdentity());

        mainContext.beginPath();
        mainContext.fillStyle = colourChanger;
        mainContext.arc(x2, y2, 15, 0, Math.PI * 2, true);
        mainContext.closePath();
        mainContext.fill();

        ballNode = new SceneGraphNode(Matrix.createTranslation(new Vector(x, y, 1)));
        ballNode.addChild(ball.getRootSGN());
        ballNode.draw(mainContext, Matrix.createIdentity());

        for (var i = 0; i < sceneHouses.length; i++) {
            sceneHouses[i].draw(mainContext, Matrix.createIdentity());
        }

        
        houseNode.draw(mainContext, Matrix.createIdentity());
        miniHouse.draw(mainContext);

    }

    function animationLoop() {

        var thisTime = Date.now();
        deltaTime = (thisTime - lastTime) / 10;

        draw();
        update(deltaTime);

        lastTime = thisTime;
        requestAnimationFrame(animationLoop);
    }



    initialiseCanvasContext();
    animationLoop();
    draw();
}
window.addEventListener('load', onLoad, false);