const issues = Array.from(document.querySelectorAll('.issue-section'));

function handleIntersection(target) {
    document.documentElement.style.setProperty(`--base`, `var(--${target.id}-color)`);

    if (target.id == 'issue6') {
        document.documentElement.style.setProperty(`--anchor`, `var(--anchor-active)`);
    } else {
        document.documentElement.style.setProperty(`--anchor`, `#fff`);
    }
}

function changeColor(entries) {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting;
        
        if (intersecting) {
            handleIntersection(entry.target);
        }
    });
}

const observer = new IntersectionObserver(changeColor, {threshold : .5});

issues.forEach(issue => observer.observe(issue));