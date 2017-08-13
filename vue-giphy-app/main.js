function setGamepic(){
    let gif = document.getElementById("game-gif");
    gif.src = "zelda-bow.jpg";
}

function getGamegifs(){
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=the%20legend%20of%20zelda&api_key=YOUR-API-KEY-HERE=10",
    }).done(function(content) {
        console.log(content.data);
        gifURL = content.data[Math.floor(Math.random()*10)].images.fixed_width.url;
        let gif = document.getElementById("game-gif");
        gif.src = gifURL;
    });
}

let app = new Vue({
    el: "#app", 
    data: {
        message:  "The legend of Zelda Breath of the Wild released March 7th 2017",
        showGame: true,
        showGif: false
    }, 
    methods:{
        toggle: function(num){
            if(num === 1){
                this.message = "The legend of Zelda Breath of the Wild released March 7th 2017";
                this.showGame = !this.showGame;
                this.showGif = !this.showGif;
                setGamepic();
            }else if (num === 2){
                this.showGame = !this.showGame;
                this.showGif = !this.showGif;
                data = getGamegifs();
                this.message = "The game is amazing isn't it?";
            }
        }
    }
});