let tabs = Array.from(document.querySelectorAll('.tabs a'))
let contents = Array.from(document.querySelectorAll('.tabContent > div'))
let names = Array.from(document.querySelectorAll('.names h2'))
let namesDetails = Array.from(document.querySelectorAll('.namesDetails > div'))

tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
        tabs.forEach((allTab) => {allTab.classList.remove('active')});
        tab.classList.add('active');
        let tabId = tab.dataset.id;
        contents.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})
names.forEach((tab) => {
    tab.addEventListener('click', function() {
        names.forEach((allTab) => {allTab.classList.remove('active')});
        tab.classList.add('active');
        let tabId = tab.dataset.id;
        namesDetails.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})