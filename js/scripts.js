
function startslide(delaySlide) {

    if (delaySlide === undefined) {
        //console.info("время смены слайда по умолчанию");
        delaySlide = 4;
    }

    //console.info("startslide");
    

    
    ff = function () {
        allInputs = Array.from(document.querySelectorAll(".main > input"));
        //console.info(allInputs);
        for (var index = 0; index < allInputs.length; index++) {
            var element = allInputs[index];
            if(allInputs[index].checked) {
                allInputs[index].checked = false;
                if(index+1 != allInputs.length) {
                    allInputs[index+1].checked = true;
                } else {
                    allInputs[0].checked = true;
                }
                break;
            }
        }    
    };

   setInterval(ff, delaySlide*1000);



    

}