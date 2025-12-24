// Animation simple fade-in + slide-up
const sections = document.querySelectorAll('.text-graphic-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

