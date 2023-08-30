$(window).on('load', () => {
    // ロードされたとき
        console.log('loadイベントが発生しました');
});

$(function() {
    $(window).on('scroll', () => {
        // スクロールされたとき
            console.log('scrollイベントが発生しました');
    });
});