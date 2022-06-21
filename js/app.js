        // 이미지 변경 함수
        const img_url = [
            'image/img01.jpg',
            'image/img02.jpg',
            'image/img03.jpg',
            'image/img04.jpg',
            'image/img05.jpg',
            'image/img06.jpg'
        ];

        $(function(){

            function changeBg() {
            // 0 ~ 5 랜덤값 생성(이미지 번호)
            let imgNum = Math.floor(Math.random()*6);
            console.log(imgNum);

            $('body').css({
                background: 
                 `url('image/filter-box.png'),
                 url(${img_url[imgNum]})`
            })
    }

    // setInterval (함수 , 시간ms)
    setInterval(changeBg, 5000);
});