const color_Btn=document.querySelectorAll('.color');
color_Btn.forEach(color => {
    color.addEventListener('click',() =>{
       

        let colorNameClass=color.className;
        if(!color.classList.contains('active-color'))
        {
           
            let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);  //slice will return something from array
            resetActiveBtns();  //without this we cant click the color button multiple times
            color.classList.add('active-color');
            setNewColor(colorName);
        }
    });
})




//reset all color btn  WITHOUT resetting the button we cant click the colors multiple times

function resetActiveBtns()
{
    color_Btn.forEach(color =>{
       color.classList.remove('active-color');
    });
}



//set new color to images

function setNewColor(color)
{
   // document.querySelector('.Section-left img').src=`../Images/tshirt_${color}.png`;
   document.querySelector('.Section-left img').src=`./assets/Images/tshirt_${color}.png`;
}