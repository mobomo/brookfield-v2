// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';


console.log('debug test1')



window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const orbs = document.querySelectorAll('.orb');





// orbs.forEach((orb) => {
//   orb.animate(
//     { transform: ['scale(0)', 'scale(1)']},
//     {
//       fill: 'both',
//       timeline: new ViewTimeline({ subject: orb }),
//       delay: { phase: 'contain', percent: CSS.percent(-10) },
//       endDelay: { phase: 'contain', percent: CSS.percent(50) },
//     }
//   );
// });


// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if(entry.isIntersecting){
//         entry.target.classList.add("animate");
//         observer.unobserve(entry.target);
//       }
//     })
//   },
//   { rootMargin: "-20%" }
// );

// function init(){
//   document.querySelectorAll(".fade-up").forEach(elem => {
//     elem.classList.remove("animate");
//     observer.observe(elem);
//   });
// }

// const TopObserver = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if(entry.isIntersecting){
//         // alert("OMG")
//         init();
//       }
//     })
//   },
//   { threshold: 1.0 }
// );

// TopObserver.observe(document.getElementById("intro"));
  
const test1 = document.querySelector('.test1');

const third = document.getElementById("test1");

third.animate(
    {
      transform: [
        'translate(0,100px) scale(0.5)',
        'translate(0,0) scale(1)'
      ],
      opacity: [0,1]
    },
    {
      fill: 'both',
      timeline: new ViewTimeline({ subject: third }),
      delay: { phase: 'cover', percent: CSS.percent(30) },
      endDelay: { phase: 'contain', percent: CSS.percent(50) },
    }
  );




test1.classList.add('bg-red-500');

test1.innerHTML += 'test1 added';