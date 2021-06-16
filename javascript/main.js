let toggleNavStatus = false;
let togglenav =  function(){
    let getSideBar = document.querySelector(".side-menu");
    let getSideBarUl = document.querySelector(".side-menu ul");
    let getSideBarA = document.querySelectorAll(".side-menu a");
    let getSideBarp = document.querySelector(".side-menu p");
    let getSideBarTitle = document.querySelector(".side-menu span"); 

    if(toggleNavStatus ===false){
        getSideBarUl.style.visibility = "visible";
        getSideBar.style.width = " 100%";
        getSideBar.style.left= " 0px";
        getSideBar.style.background = " rgb(111, 78, 55)"
        getSideBarTitle.style.opacity = ".7";

        let loopLenght = getSideBarA.length;
        for (let li = 0; li < loopLenght; li++) {
            getSideBarA[li].style.opacity = "1";
            
        }
        toggleNavStatus =true; 
       

    } else if(toggleNavStatus === true){
        getSideBar.style.width = " 0px";
        getSideBar.style.background = " none";
        getSideBarTitle.style.opacity = "0";
        let loopLenght = getSideBarA.length;
        for (let li = 0; li < loopLenght; li++) {
            getSideBarA[li].style.opacity = "1";
            
        }
        
        getSideBarUl.style.visibility = "hidden";
        toggleNavStatus =false; 
    }
}

// slide show
var slides = document.querySelectorAll('.slide');
        var slidesBtns = document.querySelectorAll('.slide-btn');
            let currentImg = 1;
        //for images slider by navi..
    
        var manualNav = function(namual) {
    
            slides.forEach((slide) =>{
                slide.classList.remove('active');
    
    
                slidesBtns.forEach((btn) =>{
                    btn.classList.remove('active');
                }) ;
            });
    
            slides[namual].classList.add('active');
            slidesBtns[namual].classList.add('active');
            
            
        }
        slidesBtns.forEach((btn, i) =>{
            btn.addEventListener("click", () =>{
                manualNav(i);
                currentImg = i;
            });
        });
        // auto play
        var repeat = function(activeClass){
            let active = document.getElementsByClassName('active');
            let i =1;
    
            var repeater = () =>{
                setTimeout(function(){
                    // removing auto active
                    [...active].forEach((activeSlide) =>{
                        activeSlide.classList.remove('active')
                    })
                    //adding active
                    slides[i].classList.add('active');
                    slidesBtns[i].classList.add('active');
                    i++;
    
                    if(slides.length == i){
                        i =0;
    
                    }
                    if(i >= slides.length){
                        return;
                    }
                    repeater();
                } ,3000);
            }
            repeater();
        }
        repeat();


        // time out 

        var newEvents = setInterval(myTimer, 1000);

        function myTimer() {
        var d = new Date();
        document.getElementById("eventsTime").innerHTML = d.toLocaleTimeString();
        document.getElementById("eventsTime1").innerHTML = d.toLocaleTimeString();
        document.getElementById("eventsTime2").innerHTML = d.toLocaleTimeString();
        }

        // diplaying search box
       