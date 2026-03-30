import { gsap } from "gsap";

const exists = (selector) => document.querySelector(selector) !== null;

document.addEventListener("DOMContentLoaded", () => {
    // Masthead
    if (exists('[data-masthead="heading"]')) {
        gsap.timeline({ defaults: { ease: "power3.out" } })
            .fromTo(
                '[data-masthead="heading"]',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.75 },
            )
            .fromTo(
                '[data-masthead="content"]',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.65 },
                "-=0.45",
            )
            .fromTo(
                '[data-masthead="btn-1"]',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.35",
            )
            .fromTo(
                '[data-masthead="btn-2"]',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.35",
            )
            .fromTo(
                '[data-masthead="strapline"]',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.2",
            );
    }

    // Banner
    if (exists('[data-banner="heading"]')) {
        gsap.timeline({ defaults: { ease: "power3.out" } })
            .fromTo(
                '[data-banner="heading"]',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.75 },
            )
            .fromTo(
                '[data-banner="content"]',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.65 },
                "-=0.45",
            );
    }

    // Thank you
    if (exists('[data-thankyou="heading"]')) {
        gsap.timeline({ defaults: { ease: "power3.out" } })
            .fromTo(
                '[data-thankyou="heading"]',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.75 },
            )
            .fromTo(
                '[data-thankyou="content"]',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.65 },
                "-=0.45",
            )
            .fromTo(
                '[data-thankyou="card-1"]',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.55 },
                "-=0.35",
            )
            .fromTo(
                '[data-thankyou="card-2"]',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.55 },
                "-=0.4",
            );
    }
});
