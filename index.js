const searchBox=document.querySelector(".search-box")
const searchBtn=document.querySelector(".search-btn")
const search=document.querySelector(".search")
const closeBtn=document.querySelector(".close-btn")

searchBtn.addEventListener('click',function(){
    console.log(search.classList.contains('active'))
    if(search.classList.add('active'));
    searchBox.focus();

})
closeBtn.addEventListener('click',()=>{
    search.classList.remove('active')
})