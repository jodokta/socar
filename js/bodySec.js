
writingArticle("24시간 언제나", "한밤중이나 주말에도 스마트폰으로<br> 시간에 구애받지 않고<br> 쏘카와 함께 이동하세요.", "/img/usp_a.jpg", "차 옆에서 웃는 남자");
writingArticle("원하는 곳에서", "내 주변 3분 거리 쏘카존에서<br> 혹은 내가 있는 곳으로 쏘카를 불러<br> 어디서나 편하게 출발하세요.", "/img/usp_b.jpg", "차에 기댄 남녀");
writingArticle("필요한 시간만큼", "간단한 장보기부터 주말여행까지<br> 10분 단위로 원하는 만큼만 이용하세요.", "/img/usp_c.jpg", "트렁크에 과자를 담는 남녀");
writingArticle("다양한 차종을", "연인과의 드라이브부터 가족 캠핑까지<br> 상황에 맞게 50여 종의 차량을<br> 선택해서 이용하세요.", "/img/usp_d.jpg", "주차장에 주차한 차 3대");
makedot()
function writingArticle(h2, p, src, alt){
    document.write(`<article class = "standby"><h2>${h2}</h2><p>${p}</p><figure><img src="${src}" alt="${alt}"></figure></article>`);
}

function makedot(){
    const afterElement = document.createElement("span"); // <span></span> 생성
    afterElement.classList.add("afterh2"); // 클래스 추가
    const h2s = document.querySelectorAll("h2");
    h2s.forEach(h2 => {
        const newAfterElement = afterElement.cloneNode();
        h2.appendChild(newAfterElement);
    });
}

