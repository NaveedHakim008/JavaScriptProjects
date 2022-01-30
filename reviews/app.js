const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
console.log("hello world");
let author = document.getElementById("author");
let occupation = document.getElementById("occupation");
let info = document.querySelector(".info");
let imguser = document.getElementById("imguser");

const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const randombtn = document.querySelector('.random-btn');
var index = 0;
var item;
window.addEventListener("DOMContentLoaded", function () {
    item = reviews[index];

    author.textContent = item.name;
    occupation.textContent = item.job;
    info.textContent = item.text;
    imguser.src = item.img;



});
prevbtn.addEventListener('click', function () {
    if (index > 0 && index < reviews.length - 1) {
        index--;
    }
    else {
        index = reviews.length - 1;
    }
    item = reviews[index];
    author.textContent = item.name;
    occupation.textContent = item.job;
    info.textContent = item.text;
    imguser.src = item.img;
});
nextbtn.addEventListener('click', function () {
    if (index >= 0 && index < reviews.length - 1) {
        index++;
    }
    else {
        index = 0;
    }
    item = reviews[index];
    author.textContent = item.name;
    occupation.textContent = item.job;
    info.textContent = item.text;
    imguser.src = item.img;
});
randombtn.addEventListener('click', function () {
    index = Math.floor(Math.random() * reviews.length);
    item = reviews[index];
    author.textContent = item.name;
    occupation.textContent = item.job;
    info.textContent = item.text;
    imguser.src = item.img;
});