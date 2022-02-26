if(document.location.pathname == '/unilab-dictionary/dictionary.html'){
    let alphabet = ['ა','ბ','გ','დ','ე','ვ','ზ','თ','ი','კ','ლ','მ','ნ','ო','პ','ჟ','რ','ს','ტ','უ','ფ','ქ','ღ','ყ','შ','ჩ','ც','ძ','წ','ჭ','ხ','ჯ','ჰ'];
    alphabet.forEach((letter)=> {
        let child = document.createElement('span');
        child.setAttribute('class', 'al-letter');
        child.innerText = letter;
        document.querySelector('.alphabet-wrapper').appendChild(child)
    });
    let alpbox = document.querySelectorAll('.al-letter');
    for(let i = 0; i < alpbox.length; i++) {
        alpbox[i].addEventListener('click', function(){
            for(let e = 0; e < alpbox.length; e++) {
                alpbox[e].classList.remove('al-active')
            }
            for(let a = 0; a < alpbox.length; a++) {
                if(a == i) {
                    alpbox[a].classList.add('al-active')
                    break;
                }
            }
        })
    }
    let filterval = new String;
    document.getElementById('filter').addEventListener('change', function() {
        filterval = this.value;
        filter();
        document.querySelector('.pagination').style.display = 'none';
    })
    let term = document.querySelector('input');
    let val = document.querySelector('input');
    term.addEventListener('keyup', e => {
        if(val.value.length > 2 && val.value !== " ") {
            search();
            if(results.length < 3) {
                document.querySelectorAll('.term-card').forEach(e => {
                    e.style.flex = 'unset';
                });
            }
            document.querySelector('.pagination').style.display = 'none';
        }
        if(val.value.length == 0) {
            parent.innerHTML = '';
            generateTerms(0);
            document.querySelector('.pagination').style.display = 'block';
            document.querySelector('.result-display').style.display = 'none';
            let box = document.querySelectorAll('.page-el');
            for(let i = 0; i < box.length; i++) {
                box[i].classList.remove('page-active');
            }
            box[0].classList.add('page-active');
        }
    })
    let lchange = document.createElement('span');
    lchange.className = 'lchange';
    lchange.innerText = 'ENG'
    document.querySelector('.alphabet-wrapper').appendChild(lchange)
    let parent = document.querySelector('.pagination-parent');
    window.onload = function() {
        generateTerms(0);
        if(Object.keys(terms).length > 1) {
            generatePages();
            document.querySelector('.page-el').classList.add('page-active')
        }
    }

    let terms = {
        0 : {
            key: 'python',
            header : '1',
            body : `ტესტ`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        1 : {
            key: 'python',
            header : '2',
            body : `ტესტ`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        2 : {
            key: 'ICT',
            header : '3',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['third', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-3.svg'
        },
        3 : {
            key: 'ICT',
            header : '4',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        4 : {
            key: 'ICT',
            header : '5',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        5 : {
            key: 'python',
            header : '6',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['third', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-3.svg'
        },
        6 : {
            key: 'ICT',
            header : '7',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        7 : {
            key: 'python',
            header : '8',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        8 : {
            key: 'digitalcommunications',
            header : '9',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        9 : {
            key: 'ICT',
            header : '10',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        10 : {
            key: 'python',
            header : '11',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        11 : {
            key: 'ICT',
            header : '12',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['third', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-3.svg'
        },
        12 : {
            key: 'ICT',
            header : '13',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        13 : {
            key: 'ICT',
            header : '14',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        14 : {
            key: 'python',
            header : '15',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['third', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-3.svg'
        },
        15 : {
            key: 'python',
            header : '16',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        16 : {
            key: 'wordpress',
            header : '17',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        17 : {
            key: 'digitalcommunications',
            header : '18',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        18 : {
            key: 'wordpress',
            header : '19',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        19 : {
            key: 'digitalcommunications',
            header : '20',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        20 : {
            key: 'python',
            header : '21',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['third', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-3.svg'
        },
        21 : {
            key: 'frontend',
            header : '22',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        22 : {
            key: 'frontend',
            header : '23',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        23 : {
            key: 'frontend',
            header : '24',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['third', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-3.svg'
        },
        24 : {
            key: 'graphicdesign',
            header : '25',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        25 : {
            key: 'graphicdesign',
            header : '26',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        26 : {
            key: 'narrativedesign',
            header : '27',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        27 : {
            key: 'graphicdesign',
            header : '25',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        28 : {
            key: 'graphicdesign',
            header : '26',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        29 : {
            key: 'narrativedesign',
            header : '27',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        30 : {
            key: 'graphicdesign',
            header : '25',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['first', 'graphicdesign'],
            iconPath: '../media/svg/term-cards/term-icon-1.svg'
        },
        31 : {
            key: 'graphicdesign',
            header : '26',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        32 : {
            key: 'narrativedesign',
            header : '27',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        33 : {
            key: 'narrativedesign',
            header : '27',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        34 : {
            key: 'narrativedesign',
            header : '27',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
        35 : {
            key: 'narrativedesign',
            header : '27',
            body : `ადამიანური, მატერიალური და დროითი რეს...`,
            hashtags : ['second', 'mid'],
            iconPath: '../media/svg/term-cards/term-icon-2.svg'
        },
    }

    let results = [];

    function search() {
        results = [];
        term = document.querySelector('input').value;
        Object.values(terms).forEach(e => {
            let {header,body,hashtags,iconPath} = e;
            if(header.indexOf(term) !== -1  || body.indexOf(term) !== -1 || hashtags.join('').indexOf(term) !== -1 && term.length > 0) {
                results.push([header,body,hashtags,iconPath])
            }
        });
        parent.innerHTML = '';
        document.querySelector('.result-display').style.display = 'block';
        document.querySelector('.result-display').style.marginLeft = '20px';
        document.querySelector('.result-display').innerText = `ძიების შედეგი: ${results.length}`;
        for(let i = 0; i < 9; i++) {
            let main = document.createElement('div');
            main.setAttribute('class', 'term-card');
            parent.appendChild(main);
            try {
                main.innerHTML = 
                `
                <div class="card-header">
                <h3 class="term-header-title"><span class="bold">${results[i][0]}</span></h3>
                </div>
                <div class="card-body">
                    <p class="term-description">${results[i][1]}</p>
                </div>
                <div class="card-footer">
                    <div class="hashtag-keywords">
                        ${results[i][2].map(e => {
                            return `<span>#${e}</span>`
                        }).join('')}
                    </div>
                    <div class="button-wrapper">
                        <a href="#" class="see-details">ნახე სრულად</a>
                    </div>
                </div>
                `
            } catch(err) {
                for(let i = 0; i < document.querySelectorAll('.term-card').length; i++) {
                    if(document.querySelectorAll('.term-card')[i].innerHTML == '') {
                        document.querySelectorAll('.term-card')[i].remove();
                    }
                }
                console.warn(err);
            }
        }
    }

    function filter() {
        parent.innerHTML = '';
        for(let i = 0; i < Object.keys(terms).length; i++) {
            if(filterval == terms[i].key) {
                let main = document.createElement('div');
                main.setAttribute('class', 'term-card');
                parent.appendChild(main);
                try {
                    main.innerHTML = 
                        `
                        <div class="card-header">
                        <h3 class="term-header-title"><span class="bold">${terms[i].header}</span></h3>
                        </div>
                        <div class="card-body">
                            <p class="term-description">${terms[i].body}</p>
                        </div>
                        <div class="card-footer">
                            <div class="hashtag-keywords">
                                ${terms[i].hashtags.map(e => {
                                    return `<span>#${e}</span>`
                                }).join('')}
                            </div>
                            <div class="button-wrapper">
                                <a href="#" class="see-details">ნახე სრულად</a>
                            </div>
                        </div>
                        `
                } catch(err) {
                    console.log(err);
                }
            }
        }
    }

    function generateTerms(val) {
        for(let i = val; i < val+9; i++) {
            let main = document.createElement('div');
            main.setAttribute('class', 'term-card');
            parent.appendChild(main);
            try {
                main.innerHTML =
                `
                <div class="card-header">
                    <h3 class="term-header-title"><span class="bold">${terms[i].header}</span></h3>
                </div>
                <div class="card-body">
                    <p class="term-description">${terms[i].body}</p>
                </div>
                <div class="card-footer">
                    <div class="hashtag-keywords">
                        ${terms[i].hashtags.map(e => {
                            return `<span>#${e}</span>`
                        }).join('')}
                    </div>
                    <div class="button-wrapper">
                        <a href="#" class="see-details">ნახე სრულად</a>
                    </div>
                </div>
                `
            } catch(err) {
                for(let i = 0; i < document.querySelectorAll('.term-card').length; i++) {
                    if(document.querySelectorAll('.term-card')[i].innerHTML == '') {
                        document.querySelectorAll('.term-card')[i].remove();
                    }
                }
            }
        }
    }

    let paginationClicked = 0;
    let count = 0;
    function generatePages() {
        let pgParent = document.querySelector('.pagination');
        if(Object.keys(terms).length / 9 >= 4) {
            for(let i = 0; i < 4; i++) {
                let page = document.createElement('span');
                page.setAttribute('class', 'page-el');
                page.innerText = i+1;
                pgParent.appendChild(page);
            }
        } else {
            for(let i = 0; i < Object.keys(terms).length / 9; i++) {
                let page = document.createElement('span');
                page.setAttribute('class', 'page-el');
                page.innerText = i+1;
                pgParent.appendChild(page);
            }
        }
        let box = document.querySelectorAll('.page-el');
        for(let i = 0; i < box.length; i++) {
            box[i].addEventListener('click', function(){
                count = parseInt(this.innerText) - 1;
                if(parseInt(this.innerText) == 1) {
                    paginationClicked = i * 8;
                } else {
                    paginationClicked = i * 8 + (parseInt(this.innerText) - 1);
                }
                let parent = document.querySelector('.pagination-parent');
                parent.innerHTML = '';
                parent = generateTerms(paginationClicked);
                for(let e = 0; e < box.length; e++) {
                    box[e].classList.remove('page-active')
                }
                for(let a = 0; a < box.length; a++) {
                    if(a == i) {
                        box[a].classList.add('page-active')
                        break;
                    }
                }
            })
        }
        let arrow = document.createElement('span');
        arrow.setAttribute('id', 'scrollRight');
        arrow.innerText = '>';
        pgParent.append(arrow)
        if(Object.keys(terms).length / 9 > 4) {
            let ect = document.createElement('span');
            ect.setAttribute('class', 'dots-wrap');
            ect.innerText = '...';
            pgParent.insertBefore(ect, arrow)
        }
        try {
            document.querySelector('.dots-wrap').addEventListener('click', function(){
                pgParent.innerHTML = '';
                for(let i = 0; i < Object.keys(terms).length / 9; i++) {
                    let page = document.createElement('span');
                    page.setAttribute('class', 'page-el');
                    page.innerText = i+1;
                    pgParent.appendChild(page);
                }
                let box = document.querySelectorAll('.page-el');
                try {
                    box[count].classList.add('page-active');
                } catch(err) {
                    box[0].classList.add('page-active');
                }
                for(let i = 0; i < box.length; i++) {
                    box[i].addEventListener('click', function(){
                        paginationClicked = i * 8 + (parseInt(this.innerText) - 1);
                        let parent = document.querySelector('.pagination-parent');
                        parent.innerHTML = '';
                        parent = generateTerms(paginationClicked);
                        for(let e = 0; e < box.length; e++) {
                            box[e].classList.remove('page-active')
                        }
                        for(let a = 0; a < box.length; a++) {
                            if(a == i) {
                                box[a].classList.add('page-active')
                                break;
                            }
                        }
                    })
                }
            });
        } catch(err) {
        }
        document.getElementById('scrollRight').addEventListener('click', function(){ // arrow scroll right
            paginationClicked += 9;
            count++;
            if(paginationClicked <= 27) {
                for(let i = 0; i < box.length; i++) {
                    box[i].classList.remove('page-active')
                }
                box[count].classList.add('page-active');
                parent.innerHTML = '';
                generateTerms(paginationClicked)
            } else {
                count = 3;
                paginationClicked = 27;
            }
        });
        document.getElementById('scrollLeft').addEventListener('click', function(){ // arrow scroll left
            count--;
            paginationClicked -= 9;
            if(paginationClicked >= 0) {
                for(let i = 0; i < box.length; i++) {
                    box[i].classList.remove('page-active')
                }
                box[count].classList.add('page-active');
                parent.innerHTML = '';
                generateTerms(paginationClicked)
            } else {
                count = 0;
                paginationClicked = 0;
            }
        });
    }
}
