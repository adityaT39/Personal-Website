import { useEffect } from 'react';

export function useScrollReveal(containerRef, selector = '[class*="reveal"]', options = {}) {
  const { threshold = 0.15, rootMargin = '0px' } = options;
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const elements = container.querySelectorAll(selector);
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef, selector, threshold, rootMargin]);
}
