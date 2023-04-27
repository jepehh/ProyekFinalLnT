function toggleExplanation1(){
    var explanation = document.getElementById('explanation1');

    if(explanation.style.display == "none"){
        explanation.style.display = "block";
    } else{
        explanation.style.display = "none";
    }
}

function toggleExplanation2(){
    var explanation = document.getElementById('explanation2');

    if(explanation.style.display == "none"){
        explanation.style.display = "block";
    } else{
        explanation.style.display = "none";
    }
}

function toggleExplanation3(){
    var explanation = document.getElementById('explanation3');

    if(explanation.style.display == "none"){
        explanation.style.display = "block";
    } else{
        explanation.style.display = "none";
    }
}

function toggleExplanation4(){
    var explanation = document.getElementById('explanation4');

    if(explanation.style.display == "none"){
        explanation.style.display = "block";
    } else{
        explanation.style.display = "none";
    }
}

function toggleExplanation5(){
    var explanation = document.getElementById('explanation5');

    if(explanation.style.display == "none"){
        explanation.style.display = "block";
    } else{
        explanation.style.display = "none";
    }
}

const myLink = document.getElementById("myLink");
const myLink1 = document.getElementById("myLink1");
const myLink2 = document.getElementById("myLink2");
const myLink3 = document.getElementById("myLink3");
const myLink4 = document.getElementById("myLink4");

myLink.addEventListener("click", function(){
    myLink.classList.toggle("active");
});

myLink1.addEventListener("click", function(){
    myLink1.classList.toggle("active");
});

myLink2.addEventListener("click", function(){
    myLink2.classList.toggle("active");
});

myLink3.addEventListener("click", function(){
    myLink3.classList.toggle("active");
});

myLink4.addEventListener("click", function(){
    myLink4.classList.toggle("active");
});