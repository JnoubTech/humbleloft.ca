import { useEffect } from 'react';

/**
 * Sets up an IntersectionObserver that adds the 'visible' class
 * to all elements with the 'fade-in-on-scroll' class when they
 * enter the viewport. Call this hook once per page component.
 */
export function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observe all elements with the animation class
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
