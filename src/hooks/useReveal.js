import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const replayEls = document.querySelectorAll('[data-replay]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Transition-based reveal
          if (entry.target.classList.contains('reveal')) {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
            } else {
              entry.target.classList.remove('reveal-visible');
            }
          }

          // Keyframe replay
          if (entry.target.hasAttribute('data-replay') && entry.isIntersecting) {
            const cls = entry.target.dataset.replay;
            entry.target.classList.remove(cls);
            void entry.target.offsetWidth;
            entry.target.classList.add(cls);
          }
        });
      },
      { threshold: 0.15,
          rootMargin: '0px 0px -80px 0px'
       }
    );

    revealEls.forEach((el) => observer.observe(el));
    replayEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
