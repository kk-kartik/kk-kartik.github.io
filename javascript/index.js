var typed=new Typed(".typ",{
    strings: ["Kartik Kurupaswamy"],
    typeSpeed:200,
    backSpeed:15,
    loop:true,
});

var fullImg=document.getElementById("fullimg");
var img=document.getElementById("Img");
function openImg(pic){
    fullImg.style.display="flex";
    Img.src=pic;
}
function closeImg(){
    fullImg.style.display="none";
}

function sendEmail(){
    Email.send({
        SecureToken : "b143e160-fac4-4245-b8af-e100d7abc95f",
        To : 'contact.kk.web@gmail.com',
        From :  'contact.kk.web@gmail.com',
        Subject : "New Contact Form - Website",
        Body : "Name: " + document.getElementById("name").value + 
                "<br> Email: "+ document.getElementById("email").value +
                "<br> Phone No.: "+document.getElementById("phone").value +
                "<br> Content: "+document.getElementById("msg").value
    }).then(
      message => alert("Thank you, your message was sent successfully.")
    );
}



