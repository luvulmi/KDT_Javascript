'use strict'

alert('끝말잇기 Start');

// let word1 = 'asd'
// console.log(word1.length)

let word1, word2;
let num1;
for (; ;) {
    for (; ;) {
        word1 = prompt('처음 한글 세 글자 단어를 입력하세요!!^^');
        if (word1 === null || word2 === null || word2 === '끝') {
            if (word1 === null || word2 === null) {
                if (confirm('정말 종료하시겠습니까???')) {
                    alert('게임종료.')
                    break;
                }
            }

        } else if (word1.length !== 3) {
            alert('세 글자 단어만 입력하세요~~');
        }
    }

    if (word1 === null || word2 === null || word2 === '끝') {
        break;
    }

    if (word1) {
        alert('Ok!! 게임시작~~')
        for (let t = 0; ;) {
            word2 = prompt(`한글 세 글자 단어를 입력하세요!! 종료하려면 '끝' 입력 (이전단어 ${word1})`);
            if (word2 === null) {

                break;

            }
            else if (word2 === '끝') {
                if (confirm('정말 종료하시겠습니까?????')) {
                    alert(`${t}개의 끝말잇기를 성공하셨어요^^`)
                    break;
                }
            } else if (word2.length !== 3) {
                alert('세 글자 단어만 입력하세요~~');
            } else if (word2.slice(0, 1) == word1.slice(2, 3)) {
                word1 = word2;
                t++;
                alert('ok. excellent.');
            } else if (word2.slice(0, 1) !== word1.slice(2, 3)) {
                alert('입력한 단어의 첫말이 이전 단어의 끝말과 달라요~~ㅠㅠ')
            }
        }
    }
}