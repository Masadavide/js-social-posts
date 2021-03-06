const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const array2= [];

//Crea i post prendendo i dati dall'array [posts], usando il ciclo for cos?? da avere 5 post

function creazionePost(posts){
    let immagineValida = '';
    if(posts.author.image == null){
        immagineValida = "https://www.ladyblitz.it/wp-content/uploads/2015/09/fbShared-e1442238915211.jpg"
    }else{
    immagineValida = posts.author.image
    }

    let dataUsa = posts.created.split("-");
    let dataIta = dataUsa[2] + "-" +dataUsa[1] + "-" + dataUsa[0]

    document.querySelector('.posts-list').innerHTML +=`
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${immagineValida}" alt=">${posts.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts.author.name}</div>
                    <div class="post-meta__time">${dataIta}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${posts.content}</div>
        <div class="post__image">
            <img src="${posts.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#!" data-postid="${posts.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="${posts.id}" class="js-likes-counter">${posts.likes}</b> persone
                </div>
            </div> 
        </div>  
    </div>
    `
}

for(let i = 0; i < posts.length; i++){
    creazionePost(posts[i])
}

//Al click di "mi piace", pollice up e scritta diventano verdi + counter dei like aumenta/decrementa

let likeBtn = document.querySelectorAll('.like-button');
let likeBtnIcon = document.querySelectorAll('.like-button__icon');
let likeBtnLabel = document.querySelectorAll('.like-button__label');


let postLikesCounter = [];

for(let i = 0; i < likeBtn.length; i++){
    likeBtn[i].addEventListener('click', function(){
        let postLikes = document.getElementById(i+1);
        if(likeBtnIcon[i].classList.contains('like-button--liked')){
            likeBtnIcon[i].classList.remove('like-button--liked');
            likeBtnLabel[i].classList.remove('like-button--liked');
            postLikes.innerHTML = (parseInt (postLikes.innerHTML) - 1)
        }else{
            likeBtnIcon[i].classList.add('like-button--liked');
            likeBtnLabel[i].classList.add('like-button--liked');
            postLikes.innerHTML = (parseInt (postLikes.innerHTML) + 1);
        }

        //aggiungiamo gli id con il mi piace ad un array
        array2.push(posts[i].id)
        console.log(array2)

})}


//Sostituire l'immagine profilo di chi non la possiede con le iniziali del nome

/* function getImmagineProfilo (autore){
    return `<img class="profile-pic" src="${posts.author.image}" alt=">${posts.author.name}">`

function getInizialiProfilo (autore){
    return `<div class="profile-pic-default"><span><//span></div>`

} */


//Estrapolare iniziali del nome

