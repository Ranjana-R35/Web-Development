const progressbar=document.getElementById("progressBar");
const badge=document.getElementById("badge");

function updateProgress(){
    const scroll=window.scrollY;
    const docHeight=document.documentElement.scrollHeight-window.innerHeight;
    console.log(scroll);
    console.log(docHeight);
    const progress=Math.round((scroll/docHeight)*100);
    progressbar.style.width=progress + "%";
    badge.textContent=progress + "% read";
    if(progress>=100){
        badge.classList.add("complete");
        badge.textContent='✔completed';
    }
    else{
        badge.classList.remove("complete")
    }
}
window.addEventListener("scroll",updateProgress)

