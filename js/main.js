const data = [
    {
        id: 0,
        titleEng: 'Project management',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'frontend'],
        iconPath: '../media/svg/term-cards/term-icon-1.svg',
        keyword: 'frontend'
    },
    {
        id: 1,
        titleEng: 'Project manager',
        titleGeo: 'პროექტის მენეჯერი',
        Description: ' PM, ერთ-ერთი მთავარი მონაწილე პროექტში. მისი როლი არის',
        hashTags: ['გრაფიკულიდიზაინი', 'wordpress'],
        iconPath: '../media/svg/term-cards/term-icon-2.svg',
        keyword: 'wordpress'
    },
    {
        id: 2,
        titleEng: 'ICT Project',
        titleGeo: 'ICT პროექტი',
        Description: 'ICT იშიფრება, როგორც ინფორმაციული და საკომუნიკაციო როგორც ინფორმაციული და საკომუნიკაციო',
        hashTags: ['გრაფიკულიდიზაინი', 'python'],
        iconPath: '../media/svg/term-cards/term-icon-3.svg',
        keyword: 'python'
    },
    {
        id: 3,
        titleEng: 'Project management 3',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'frontend'],
        iconPath: '../media/svg/term-cards/term-icon-1.svg',
        keyword: 'frontend'
    },
    {
        id: 4,
        titleEng: 'Project management 4',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'wordpress'],
        iconPath: '../media/svg/term-cards/term-icon-2.svg',
        keyword: 'wordpress'
    },
    {
        id: 5,
        titleEng: 'Project management 5',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'python'],
        iconPath: '../media/svg/term-cards/term-icon-3.svg',
        keyword: 'python'
    },
    {
        id: 6,
        titleEng: 'Project management 6',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'frontend'],
        iconPath: '../media/svg/term-cards/term-icon-1.svg',
        keyword: 'frontend'
    },
    {
        id: 7,
        titleEng: 'Project management 7',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'wordpress'],
        iconPath: '../media/svg/term-cards/term-icon-2.svg',
        keyword: 'wordpress'
    },
    {
        id: 8,
        titleEng: 'Project management 8',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'python'],
        iconPath: '../media/svg/term-cards/term-icon-3.svg',
        keyword: 'python'
    },
]
const alphabetArrGeo = ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ']
const alphabetArrEng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const cardsWrapper = document.querySelector('.term-cards-wrapper')
if (document.location.pathname == '/unilab-dictionary/index.html') {
    const dataToRender = data.filter(item => item.id < 3)

    renderData(dataToRender)
}
if (document.location.pathname == '/unilab-dictionary/dictionary.html') {
    const alphabetWrapper = document.querySelector('.alphabet-wrapper')
    const searchFilter = document.querySelector('#filter')
    
    
    alphabetGenerator(alphabetArrGeo)
    lettersOnClick()
    const switchFace = document.querySelector('.switch-face')
    const switchTextEng = 'ENG'
    const switchTextGeo = 'ქარ'
    switchFace.innerText = switchTextEng

    switchFace.addEventListener('click', () => {
        if (switchFace.innerText == switchTextEng) {
            switchFace.innerText = switchTextGeo
            alphabetWrapper.innerText = ''
            alphabetGenerator(alphabetArrEng)
            lettersOnClick()
        }
        else {
            switchFace.innerText = switchTextEng
            alphabetWrapper.innerText = ''
            alphabetGenerator(alphabetArrGeo)
            lettersOnClick()
        }

    })
    
    const dataToRender = data.filter(item => item.id < 10)

    renderData(dataToRender)

    searchFilter.addEventListener('click', () => {
        const searchFilterData = data.filter(item => item.keyword ==searchFilter.value)
        if(searchFilter.value !== 'default'){
            cardsWrapper.innerHTML = ''
            renderData(searchFilterData)
            console.log(searchFilter.value)
            console.log(searchFilter)
            console.log(searchFilterData)
        }
        
    })

    const search = document.querySelector('#dictionary-search')
    search.addEventListener('keyup', (e) => {
        cardsWrapper.innerHTML = ''
        const filteredData = data.filter(item => item.titleEng.includes(e.target.value) || item.titleGeo.includes(e.target.value))
        renderData(filteredData)

    })

    function alphabetGenerator(alphabetArray) {
        alphabetArray.forEach((letter) => {
            const letterSpan = document.createElement('span')
            letterSpan.setAttribute('class', 'letter-box')
            letterSpan.innerText = letter
            alphabetWrapper.append(letterSpan)
            letterSpan.addEventListener('click', (e) => {
               console.log(e.target);
            })
        })
    }

    function lettersOnClick() {
        const letterBoxes = document.querySelectorAll('.letter-box')
        letterBoxes.forEach(letterBox => {
            letterBox.addEventListener('click', function () {
                letterBoxes.forEach(letter => letter.classList.remove('active-letter'))
                letterBox.classList.add('active-letter')
            })
        })
    }

}









function renderData(array) {
    array.forEach((element) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'term-card')
        cardsWrapper.append(card)
        card.innerHTML = `
                  <div class="card-header">
                      <span class="term-icon">
                          <img src="${element.iconPath}" alt="third icon">
                      </span>
                      <h3 class="term-header-title"><span class="bold">${element.titleEng} -</span><span>${element.titleGeo}</span></h3>
                  </div>
                  <div class="card-body">
                      <p class="term-description">${element.Description}</p>
                  </div>
                  <div class="card-footer">
                      <div class="hashtag-keywords">
                          <span>#${element.hashTags[0]}</span>
                          <span>#${element.hashTags[1]}</span>
                      </div>
                      <div class="button-wrapper">
                          <a href="#" class="see-details">ნახე სრულად</a>
                      </div>
                  </div>
    `
    })
}
