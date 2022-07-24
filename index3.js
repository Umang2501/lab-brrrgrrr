let bill=0, topprice=50, bunprice=50, lettuceprice=60, cheeseprice=40, pattyprice=80, tomatoprice=50, onionprice=50;
function A(li, img, price){
    document.querySelector('ol').appendChild(li);
    document.querySelector('#id2').appendChild(img);
    bill+=price;
    document.getElementById('bill').innerHTML=bill;
}
function B(li, img, price){
    document.querySelector('ol').removeChild(li);
    document.querySelector('#id2').removeChild(img);
    bill-=price;
    document.getElementById('bill').innerHTML=bill;
}

document.getElementById('btnid1').addEventListener('click',function(){
    let li1=document.createElement('li');
    let img1=document.createElement('img');
    li1.innerHTML='Top';
    img1.src='img\Burger\Top@2x.png';
    A(li1,img1,topprice);
    document.getElementById('btnid11').addEventListener('click',function(){
    B(li1,img1,topprice);
})
})
document.getElementById('btnid2').addEventListener('click',function(){
    let li1=document.createElement('li');
    let img1=document.createElement('img');
    li1.innerHTML='Lettuce';
    img1.src='img\Burger\Lettuce@2x.png';
    A(li1,img1,lettuceprice);
    document.getElementById('btnid22').addEventListener('click',function(){
    B(li1,img1,lettuceprice);
})
})
document.getElementById('btnid3').addEventListener('click',function(){
    let li1=document.createElement('li');
    let img1=document.createElement('img');
    li1.innerHTML='Cheese';
    img1.src='img\Burger\Cheese@2x.png';
    A(li1,img1,cheeseprice);
    document.getElementById('btnid33').addEventListener('click',function(){
    B(li1,img1,cheeseprice);
})
})
document.getElementById('btnid4').addEventListener('click',function(){
    let li1=document.createElement('li');
    let img1=document.createElement('img');
    li1.innerHTML='Patty';
    img1.src='img\Burger\Patty@2x.png';
    A(li1,img1,pattyprice);
    document.getElementById('btnid44').addEventListener('click',function(){
    B(li1,img1,pattyprice);
})
})
document.getElementById('btnid5').addEventListener('click',function(){
    let li1=document.createElement('li');
    let img1=document.createElement('img');
    li1.innerHTML='Tomato';
    img1.src='img\Burger\Tomato@2x.png';
    A(li1,img1,tomatoprice);
    document.getElementById('btnid55').addEventListener('click',function(){
    B(li1,img1,tomatoprice);
})
})
document.getElementById('btnid6').addEventListener('click',function(){
    let li1=document.createElement('li');
    let img1=document.createElement('img');
    li1.innerHTML='Onion';
    img1.src='img\Burger\Onion@2x.png';
    A(li1,img1,onionprice);
    document.getElementById('btnid66').addEventListener('click',function(){
    B(li1,img1,tomatoprice);
})
})
document.getElementById('btnid7').addEventListener('click',function(){
    let li1=document.createElement('li');
    let img1=document.createElement('img');
    li1.innerHTML='Bun';
    img1.src='img\Burger\Bun 1@2x.png';
    A(li1,img1,bunprice);
    document.getElementById('btnid77').addEventListener('click',function(){
    B(li1,img1,bunprice);
})
})
document.getElementById('bill').innerHTML=bill;