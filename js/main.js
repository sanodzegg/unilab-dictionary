if(document.location.pathname == '/unilab-dictionary/dictionary.html'){
    let alphabet = ['ა','ბ','გ','დ','ე','ვ','ზ','თ','ი','კ','ლ','მ','ნ','ო','პ','ჟ','რ','ს','ტ','უ','ფ','ქ','ღ','ყ','შ','ჩ','ც','ძ','წ','ჭ','ხ','ჯ','ჰ'];
    alphabet.forEach((letter)=> {
    let child = document.createElement('span');
    child.setAttribute('class', 'al-letter');
    child.innerText = letter;
    document.querySelector('.alphabet-wrapper').appendChild(child)
})
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
        0 : {
            main : {
                0 : {
                    header : 'პირველი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'graphicdesign']
                },
                1 : {
                    header : 'მეორე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['second', 'mid']
                },
                2 : {
                    header : 'მესამე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['third', 'graphicdesign']
                }
            }
        },
        1 : {
            main : {
                0 : {
                    header : 'პირველი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                1 : {
                    header : 'მეორე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['second', 'hashtag']
                },
                2 : {
                    header : 'მესამე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['third', 'hashtag']
                }
            }
        },
        2: {
            main : {
                0 : {
                    header : 'პირველი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                1 : {
                    header : 'მეორე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                2 : {
                    header : 'მესამე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                }
            }
        }
    },
    1 : {
        0 : {
            main : {
                0 : {
                    header : 'მეორე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['second', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['second', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['second', 'hashtag']
                }
            }
        },
        1 : {
            main : {
                0 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                }
            }
        },
        2: {
            main : {
                0 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                }
            }
        }
    },
    2 : {
        0 : {
            main : {
                0 : {
                    header : 'მესამე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['third', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['third', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['third', 'hashtag']
                }
            }
        },
        1 : {
            main : {
                0 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                }
            }
        },
        2: {
            main : {
                0 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                }
            }
        }
    },
    3 : {
        0 : {
            main : {
                0 : {
                    header : 'მეოთხე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['fourth', 'hashtag']
                },
            }
        },
    },
    4 : {
        0 : {
            main : {
                0 : {
                    header : 'მეხუთე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['fifth', 'hashtag']
                },
            }
        },
        1 : {
            main : {
                0 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                }
            }
        },
        2: {
            main : {
                0 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                }
            }
        }
    },
    5 : {
        0 : {
            main : {
                0 : {
                    header : 'მეექვსე',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['sixth', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['sixth', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['sixth', 'hashtag']
                }
            }
        },
        1 : {
            main : {
                0 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                }
            }
        },
        2: {
            main : {
                0 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                1 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                },
                2 : {
                    header : 'Project management - პროექტის მენეჯმენტი',
                    body : `ადამიანური, მატერიალური და დროითი რეს...`,
                    hashtags : ['first', 'hashtag']
                }
            }
        }
    },
}

function generateTerms(val) {
    for(let i = 0; i < Object.keys(terms[val]).length; i++) {
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'term-cards-wrapper');
        parent.appendChild(wrapper);
        for(let a = 0; a <= 3; a++) {
            let main = document.createElement('div');
            main.setAttribute('class', 'term-card');
            wrapper.appendChild(main);
            try {
                main.innerHTML = 
                `
                    <div class="card-header">
                        <h3 class="term-header-title"><span class="bold">${terms[val][i].main[a].header}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-description">${terms[val][i].main[a].body}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            ${terms[val][i].main[a].hashtags.map(e => {
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
}

let paginationClicked = 0;

function generatePages() {
    let pgParent = document.querySelector('.pagination')
    if(Object.keys(terms).length >= 4) {
        for(let i = 0; i < 4; i++) {
            let page = document.createElement('span');
            page.setAttribute('class', 'page-el');
            page.innerText = i+1;
            pgParent.appendChild(page);
        }
    } else {
        for(let i = 0; i < Object.keys(terms).length; i++) {
            let page = document.createElement('span');
            page.setAttribute('class', 'page-el');
            page.innerText = i+1;
            pgParent.appendChild(page);
        }
    }
    let box = document.querySelectorAll('.page-el');
    for(let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', function(){
            paginationClicked = parseInt(box[i].innerText);
        })
    }
    for(let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', function(){
            paginationClicked = parseInt(box[i].innerText);
            let parent = document.querySelector('.pagination-parent');
            parent.innerHTML = '';
            parent = generateTerms(paginationClicked-1);
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
    let ect = document.createElement('span');
    ect.setAttribute('class', 'dots-wrap');
    ect.innerText = '...';
    let arrow = document.createElement('span');
    arrow.setAttribute('id', 'scrollRight');
    arrow.innerText = '>';
    pgParent.append(ect)
    pgParent.append(arrow)
    document.querySelector('.dots-wrap').addEventListener('click', function(){
        pgParent.innerHTML = '';
        for(let i = 0; i < Object.keys(terms).length; i++) {
            let page = document.createElement('span');
            page.setAttribute('class', 'page-el');
            page.innerText = i+1;
            pgParent.appendChild(page);
        }
        let box = document.querySelectorAll('.page-el');
        try {
            box[paginationClicked-1].classList.add('page-active');
        } catch(err) {
            box[0].classList.add('page-active');
        }
        for(let i = 0; i < box.length; i++) {
            box[i].addEventListener('click', function(){
                paginationClicked = parseInt(box[i].innerText);
            })
        }
        paginationClicked = paginationClicked + 1;
        for(let i = 0; i < box.length; i++) {
            box[i].addEventListener('click', function(){
                paginationClicked = parseInt(box[i].innerText);
                let parent = document.querySelector('.pagination-parent');
                parent.innerHTML = '';
                parent = generateTerms(paginationClicked-1);
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
    })
    paginationClicked = paginationClicked + 1;
    document.getElementById('scrollRight').addEventListener('click', function(){
        paginationClicked++;
        if(paginationClicked <= 4) {
            for(let i = 0; i < box.length; i++) {
                box[i].classList.remove('page-active')
            }
            box[paginationClicked-1].classList.add('page-active');
            parent.innerHTML = '';
            generateTerms(paginationClicked-1)
        } else {
            paginationClicked = 4;
        }
    })
    document.getElementById('scrollLeft').addEventListener('click', function(){
        paginationClicked--;
        if(paginationClicked >= 1) {
            for(let i = 0; i < box.length; i++) {
                box[i].classList.remove('page-active')
            }
            box[paginationClicked-1].classList.add('page-active');
            parent.innerHTML = '';
            generateTerms(paginationClicked-1)
        } else {
            paginationClicked = 1;
        }
    })
  }
}
