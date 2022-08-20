var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currScrollpos = window.pageYOffset;

    if (prevScrollpos < currScrollpos) {
        document.getElementById("header").style.top = "-80px";
    } else {
        document.getElementById("header").style.top = "0px";
        let progress = setInterval(() => {
            if (window.pageYOffset > 0) {
                document.getElementById("header").style.top = "-80px";
            }
        }, 6000);
    }
    prevScrollpos = currScrollpos;
};

var typed = new Typed(".typ", {
    strings: ["Kartik Kurupaswamy"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true,
});


//For Projects
var projects = [{
    name: "Vote India",
    desc: "Blockchain based Voting system powered by Ethereum",
    p1: ["Its an AADHAAR based voting system based on blockchain technology.", "The vote is saved in a decentralised database i.e., Goerli Network"],
    pic: "../prj/voteindia.png",
    techstack: ["fa-brands fa-html5", "fa-brands fa-ethereum", "fa-brands fa-css3-alt", "fa-brands fa-node-js"],
    web: "https://kk-kartik.github.io/VoteIndia/",
    code: "https://github.com/kk-kartik/VoteIndia"
}, {
    name: "Portfolio",
    desc: "My personal portfolio website",
    p1: ["Its an simple project made using HTML CSS JAVASCRIPT.", "I have made many updates so far", "You can look how far I have came"],
    pic: "../prj/portfolio.png",
    techstack: ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-node-js"],
    web: "https://kk-kartik.github.io/",
    code: "https://github.com/kk-kartik/kk-kartik.github.io"
}, {
    name: "Phosphenes 2022",
    desc: "The Roll Number Randomizer",
    p1: ["Its an app that generates random predefined roll number using javascript.", "It has no buttons, works on the press of a key"],
    pic: "../prj/posh.png",
    techstack: ["fa-brands fa-html5", "fa-brands fa-css3-alt", "fa-brands fa-node-js"],
    web: "https://kk-kartik.github.io/freshers2022",
    code: "https://github.com/kk-kartik/freshers2022"
}]
    ;
let prsize = projects.length;
let slideIndex = 0;
showSlides(0);
function plusSlides(m) {
    if (slideIndex < 0) slideIndex += prsize;
    slideIndex %= prsize;
    showSlides(slideIndex += m);
}
//var proj=JSON.parse(projects);
console.log(projects);
function showSlides(n) {
    if (n < 0) n += prsize;
    n %= prsize;

    document.getElementById("primg").src = projects[n].pic;
    document.getElementById("prtitle").innerHTML = projects[n].name;
    document.getElementById("prdesc").innerHTML = projects[n].desc;
    document.getElementById("prtitle").innerHTML = projects[n].name;
    document.getElementById("prpointsul").innerHTML = " ";
    projects[n].p1.forEach((ts) => {
        var li = document.createElement("li");
        var txt = document.createTextNode(ts);
        li.appendChild(txt);
        document.getElementById("prpointsul").appendChild(li);
    });

    document.getElementById("prstack").innerHTML = "";
    projects[n].techstack.forEach((ts) => {
        var ni = document.createElement("i");
        ni.className = ts
        document.getElementById("prstack").appendChild(ni);
    });
    document.getElementById("prweb").href = projects[n].web;
    document.getElementById("prcode").href = projects[n].code;

}

// For Gallery 

var fullImg = document.getElementById("fullimg");
var img = document.getElementById("Img");
function openImg(pic) {
    fullImg.style.display = "flex";
    Img.src = pic;
}
function closeImg() {
    fullImg.style.display = "none";
}

function sendEmail() {
    Email.send({
        SecureToken: "b143e160-fac4-4245-b8af-e100d7abc95f",
        To: 'contact.kk.web@gmail.com',
        From: 'contact.kk.web@gmail.com',
        Subject: "New Contact Form - Website",
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Phone No.: " + document.getElementById("phone").value +
            "<br> Content: " + document.getElementById("msg").value
    }).then(
        message => alert("Thank you, your message was sent successfully.")
    );
}



