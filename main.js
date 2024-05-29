"use strict"

const stacksContainer=document.querySelector(".stacks-grid")
const imagenes=document.querySelectorAll(".Stacks");


const callback=(entry)=>{
    const recorrerImagenes = (aparecerODesaparecer)=>{
        imagenes.forEach(imagen=>imagen.style.animation=`${aparecerODesaparecer} 1s forwards `)
    }  
    (entry[0].isIntersecting)
    ?recorrerImagenes("aparecer"):recorrerImagenes("desaparecer")
    
   
}
const options={
    rootMargin:"-20%"
}
const observer= new IntersectionObserver(callback,options)

observer.observe(stacksContainer);


const mode=document.getElementById("mode");
const proyectsTitle=document.querySelector(".projects").children[0];

mode.addEventListener("click",()=>{
    if(mode.textContent==="light_mode"){
        mode.textContent="dark_mode";
        document.body.style.backgroundColor="var(--light-bg)"
        proyectsTitle.style.color="var(--bg-color2)"
        document.querySelectorAll('.projects h4').forEach(el=>el.style.color="var(--bg-color2)")
    }
    else{
        mode.textContent="light_mode";
        document.body.style.backgroundColor="var(--dark-bg)";
        proyectsTitle.style.color="var(--bg-color1)"
        document.querySelectorAll('.projects h4').forEach(el=>el.style.color="var(--bg-color1)")
    }
})

const avatar=document.querySelector(".avatar");

avatar.addEventListener("mouseover",()=>avatar.setAttribute("src","imgs/myAvatar1.webp"))
avatar.addEventListener("mouseleave",()=>avatar.setAttribute("src","imgs/myAvatar.webp"))


const projects = document.querySelectorAll('.project');

projects.forEach(el=>{
    el.addEventListener('click',(e)=>{
        const projectName=el.querySelector('h5');
        (!el.classList.contains('in-vercel'))
        ?open(`https://anthonygarciaa.github.io/${projectName.textContent}/`)
        :open(`https://${projectName.textContent.toLowerCase()}-rust.vercel.app/`)
    })
})

const closeBtn = document.getElementById("exit_button");

closeBtn.addEventListener('click',()=>window.close())