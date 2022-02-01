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