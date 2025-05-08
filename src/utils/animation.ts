// Animation utilities for the application

// Function to create a typing animation effect
export const typeText = (element: HTMLElement, text: string, speed = 50): Promise<void> => {
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = '';
    
    const typing = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        resolve();
      }
    }, speed);
  });
};

// Function to create a count-up animation effect
export const countUp = (element: HTMLElement, start: number, end: number, duration = 2000): void => {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value.toString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// Function to add pulse animation class and remove it after duration
export const pulseElement = (element: HTMLElement, duration = 1000): void => {
  element.classList.add('animate-pulse');
  setTimeout(() => {
    element.classList.remove('animate-pulse');
  }, duration);
};

// Function to apply a fade-in effect
export const fadeIn = (element: HTMLElement, duration = 500): void => {
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  element.style.opacity = '0';
  
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
};