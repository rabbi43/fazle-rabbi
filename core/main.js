// JavaScript Document
// JavaScript Document
// JavaScript Document
/*
JavaScript document
document,write,getElementById,querySelector
for,var,let,const,add,style,
eventListener,classList,parentElement
children,nextElementSibling
previousElementSibling
querySelectorAll,getElementsByTagName
createElement,createTextNode,appendChild
removeChild,insertBefore,function
innerHTML,Math,sqrt,pow,random,floor,ceil
max,date new Date(),object,array,
date.get FullYear,Month,Hours,Minutes
Day,constractor,pop,push,shift,unshift
splice,slice,sort,href,protocol,hostname,port,pathname,break,continue,while,do
if,else if,else,switch,case,default,
Number,parseInt,prompt,parseFloat,toString()
toFixed,toPrecision,length,charAt,
toUpperCase,concat,addEventListener
background,color,this,textAlign,style,mouseover,mouseout
click,textContent,string,typeof,result,window,location,alert,setInterval,setTimeout
attribute*/



var openMenu =document.querySelector("#openMenu");
var count =0;
openMenu.addEventListener("click",function(){
   count++;
   if(count == 1){
      var linkDiv =document.querySelector("#linkDiv");
      linkDiv.style.display="block";
      var socialLinks =document.querySelector("#OPENbtn");
      socialLinks.style.display="block";
   }
   else{
      count =0;
      var linkDiv =document.querySelector("#linkDiv");
      linkDiv.style.display="none";
      var socialLinks =document.querySelector("#OPENbtn");
      socialLinks.style.display="none";
   }
   
   
   
});

// night / light mode
var NightModeCount =0;
var switchBtn =document.querySelector("#switch");
switchBtn.addEventListener("click",function(){
   // alert("hi");
   NightModeCount++;
   if(NightModeCount == 1){
      const body = document.querySelector("body");
      const navBarHeader =document.querySelector(".MyNavbar");
      body.classList.add("dark-mode");
      // navBarHeader.classList.add("dark-mode");
      var getInTouch =document.querySelector(".get-in-touch");
      getInTouch.style.color="#222";
   
   }
   else{
      NightModeCount=0;
      const body = document.querySelector("body");
      const navBarHeader =document.querySelector(".MyNavbar");
      body.classList.remove("dark-mode");
      // navBarHeader.classList.add("dark-mode");
      var getInTouch =document.querySelector(".get-in-touch");
      getInTouch.style.color="#222";
   
   }
   
});


















