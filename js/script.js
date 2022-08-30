// varaibles sitting
//price
let price = document.querySelector(".price");
let nbPrice = parseFloat(price.innerText);
console.log(nbPrice);

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

addtocard.onclick = function(){

    notification.style.display='block';  
    ntf = nb;
    notification.innerHTML = ntf;

}

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





btn.onclick = function()
{
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
                imspro.src='images/image-product-1.jpg';
                imag.appendChild(imspro);
                //pric ele
                let yourpric = document.createElement("div"); 
                yourpric.className=('yourpric')
                let p1 = document.createElement("p");
                let p1text =document.createTextNode('aaaaaaaaaaaaa');
                p1.appendChild(p1text);
    
                let p2 = document.createElement("p");
                let p2text =document.createTextNode('aaaaaaaaaaaaa');
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