document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animation for Home Section
    gsap.from("#home h1", { duration: 1.5, y: -100, opacity: 0, ease: "bounce.out" });
    gsap.from("#home p", { duration: 1.2, x: -200, opacity: 0, ease: "power2.out", delay: 0.5 });

    // GSAP Parallax Effect on Scroll for About Section
    gsap.from("#about", {
        scrollTrigger: {
            trigger: "#about",
            start: "top center",
            scrub: true,
        },
        y: 150,
        opacity: 1,
        ease: "power2.inOut",
        duration: 2,
    });

    // Dynamic Staggered Animations for Projects Section
    gsap.from("#projects h2", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)"
    });

    gsap.from("#projects p", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.75)",
        stagger: 0.2 // Staggered animation for each project card or item
    });

    // Skills Section Progress Bars with Animation
    gsap.from("#skills h2", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
    });

    gsap.fromTo(
        "#skills p",
        { scale: 0.5, opacity: 0 },
        {
            scrollTrigger: {
                trigger: "#skills",
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.75)",
            stagger: 0.3 // Animates skill items one by one
        }
    );

    // Contact Section Fly-In Animation
    gsap.from("#contact", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        x: 300,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    });

    // Footer Animation (Just a subtle fade in)
    gsap.from("footer", {
        scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});
