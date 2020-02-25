console.log(`Cześć! Jestem autorką tej strony, nazywam się Ada Dziewulska i mam 15 lat, miło, że tu zglądasz, a skoro to robisz to trochę się interesujesz JavaScript-em ;) Ja się już żegnam i życzę miłego dnia :D`); 

const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat.`)
};
welcome(`Ada`, 15);

const navigationSwitcher = document.querySelector (`.navigation__switcher--js`);

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector (`.navigation__list--js`);
    navigationList.classList.toggle(`navigation__list--visible`);
});
