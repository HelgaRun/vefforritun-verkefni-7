/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';

/**
 * Byrja forrit.
 */
function start() {
  alert('Halló!');
  let input = prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu "kóða" eða "afkóða"');
  if ( input == 'kóða') {
    let n = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]', 31); 
    if (n < 1 || n >= 32) {
      alert(n + ' er ekki heiltala á bilinu [1, 31]. Reyndu aftur.');
      n = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]', 31);
    }

    let str = prompt('Gefðu upp strenginn sem á að ' + input + ' með hliðrun ' + n + ' : ');
    if(str == '' || str == ' ') {
      alert('Þú gafst ekki upp streng. Reyndu aftur.');
      prompt('Gefðu upp strenginn sem á að ' + input + ' með hliðrun ' + n + ': ');
    } else {
      return alert(encode(str, n));
    }
  }

  if(input == 'afkóða') {
    let n = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]', 31); 
    if (n < 1 || n >= 32) {
      alert( n + ' er ekki heiltala á bilinu [1, 31]. Reyndu aftur.');
      n = prompt('Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]', 31);
    }
    let str = prompt('Gefðu upp strenginn sem á að ' + input + ' með hliðrun ' + n + ' : ');
    if(str == '' || str == ' ') {
      alert('Þú gafst ekki upp streng. Reyndu aftur.');
      prompt('Gefðu upp strenginn sem á að ' + input + ' með hliðrun ' + n + ': ');
    } else {
      return alert(decode(str, n));
    }
  } else {
    alert('Veit ekki hvaða aðgerð ' + input + ' er. Reyndu aftur.');
    prompt('Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða“');
  } 
}

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();


/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n) {
  let encodedstring = ""; //tómur strengur þar sem að öllum hliðruðum stöfum verður bætt í
  str = str.toUpperCase(); //gera alla stafi sem að stimplaðir eru inn að stórum stöfum
  for (let i = 0; i < str.length; i++) {
    let indexOfLetters = LETTERS.indexOf(str.charAt(i)); // skilar tölugildi stafana áður en að búið er að shifta þeim
    
    encodedstring += (LETTERS.charAt(((indexOfLetters + n)) % LETTERS.length));
  }
  return encodedstring;
}


/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n) {
  let decodedstring = ""; //tómur strengur þar sem að öllum hliðruðum stöfum verður bætt í
  str = str.toUpperCase(); //gera alla stafi sem að stimplaðir eru inn að stórum stöfum
  for (let i = 0; i < str.length; i++) {
    let indexOfLetters = LETTERS.indexOf(str.charAt(i)); // skilar tölugildi stafana áður en að búið er að shifta þeim
    decodedstring += (LETTERS.charAt((LETTERS.length + (indexOfLetters - n)) % LETTERS.length));
  }
  return decodedstring;
} 

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');

