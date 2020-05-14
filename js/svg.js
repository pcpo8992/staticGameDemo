// 設定文字
let str = '你覺得會判刑多重？(請將刑度連到酒駕區塊)';

// 文字起始值
let strIndex = 0;

// Get the <span> element that closes the modal
let rightclose = document.getElementById("rightclose");
let modalBtn = document.querySelectorAll(".modal-content");

for(var j =0; j < modalBtn.length;j++){
    modalBtn[j].addEventListener('click',function(){
    document.getElementById("static").style.display = "none";
    });
}

// When the user clicks on <span> (x), close the modal
rightclose.onclick = function() {
    var modal = document.getElementById("static");
    modal.style.display = "none";
};

window.onclick = function(event) {
    var static = document.getElementById("static");
    if (event.target == static) {
        static.style.display = "none";
    }
}

// svg設定
let setting = { 
    color: '#f06', 
    width: 1, 
    linecap: 'round'
 };

 let setting2 = { 
    color: 'blue', 
    width: 1, 
    linecap: 'round'
 };

// 座標點
 let objSite = {
    a:{
        number: 1,
        pointX: 82
    },
    b:{
        number: 2,
        pointX: 187
    },
    c:{
        number: 3,
        pointX: 292
    },
    d:{
        number: 4,
        pointX: 397
    },
    e:{
        number: 5,
        pointX: 502
    },
    f:{
        number: 6,
        pointX: 607
    },
}

var ctx = document.getElementById('Chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['103年', '104年', '105年', '106年', '107年', '108年'],
        datasets: [{
            label: '一般酒駕平均刑度',
            data: [3.2, 3.2, 3.2, 3.2, 3.2, 3.2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderWidth: 1
        },{
            label: '酒駕致死或至致傷平均刑度',
            data: [21.7, 26.1, 26.6, 26.1, 31.3, 32.8],
            backgroundColor: [
                'rgba(61, 134, 191, 0.2)'
            ],
            borderColor: [
                'rgba(61, 134, 191, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: false,
    }
});


let draw = SVG().addTo('div.pic').size(700, 300);
for(let i = 0; i <=5; i++){
    // draw pink square
    draw.rect(6, 6).move(80 + i * 105, 5).fill('#f06');
}
    
draw.rect(6, 6).move(210, 188).fill('#f06');
draw.rect(6, 6).move(480, 188).fill('blue');




let img = document.querySelectorAll("#middle img");
img.forEach(item => item.addEventListener('click', function(){
    let class_num = this.classList.length;
    hideBtn('.alert');
    thisId = this.dataset.id;
    if(class_num > 0 ){
        this.removeAttribute('class', 'circle this animated rotateIn');
    }else{
        this.setAttribute('class', 'circle this animated rotateIn');
    }
    let imgBtn = document.querySelectorAll("#middle img");
    let imgBtnLength = imgBtn.length;
    for(let i = 0; i < imgBtnLength; i++){
        if(imgBtn[i].dataset.id !== thisId){
            imgBtn[i].removeAttribute('class', 'circle this animated rotateIn');
        }
    }
}));

let btnGame = document.querySelectorAll(".btn-game");
btnGame.forEach(item => item.addEventListener('click', function(){
    let this1 = document.querySelector(".this");
    let dataItem = this.dataset.item;
    if(this1 && dataItem == '1'){
        let target_id = document.querySelector('.this').dataset.id;
        draw.line(objSite[target_id].pointX, 8, 212, 188).animate().stroke(setting);
        this1.removeAttribute('class', 'circle this animated rotateIn');
        document.querySelector(".send").setAttribute("style", "display: flex;");
    }else if(this1 && dataItem == '2'){
        let target_id = document.querySelector('.this').dataset.id;
        draw.line(objSite[target_id].pointX, 10, 483, 188).stroke(setting2);
        this1.removeAttribute('class', 'circle this animated rotateIn'); 
        document.querySelector(".send").setAttribute("style", "display: flex;");       
    }else{
        document.querySelector('.alert').setAttribute("style", "display:block");
    }

}));

function typing() {
    let divTyping = document.getElementById('typing1');
    if (strIndex <= str.length) {
        divTyping.innerHTML = str.slice(0, strIndex++) + '_';
        setTimeout('typing()', 150); //遞歸調用
        let people = document.querySelector(".left img");
        if (strIndex >= 2 && strIndex <= 5) {
            people.src = "../image/lin3.png";
        } else if (strIndex > 2 && strIndex % 2 == 0) {
            people.src = "../image/lin4.png";
        } else if (strIndex > 2 && strIndex % 2 == 1) {
            people.src = "../image/lin5.png";
        }
    } else {
        divTyping.innerHTML = str; //結束打字,移除 _ 光標
    }
}


function showGame() {
    showBtn(".question1", 'flex');
    hideBtn(".img");
    typing();
    var audio = document.querySelector("audio");
    audio.play();
}


function reDraw(){
    showBtn(".picAnswer", 'flex');
    showBtn("#middle2", 'block');
    showBtn("#question2", 'flex');
    showBtn(".alert2", 'flex');
    hideBtn(".pic");
    hideBtn(".sendbtn");
    hideBtn("#middle");
    hideBtn("#question1");

    let draw = SVG().addTo('div.picAnswer').size(700, 200);
    for(let i = 0; i <=5; i++){
        // draw pink square
        draw.rect(6, 6).move(80 + i * 105, 5).fill('#f06');
    }
    draw.rect(6, 6).move(210, 188).fill('#f06');
    draw.rect(6, 6).move(480, 188).fill('blue');
    
    for (item in objSite){
        draw.line(objSite[item].pointX, 8, 212, 188).stroke(setting);
        if(item !== 'a'){
            draw.line(objSite[item].pointX, 10, 483, 188).stroke(setting2);
        }   
    }
}

function showBtn(element, style){
    document.querySelector(element).setAttribute("style", "display:" + style + ";");
}


function hideBtn(element){
    document.querySelector(element).setAttribute("style", "display: none;");
}

function showStatic(){
    showBtn('#static');
}