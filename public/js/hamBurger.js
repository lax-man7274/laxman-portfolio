const container=document.querySelector(".burger-container");
const navContainer=document.querySelector('.navigationContainer');
const arrow=document.querySelector('.arrow');




container.addEventListener("click",()=>{
    navContainer.classList.add('display-nav-container');
});
arrow.addEventListener('click',()=>{
    navContainer.classList.remove('display-nav-container');
})
