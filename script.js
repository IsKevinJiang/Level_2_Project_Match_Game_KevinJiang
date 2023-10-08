let score = 0;
let guess = 0;
let previous_img = "";

function initialize() {
    user_score = document.getElementById("score");
    instruction = document.getElementById("instructions");
}
function reset(image) {
    document.getElementById(image).src = "Unknown.jpg";
}

function reveal(image) {
    guess++;
    score++;
    let picture = image.substring(0,5);
    if (image === previous_img) {
        guess--;
        score--;
    }
    else {
    if (guess === 2 && image !== previous_img){ 
        if (picture === previous_img.substring(0,5)) {
            document.getElementById(picture + "_1").src = `${picture}.jpg`;
            document.getElementById(picture + "_2").src = `${picture}.jpg`;
        }
        else {
            document.getElementById(image).src = image.substring(0,5) + ".jpg";
            setTimeout(reset,1000,previous_img)
            setTimeout(reset,1000,image);
        }
        guess = 0;
    }
    else {
        previous_img = image;
        document.getElementById(image).src = `${picture}.jpg`;
    }
    if (score >= 1) {
        comments();
    }
}
user_score.innerHTML = "Score: " + score;
}

const resetAll = () => {
    for (let i = 1; i < 9; i++){
        for (let j = 1; j < 3; j++) {
            reset("IMG_" + i + "_" + j);
        }
    }
    score = 0;
    user_score.innerHTML = "Score: 0";
    instruction.innerHTML = "Instructions: Click on the unknown images to reveal and match the pictures. Lowest Score Wins.";
}

function comments() {
    (score > 25) ? instruction.innerHTML = "You'll get it soon..." : (score > 16) ? instruction.innerHTML = "No more perfect score!" : instruction.innerHTML = "Good Luck on this Children's Game";
}