'use strict';

let inputWord, lastWord, gameNum = -1;

alert('끝말잇기 Start');

for (; ;) {
    // 게임 진행 횟수에 따라서 입력 내용이 달라짐.
    // 횟수가 0보다 작으면 처음 단어 입력.
    // 0보다 많으면 이전 단어를 보여주면서 새로운 단어 입력.
    if (gameNum < 0) {
        inputWord = prompt('처음 한글 세 글자 단어를 입력하세요!!^^');
    } else {
        inputWord = prompt(`한글 세 글자 단어를 입력하세요!! 종료하려면 "끝"이라고 입력하세요^^( 이전 단어 : ${lastWord} )`);
    }

    // 정상 입력시 (단어가 세글자일 때 실행)
    if (isNaN(inputWord) && inputWord.length === 3) {
        if (gameNum < 0) {
            // 횟수가 -1이면 게임 시작
            // 알림 띄우고 게임 횟수 +1;
            // 단어는 현재 단어를 이전 단어에 할당.
            alert('Ok!! 게임시작~~');
            lastWord = inputWord;
            gameNum++;
        } else {
            if (lastWord[2] === inputWord[0]) {
                // 이전단어 끝글자와 현재단어 첫글자 비교해서 같으면 실행. 횟수 +1;
                // 마찬가지로 현재 단어를 이전 단어에 할당.
                alert('Ok!! Excellent!');
                lastWord = inputWord;
                gameNum++;
            } else {
                // 설명 필요 없을듯.
                alert('입력한 단어의 첫말이 이전 단어의 끝말과 달라요~~ㅠㅠ');
            }
        }

        // 취소 클릭시
    } else if (inputWord === null) {
        if (confirm('정말 종료하시겠습니까?')) break;

        // 끝 입력시 (게임 횟수가 0이상이고 끝을 입력했을 때.)
    } else if (gameNum > -1 && inputWord === '끝') {
        if (confirm('정말 끝내시겠습니까?')) {
            alert(`${gameNum}개의 끝말잇기를 성공하셨어요^^`);
            break;
        }

        // 빈 문자열이나 글자 수가 안맞을 때
    } else {
        alert('세 글자 단어만 입력하세요~~');
    }
}
alert('게임 종료!!');