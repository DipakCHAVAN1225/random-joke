let btn=document.querySelector(".btn");
let div=document.querySelector(".joke");

btn.addEventListener("click",()=>{
    //  div.style.left= "2%";
    //  console.log("hello")
    divMove();
    getJoke();
})


let flag=true;

function divMove(){
  if(flag===true){
      div.style.left= "2%";
      console.log("hello");
      flag=false;
  }
  else{
      div.style.left="-100%";
      setTimeout(()=>{
        div.style.left= "2%";
        flag=true;
      },300)
  
  }

}



    let url="https://icanhazdadjoke.com/slack";

    async function getJoke(){
      let response=await fetch(url);
      let data=await response.json()
       div.innerHTML=data.attachments[0].text;
      // div.innerHTML=data.joke;
    //  console.log(data.attachments[0].text)
    }