let card = [{
    photo: "sketchbook.jpg",
    name: "Скетчбук акварельный",
    brandName: "Malevich",
    price: 20.55,
    currency: "руб.", 
},
{
    photo: "markers.png",
    name: "Маркеры для рисования",
    brandName: "Touch Raven",
    price: 35.04,
    currency: "руб.",
},
{ 
    photo: "fabercastell.jpg",
    name: "Карандаши для рисования",
    brandName: "Faber Castell",
    price: 100.95,
    currency: "руб.",
}
]
    

   let s = "";

    for (i=0; i<card.length; i++){
  
    s += 
    `<div class="cards">
            <div class="prodCard">
                <div class="prodPhoto"><img src="images/${card[i].photo}" alt=""></div><br>
                <div class="title1">${card[i].name}
                    <div class="title2">${card[i].brandName}</div>
                </div>
            <div class="prodPrice">${card[i].price} ${card[i].currency}</div>
            </div>
        <br>
        <p><a href="#">Мои покупки</a></p>
        <br>
    </div>`;

    }

    myCard.innerHTML = s;


   

  
