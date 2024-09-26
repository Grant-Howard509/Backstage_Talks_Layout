const issues = Array.from(document.querySelectorAll('.issue-section'));

function changeColor(entries) {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting;
        
        if (intersecting) {
            let currentID = entry.target.id;
            const bg = document.querySelector('body').style;
    
            switch (currentID) {
                case 'issue8':
                    bg.backgroundColor = '#f6e0a4';
                    break;
                case 'issue7':
                    bg.backgroundColor = '#ff608c';
                    break;
                case 'issue6':
                    bg.backgroundColor = '#fff';
                    break;
                case 'issue5':
                    bg.backgroundColor = '#00c1b5';
                    break;
                case 'issue4':
                    bg.backgroundColor = '#ff6519';
                    break;
                case 'issue3':
                    bg.backgroundColor = '#ffbe00';
                    break;
                case 'issue2':
                    bg.backgroundColor = '#1d3fbb';
                    break;
                case 'issue1':
                    bg.backgroundColor = '#E30512';
                    break;
                default:
                    bg.backgroundColor = '#000';
            }
        }
    });
}

const observer = new IntersectionObserver(changeColor, {threshold : .5});

issues.forEach(issue => observer.observe(issue));