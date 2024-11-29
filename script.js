var arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1618930818691-6d80f0d1fa26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var cluter = "";
arr.forEach(function(val,indx){
    cluter+= `<div class="story">
                    <img id="${indx}" src="${val.dp}" alt="">
                </div>`

})
document.querySelector("#storiya").innerHTML = cluter;

var grow =0;
document.querySelector("#storiya").addEventListener("click",function(elem){
  document.querySelector("#fullscr").style.backgroundImage = `url(${arr[elem.target.id].img})`;
  document.querySelector("#fullscr").style.display = "block";
  setTimeout(function(){
    document.querySelector("#fullscr").style.display = "none";

  },3000)

  if(grow<100){
    setInterval(function(){
      document.querySelector("#growth").style.width = `${grow++}%`
    },30)
  }else{
    grow =0;
  }
})