// function buttonClick(){
//     console.log("button is clicked");
// }  
// {using onclcilick in html}
// -----------------------------------------------

// var button = document.getElementById('button');
// button.addEventListener('click' , buttonClick);
// function buttonClick(e){
//         // console.log("button is clicked");
//         // document.getElementById('header-title').textContent = 'changed';
//         // document.querySelector('#main').style.backgroundColor ='orange';
//         console.log(e.target);


// }

// ---------------------------------------------------
var box = document.getElementById('box');
box.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);

    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}

 