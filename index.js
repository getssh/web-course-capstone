const humMenu = document.querySelector('.humberger-menu');
const close = document.querySelector('.close');
const faBar = document.querySelector('.fa-bars');
const allSpeakers = document.querySelector('.speaker-wrap');

faBar.addEventListener('click', () => {
  humMenu.style.display = 'block';
  faBar.style.display = 'none';
});

close.addEventListener('click', () => {
  humMenu.style.display = 'none';
  faBar.style.display = 'block';
});

const speakersData = [
  {
    imageUrl: './images/speaker-place-holder.jpg',
    fullName: 'Nathaniel Greyson',
    jobTitle: 'Website Development Manager and professor at netflix and amazon',
    biography: 'Experienced teaching is a profession that helps people learn how to create, manage, and maintain websites. They may also teach web development principles.',
  },
  {
    imageUrl: './images/speaker2.jpg',
    fullName: 'Arthur Jaime',
    jobTitle: 'Software Development Manager and professor at google and amazon',
    biography: 'Very experienced ethical professional specializing in designing, developing, and maintaining computer systems.  and techniques to students teacher and me.',
  },
  {
    imageUrl: './images/speaker3.jpg',
    fullName: 'Noel Marshall',
    jobTitle: 'Professor of Entrepreneurial Legal Studies at Harvard computer School',
    biography: 'Software studies commons-based peer production and published his seminal book The Wealth of Networks in 2023. Teaching software engineering many students.',
  },
  {
    imageUrl: './images/speaker4.jpg',
    fullName: 'Robin Stefan',
    jobTitle: 'AI Professor of matchin learn Legal Studies at Harvard Law School',
    biography: 'Software studies commons-based peer production and published his seminal book The Wealth of Networks in 2023. Teaching software engineering many students.',
  },
  {
    imageUrl: './images/speaker5.jpg',
    fullName: 'Ricardo Paul',
    jobTitle: 'Data scientis of computers and Legal Studies at LUC software School',
    biography: 'Very experienced ethical professional specializing in designing, developing, and maintaining computer systems.  and techniques to students teacher and me.',
  },
  {
    imageUrl: './images/speaker6.jpg',
    fullName: 'Gilbert Dan',
    jobTitle: 'Teacher and speaker of Entrepreneurial cloud compute at Harvard School',
    biography: 'Experienced teaching is a profession that helps people learn how to create, manage, and maintain websites. They may also teach web development principles.',
  },
];

let speakers = '';

for (let i = 0; i < speakersData.length; i += 1) {
  const tempData = `
  <div class="speaker">
    <div class="img-wrap">
      <img src=${speakersData[i].imageUrl} alt="speaker headshot" class="speaker-image"/>
    </div>
    <div class="speaker-bio">
      <h3>${speakersData[i].fullName}</h3>
      <p class="speaker-title">${speakersData[i].jobTitle}</p>
      <p class="speaker-detail">${speakersData[i].biography}</p>
    </div>
  </div>
  `;
  speakers += tempData;
}
allSpeakers.innerHTML = speakers;

const eachSpeaker = document.querySelectorAll('.speaker');
const seeMoreBtn = document.querySelector('.mobile-btn');
const seeLessBtn = document.querySelector('.mobile-less-btn');

seeMoreBtn.addEventListener('click', () => {
  for (let i = 0; i < eachSpeaker.length; i += 1) {
    eachSpeaker[i].style.display = 'flex';
  }
  seeMoreBtn.style.display = 'none';
  seeLessBtn.style.display = 'block';
});

seeLessBtn.addEventListener('click', () => {
  for (let i = 0; i < eachSpeaker.length; i += 1) {
    if (i > 1) {
      eachSpeaker[i].style.display = 'none';
    }
  }
  seeMoreBtn.style.display = 'block';
  seeLessBtn.style.display = 'none';
});