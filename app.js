data = [
  {
    id: 0,
    img: "./images/testimonial-1.png",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis praesentium reprehenderit illo libero quibusdam vitae voluptas deserunt, rerum esse ipsam! Cumque`,
    name: "Peter parker",
    job: "Project manager",
    stars: 5,
  },
  {
    id: 1,
    img: "./images/testimonial-2.png",
    text: `Accusantium expedita totam magnam, possimus mollitia sunt modi libero vero praesentium quisquam reprehenderit repudiandae dolores eligendi quo nemo, consectetur`,
    name: "Stanley Annable",
    job: "Web developer",
    stars: 5,
  },
  {
    id: 2,
    img: "./images/testimonial-3.png",
    text: `Incidunt nulla necessitatibus? Iure adipisci laboriosam officia aliquam amet deleniti at rem cum aliquid, culpa maxime placeat doloribus reprehenderit, consectetur`,
    name: "Unity Padilla",
    job: "Andriod developer",
    stars: 4,
  },
  {
    id: 3,
    img: "./images/testimonial-4.png",
    text: `Nesciunt neque labore commodi dignissimos harum! Cumque dolorem velit atque veritatis minus culpa est, voluptates error rerum perferendis quisquam nobis quibusdam,`,
    name: "Justin Hicks",
    job: "CEO",
    stars: 3,
  },
  {
    id: 4,
    img: "./images/testimonial-5.png",
    text: `Accusantium incidunt iste. Ullam hic iste, optio eveniet ea quas assumenda laborum quibusdam labore nesciunt. Magni nostrum tenetur quam? Lorem, ipsum dolor.`,
    name: "Margaret Saunders",
    job: "React developer",
    stars: 5,
  },
];


const testimonials = document.querySelector('.testimonials')


const userImage = document.querySelector('.image')
const userText = document.querySelector('.text')
const userName = document.querySelector('.name')
const userJob = document.querySelector('.job')
const userStars = document.querySelector('.stars')


const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
let currentReview = 0;

const addToHtml = (id) =>{
  const star = `<i class="fa-solid fa-star"></i>`;

  userImage.src = data[id].img
  userText.innerHTML = data[id].text
  userName.innerHTML = data[id].name
  userJob.innerHTML = data[id].job
  userStars.innerHTML = star.repeat(data[id].stars)
}

addToHtml(currentReview)

nextBtn.addEventListener('click', ()=>{
  if(currentReview < data.length -1){
    currentReview++
    addToHtml(currentReview)
    changeOpacity()
  }
})

prevBtn.addEventListener('click', ()=>{
  if(currentReview > 0){
    currentReview--
    addToHtml(currentReview)
    changeOpacity()

  }
})

const changeOpacity = ()=>{
  if(currentReview == 4){
    nextBtn.style.opacity = "0.5" 
  }
  else if(currentReview == 0){
    prevBtn.style.opacity = "0.5" 
  } else {
    nextBtn.style.opacity = "1" 
    prevBtn.style.opacity = "1" 

  }
}

changeOpacity()