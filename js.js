// вариант №1
const generateSingleStanza = (number) => {
    let oneVerseOfSong = '';
    let bottle = '';
    if (number === 1) {
        return oneVerseOfSong = `1 бутылка пива на стене, 1 бутылка пива!\nВозьми одну, пусти по кругу, нет бутылок пива на стене!`;
    }
    for (let i = number; i > number - 1; i--) {
        if (String(i).slice(-2) === '11' || String(i).slice(-2) === '12' || String(i).slice(-2) === '13' || String(i).slice(-2) === '14') {
            bottle = 'бутылок';
        } else if (String(i).slice(-1) === '1') {
            bottle = 'бутылка';
        } else if (String(i).slice(-1) === '2' || String(i).slice(-1) === '3' || String(i).slice(-1) === '4') {
            bottle = 'бутылки';
        } else {
            bottle = 'бутылок';
        }
        oneVerseOfSong = `${oneVerseOfSong}${i} ${bottle} пива на стене, ${i} ${bottle} пива!\n`
    }
    for (let j = number - 1; j > number - 2; j--) {
        if (String(j).slice(-2) === '11' || String(j).slice(-2) === '12' || String(j).slice(-2) === '13' || String(j).slice(-2) === '14') {
            bottle = 'бутылок';
        } else if (String(j).slice(-1) === '1') {
            bottle = 'бутылка';
        } else if (String(j).slice(-1) === '2' || String(j).slice(-1) === '3' || String(j).slice(-1) === '4') {
            bottle = 'бутылки';
        } else {
            bottle = 'бутылок';
        }
        oneVerseOfSong = `${oneVerseOfSong}Возьми одну, пусти по кругу, ${j} ${bottle} пива на стене!\n\n`;
    }
    return oneVerseOfSong;
};
const generateSongText = (number) => {
    let song = '';
    for (let i = number; i > 0; i--) {
        song += (generateSingleStanza(i));
    }
    console.log(song)
    return song;
}
generateSongText(6);
/* ---------------------------------------------------------------------------------- */
// вариант №2
const generateSongText2 = (number) => {
    let song = '';
    let bottle = '';
    for (let i = number; i > 1; i--) {
        if (String(i).slice(-2) === '11' || String(i).slice(-2) === '12' || String(i).slice(-2) === '13' || String(i).slice(-2) === '14') {
            bottle = 'бутылок';
        } else if (String(i).slice(-1) === '1') {
            bottle = 'бутылка';
        } else if (String(i).slice(-1) === '2' || String(i).slice(-1) === '3' || String(i).slice(-1) === '4') {
            bottle = 'бутылки';
        } else {
            bottle = 'бутылок';
        }
        if (song !== '') {
            song = `${song}${i} ${bottle} пива на стене!\n\n`
        }
        song = `${song}${i} ${bottle} пива на стене, ${i} ${bottle} пива!\nВозьми одну, пусти по кругу, `;
    }
    return song = `${song}1 бутылка пива на стене!\n\n1 бутылка пива на стене, 1 бутылка пива!\nВозьми одну, пусти по кругу, нет бутылок пива на стене!`;
};
console.log(generateSongText2(5));