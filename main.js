const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

// const regexp = /fox/gi;
// console.log(regexp.text(str));

console.log(str.match(/\the/gi));
// 이스케이프 문자란 \ 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말합니다.
