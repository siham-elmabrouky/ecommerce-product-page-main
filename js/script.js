// varaibles sitting
//price
let price = document.querySelector(".price");
let nbPrice = parseFloat(price.innerText);

 
// console.log(nbPrice);

// calc
let mins = document.querySelector('.mins');
let plus = document.querySelector('.plus');
let numberproduct = document.querySelector('.zero');
let nb = parseInt(numberproduct.innerText);
//cart element
let cartcontainer = document.querySelector('.cartcontent');
let btn = document.querySelector('.btn');
//notification
let notification = document.querySelector('.notification')
let ntf = parseInt(notification.innerText);
//add to cart
let addtocard = document.querySelector('.addtocard');
//total price 
 


 
 
 

// }

// console.log(ntf);
// if(ntf!==0){
//     notification.style.display='block';   
// }
plus.onclick = function(){
    nb++;
    numberproduct.innerHTML = nb;
}
mins.onclick = function(){
    if(nb !==0){
        nb--;
        numberproduct.innerHTML = nb;
    }
 
}





// lin lsit
let menu = document.querySelector('.menu');
let menu1 = document.querySelector('.menu1');
let listlink = document.querySelector('.listlink');
menu.onclick= function(){
   menu.style.display='block'
    listlink.style.display='block'
   menu1.style.display='block'  

};
menu1.onclick= function(){
    menu.style.display='block'
     listlink.style.display='none'
    menu1.style.display='none'  
 
 };
//  change src img 
let mainimg = document.querySelector('.mainimg');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
img1.onclick = function(){
    mainimg.src ='images/image-product-1.jpg';
}
img2.onclick = function(){
    mainimg.src ='images/image-product-2.jpg';
}
img3.onclick = function(){
    mainimg.src ='images/image-product-3.jpg';
}
img4.onclick = function(){
    mainimg.src ='images/image-product-4.jpg';
}

// slide for version mobile








 


  addtocard.onclick = function()
{

    if(nb !==0){
        ntf = nb;
        notification.innerHTML = ntf;
     
        notification.style.display='block';  
      }
     
    ///empty
    if(ntf === 0){
        
  
        cartcontainer.style.display='block'
        let cart1 = document.createElement("span");
        let cart1text = document.createTextNode('cart');
        cart1.className='cart1';
        cart1.appendChild(cart1text);

        let pempty = document.createElement("p");
        let pemptytext = document.createTextNode('your cart empty');
        pempty.className='empty';
        pempty.appendChild(pemptytext);
        pempty.style.display='block'

        cartcontainer.appendChild(cart1);
        cartcontainer.appendChild(pempty);
       

    }else{

        cartcontainer.style.display='block'
        console.log('hi dev siham');

        let cart1 = document.createElement("span");
        let cart1text = document.createTextNode('cart');
        cart1.className='cart1';
        cart1.appendChild(cart1text);
            //notempty
                let notempty = document.createElement("div");
                notempty.className='notempty';
                //imagele
                let imag = document.createElement("div");
                let imspro = document.createElement("img");
                imspro.src= mainimg;
                imag.appendChild(imspro);
                //pric ele
                let yourpric = document.createElement("div"); 
                yourpric.className=('yourpric')
                let p1 = document.createElement("p");
                let p1text =document.createTextNode('aaaaaaaaaaaaa');
                p1.appendChild(p1text);
    
                let p2 = document.createElement("p");
                let p2text =document.createTextNode(`${nbPrice} x ${ntf}`);
                p2.appendChild(p2text);  
    
                yourpric.appendChild(p1);
                yourpric.appendChild(p2);
                    //suupp ele
                    let supp= document.createElement("div");
                    let icondelet =document.createElement('i');
                    icondelet.classList='fa fa-trash';
                supp.appendChild(icondelet);
        
            notempty.appendChild(imag);
            notempty.appendChild(yourpric);
            notempty.appendChild(supp);
    
            //buttun checkout
            let butcheckout =document.createElement('button');
            let  butcheckouttext =document.createTextNode('checkout');
            butcheckout.appendChild(butcheckouttext);
            butcheckout.className=("checkout");
            notempty.appendChild(butcheckout);
    
        cartcontainer.appendChild(cart1);
        cartcontainer.appendChild(notempty);
    }

   
}














