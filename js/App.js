const submite = document.querySelector(".Btn")
const name = document.querySelector(".name")
const email = document.querySelector(".email")
const phone = document.querySelector(".phone")
const checkPrice = document.querySelector(".checkPrice")
const address = document.querySelector(".address")
const Checkpayment = document.querySelector(".Checkpayment")
const Checkpolicy = document.querySelector(".Checkpolicy")

submite.onclick = (e) => {
    e.preventDefault()
    if(!name.value){
         name.style.borderBottom = "1px solid red"
    }else if(!email.value){
        email.style.borderBottom = "1px solid red"
    }else if(!phone.value){
        phone.style.borderBottom = "1px solid red"
    }else if(!address.value){
        address.style.borderBottom = "1px solid red"
    }else{
        window.location= "submitted.html"
    }

}