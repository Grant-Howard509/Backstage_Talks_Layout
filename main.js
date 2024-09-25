const issues = Array.from(document.querySelectorAll('.issue-section'));

let issue_index = 0;
const size = issues.length - 1;

window.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        console.log('scrolling up');
        if (issue_index > 0) {
            issue_index--;
        }

        location.hash = issues[issue_index].id;
    } else {
        console.log('scrolling down');
        if (issue_index < size) {
            issue_index++;
        }
    }

    const currentID = issues[issue_index].id;
    const bg= document.querySelector('body').style;
    const buyLink = document.querySelector('.purchase-link > a').style;
    const selectStoreLink = document.querySelector('.select-store-link > a').style;

    console.log(currentID);

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
    }
});