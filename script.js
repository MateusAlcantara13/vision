 // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Demo button
        document.getElementById('startDemo').addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://leitorcedulas.netlify.app/', '_blank');
        });
        
        // Nav CTA button - Removido pois não existe mais botão no navbar

        // Intersection Observer para animações
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.stat-card, .feature-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'all 0.8s ease';
            observer.observe(el);
        });

        // Parallax effect no hero
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        const processSteps = document.querySelectorAll('.process-step');
processSteps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(50px)';
    step.style.transition = 'all 0.8s ease';
    step.style.transitionDelay = ${index * 0.2}s;
    observer.observe(step);
});