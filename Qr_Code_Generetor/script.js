const inputEl = document.getElementById("qrText");
const qrImg = document.getElementById("qrCodeImg");
const qrContainer = document.getElementById("img");
const qrBtn = document.getElementById("qrBtn");

function generateQR(){
    if(inputEl.value!=""){
        qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputEl.value;
        qrContainer.classList.add("show");
    }
    else{
        inputEl.classList.add("error");
        setTimeout(()=>{
            inputEl.classList.remove("error")
        },1000)
    }
}
inputEl.addEventListener("keyup",()=>{
    if(!inputEl.value){
        qrContainer.classList.remove("show");
    }
})