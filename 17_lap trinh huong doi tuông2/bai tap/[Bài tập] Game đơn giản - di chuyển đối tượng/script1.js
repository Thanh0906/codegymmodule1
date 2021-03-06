function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += 200;
        console.log('ok: ' + this.left);
    };
    this.moveDown = function(){
        this.top += 200;
        console.log('ok: ' + this.top);
    };
    this.moveUp = function(){
        this.top -= 500;
        console.log('ok: ' + this.left);
    };
    this.moveLeft = function(){
        this.left -= 1200;
        console.log('ok: ' + this.right);
    }

}

var hero = new Hero('anime1.png', 20, 30, 200);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveRight();
    } else if (hero.left > window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    } else if (hero.left > window.innerWidth - hero.size && hero.top > window.innerHeight - hero.size) {
        hero.moveLeft();
    } else if (hero.left < window.innerWidth - hero.size && hero.top > window.innerHeight - hero.size) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 600)
}
start();