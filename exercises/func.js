function extractLanguage(string) {
  let lang = string.slice(3, 5);

  if (lang === 'US') {
    return 'Hey!'
  } else if (lang === 'GB') {
    return 'Hello!'
  } else if (lang === 'KR') {
    return 'Howdy!'
  } else {
    return 'Salut!'
  }
}

console.log(extractLanguage('en_US.UTF-8'));  
console.log(extractLanguage('en_GB.UTF-8'));  
console.log(extractLanguage('ko_KR.UTF-16')); 

console.log(extractLanguage('fr_FR.UTF-8'));