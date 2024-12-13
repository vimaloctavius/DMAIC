document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.lss-container');
  const title = document.querySelector('.lss-title');
  const circles = document.querySelectorAll('.lss-circle');
  const overlap = document.querySelector('.lss-overlap');
  const benefits = document.querySelectorAll('.benefit');
  const steps = document.querySelectorAll('.step');
  const tools = document.querySelectorAll('.tool');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  [title, ...circles, overlap, ...benefits, ...steps, ...tools].forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
  });

  circles.forEach(circle => {
    circle.addEventListener('mouseover', () => {
      circle.style.transform = 'scale(1.1) rotate(5deg)';
    });
    circle.addEventListener('mouseout', () => {
      circle.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  overlap.addEventListener('click', () => {
    overlap.style.animation = 'rotate 1s linear';
    setTimeout(() => {
      overlap.style.animation = '';
    }, 1000);
  });

  benefits.forEach(benefit => {
    benefit.addEventListener('click', () => {
      benefit.style.animation = 'pulse 0.5s ease-out';
      setTimeout(() => {
        benefit.style.animation = '';
      }, 500);
    });
  });

  let currentStep = 0;
  setInterval(() => {
    steps[currentStep].style.backgroundColor = '#9C27B0';
    currentStep = (currentStep + 1) % steps.length;
    steps[currentStep].style.backgroundColor = '#FFC107';
  }, 2000);

  tools.forEach(tool => {
    tool.addEventListener('mouseover', () => {
      tool.style.animationPlayState = 'paused';
    });
    tool.addEventListener('mouseout', () => {
      tool.style.animationPlayState = 'running';
    });
  });

  window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    container.style.backgroundColor = `hsl(${scrollPercentage * 3.6}, 70%, 90%)`;
  });
});
