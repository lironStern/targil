
const element = document.getElementById("marking-icon");


element.addEventListener("click", function() {

    let srcImage = document.getElementById("marking-icon").src.split("/").pop().split(".")[0]

    if (srcImage==="Path_416") {    
        document.getElementById('marking-icon').src  = '/images/Path_415.svg';
    }
     else {
       document.getElementById('marking-icon').src = '/images/Path_416.svg';
   }
});



window.addEventListener("load", (event) => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0];

    for(i=1; i< arr.length; i++){
        arr[0] = Math.floor(Math.random() * 100) + 1;
        document.getElementById('randomNumber-' + i).innerHTML=arr[0];
    }
  });


const moreText = (num) => {

    document.getElementById("more-text-"+num).style.display = 'block';
    document.getElementById("more-"+num).style.display = 'none';

    
};

 

const lessText = (num) => {

    document.getElementById("more-text-"+num).style.display = 'none';
    document.getElementById("more-"+num).style.display = 'block';

    
};

let flag = 1
const addRemoveLike = (num) => {

    let numLike = document.getElementById('randomNumber-' + num).innerHTML;
    numLike = flag === 1 ? +numLike+1 : +numLike-1;
    document.getElementById('randomNumber-' + num).innerHTML=numLike;
    flag = flag === 1 ? +flag-1 : +flag + 1;


}

