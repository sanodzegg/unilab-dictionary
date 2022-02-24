const data = [
    {
        id: 0,
        titleEng: 'Project management 0',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'პროექტისმენეჯმენტი'],
        iconPath: '../media/svg/term-cards/term-icon-1.svg'
    },
    {
        id: 1,
        titleEng: 'Project management 1',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'პროექტისმენეჯმენტი'],
        iconPath: '../media/svg/term-cards/term-icon-2.svg'
    },
    {
        id: 2,
        titleEng: 'Project management 2',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'პროექტისმენეჯმენტი'],
        iconPath: '../media/svg/term-cards/term-icon-3.svg'
    },
    {
        id: 3,
        titleEng: 'Project management 3',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'პროექტისმენეჯმენტი']
    },
    {
        id: 4,
        titleEng: 'Project management 4',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'პროექტისმენეჯმენტი']
    },
    {
        id: 5,
        titleEng: 'Project management 5',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'პროექტისმენეჯმენტი']
    },
    {
        id: 6,
        titleEng: 'Project management 6',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'პროექტისმენეჯმენტი']
    },
    {
        id: 7,
        titleEng: 'Project management 7',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'პროექტისმენეჯმენტი']
    },
    {
        id: 8,
        titleEng: 'Project management 8',
        titleGeo: 'პროექტის მენეჯმენტი',
        Description: 'ადამიანური, მატერიალური და დროითი რესურსების დაგეგმვა',
        hashTags: ['გრაფიკულიდიზაინი', 'პროექტისმენეჯმენტი']
    },
]
if (document.location.pathname == '/dictionary.html') {
    let alphabet = ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ'];
    alphabet.forEach((letter) => {
        let child = document.createElement('span');
        child.setAttribute('class', 'al-letter');
        child.innerText = letter;
        document.querySelector('.alphabet-wrapper').appendChild(child)
    })
  


}
if(document.location.pathname == '/index.html') {
    const cardsWrapper = document.querySelector('.term-cards-wrapper')
    const dataToRender = data.filter(item => item.id  < 3) 
    
    dataToRender.forEach((element) => {
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

