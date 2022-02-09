if(document.location.pathname == '/unilab-dictionary/dictionary.html'){
    let alphabet = ['ა','ბ','გ','დ','ე','ვ','ზ','თ','ი','კ','ლ','მ','ნ','ო','პ','ჟ','რ','ს','ტ','უ','ფ','ქ','ღ','ყ','შ','ჩ','ც','ძ','წ','ჭ','ხ','ჯ','ჰ'];
    alphabet.forEach((letter)=> {
    let child = document.createElement('span');
    child.innerText = letter;
    document.querySelector('.alphabet-wrapper').appendChild(child)
})
let lchange = document.createElement('span');
lchange.className = 'lchange';
lchange.innerText = 'ENG'
document.querySelector('.alphabet-wrapper').appendChild(lchange)
let parent = document.querySelector('.pagination-parent');
window.onload = function() {
    generateTerms(1);
    if(Object.keys(terms).length > 1) {
        generatePages();
        document.querySelector('.page-el').classList.add('page-active')
    }
}
// 
let cardHeader = 'testhead';
let cardBody = 'testdesc';
let hashtag = 'hashtagdesc';
// 
let terms = {
    0 : {
        0 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        1 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        2: {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        }
    },
    1 : {
        0 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${'First'}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        1 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        2: {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        }
    },
    2 : {
        0 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${'Second'}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        1 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        2: {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        }
    },
    3 : {
        0 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${'Third'}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        1 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        2: {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        }
    },
    4 : {
        0 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${'Fourth'}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        1 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        2: {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        }
    },
    5 : {
        0 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${'Fifth'}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        1 : {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        },
        2: {
            main : {
                0 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                1 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                },
                2 : {
                    content : 
                    `
                    <div class="card-header">
                        <h3><span class="bold">${cardHeader}</span></h3>
                    </div>
                    <div class="card-body">
                        <p class="term-descriptioin">${cardBody}</p>
                    </div>
                    <div class="card-footer">
                        <div class="hashtag-keywords">
                            <span>#${hashtag}</span>
                            <span>#${hashtag}</span>
                        </div>
                        <div class="button-wrapper">
                            <a href="#" class="see-details">ნახე სრულად</a>
                        </div>
                    </div>
                    `
                }
            }
        }
    }
}

function generateTerms(val) {
    for(let i = 0; i < Object.keys(terms[val]).length; i++) {
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'term-cards-wrapper');
        parent.appendChild(wrapper);
        for(let a = 0; a < Object.keys(terms[val]).length; a++) {
            let main = document.createElement('div');
            main.setAttribute('class', 'term-card-main');
            wrapper.appendChild(main);
            main.innerHTML = terms[val][i].main[i].content;
        }
    }
}

let paginationClicked = 1;

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
        for(let i = 0; i < Object.keys(terms).length - 1; i++) {
            let page = document.createElement('span');
            page.setAttribute('class', 'page-el');
            page.innerText = i+1;
            pgParent.appendChild(page);
        }
        let box = document.querySelectorAll('.page-el');
        box[paginationClicked-1].classList.add('page-active');
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
    })
    document.getElementById('scrollRight').addEventListener('click', function(){
        paginationClicked++;
        if(paginationClicked <= 4) {
            for(let i = 0; i < box.length; i++) {
                box[i].classList.remove('page-active')
            }
            box[paginationClicked-1].classList.add('page-active');
            parent.innerHTML = '';
            generateTerms(paginationClicked)
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
            generateTerms(paginationClicked)
        } else {
            paginationClicked = 1;
        }
    })
  }
}
