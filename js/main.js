// Mobile Navigation Bar
var SideBar = document.querySelector("#side-nav")
var Navbutton=document.querySelector(".fas")
var ButtonBar = document.querySelector("#btn")
SideBar.classList.remove('active-side-nav')
ButtonBar.addEventListener('click', function () {
    if (SideBar.classList.contains('active-side-nav')) {
        SideBar.classList.remove('active-side-nav')
        SideBar.classList.add('inactive-side-nav')
        Navbutton.classList.add('fa-bars')
        Navbutton.classList.remove('fa-xmark')
    }
    else {
        SideBar.classList.add('active-side-nav')
        SideBar.classList.remove('inactive-side-nav')
        Navbutton.classList.remove('fa-bars')
        Navbutton.classList.add('fa-xmark')
        
    }

})

// Changing My career 
var Mycareer = document.querySelector(".web-developer")
var careers = ["Software Engineer", "Web-Developer", "Freelancer"]
careersIndex = 0
careersString = 0
careerUpdate()
function careerUpdate() {
        Mycareer.innerHTML = "I'm " + careers[careersIndex].slice(0, careersString);
        careersString++
        if (careersString === careers[careersIndex].length+1) {
            careersIndex++
            careersString=0
        }
        if(careersIndex===careers.length){
            careersIndex=0
        }
    setTimeout(careerUpdate, 300)
}


// Toggle between intro and skill

var intro=document.querySelector("#intro")
var skill=document.querySelector("#skill")
var introContent=document.querySelector("#introContent")
var SkillContent=document.querySelector("#SkillContent")
intro.addEventListener('click',function(){
    skill.classList.remove('live')
    intro.classList.add('live')
    if (introContent.classList.contains('live')){
        SkillContent.classList .remove('live')
    }
    else{
        introContent.classList.add('live')
        SkillContent.classList .remove('live')
    }
});
skill.addEventListener('click',function(){
    intro.classList.remove('live')
    skill.classList.add('live')
    if (SkillContent.classList.contains('live')){
        introContent.classList .remove('live')
    }
    else{
        introContent.classList.remove('live')
        SkillContent.classList .add('live')
    }
});


// Portfolio Section image pop up

// image 1
var txt1=document.querySelector(".txt1")
var I1=document.querySelector(".i1")

I1.addEventListener('mouseover',function(){
    txt1.classList.add('onmouse')
})
I1.addEventListener('mouseout', function(){
    txt1.classList.remove('onmouse')
})
// image 2
var txt2=document.querySelector(".txt2")
var I2=document.querySelector(".i2")

I2.addEventListener('mouseover',function(){
    txt2.classList.add('onmouse')
})
I2.addEventListener('mouseout', function(){
    txt2.classList.remove('onmouse')
})

// image 3
var txt3=document.querySelector(".txt3")
var I3=document.querySelector(".i3")

I3.addEventListener('mouseover',function(){
    txt3.classList.add('onmouse')
})
I3.addEventListener('mouseout', function(){
    txt3.classList.remove('onmouse')
})
// iamge 4
var txt4=document.querySelector(".txt4")
var I4=document.querySelector(".i4")

I4.addEventListener('mouseover',function(){
    txt4.classList.add('onmouse')
})
I4.addEventListener('mouseout', function(){
    txt4.classList.remove('onmouse')
})
// image 5
var txt5=document.querySelector(".txt5")
var I5=document.querySelector(".i5")

I5.addEventListener('mouseover',function(){
    txt5.classList.add('onmouse')
})
I5.addEventListener('mouseout', function(){
    txt5.classList.remove('onmouse')
})
// image 6
var txt6=document.querySelector(".txt6")
var I6=document.querySelector(".i6")

I6.addEventListener('mouseover',function(){
    txt6.classList.add('onmouse')
})
I6.addEventListener('mouseout', function(){
    txt6.classList.remove('onmouse')
})

