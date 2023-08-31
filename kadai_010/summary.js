$(function(){
    // ボタンを押すと色が変わる
    $('#change-color').on('click', () => {
        $('#target').css('color', 'red');
    });

    // ボタンを押すと文字内容が変わる
    $('#change-text').on('click', () => {
        $('#target').text('Hello!');
    });

    // ボタンを押すとフェードアウトで文字が消える
    $('#fade-out').on('click', () => {
        $('#target').fadeOut();
    });

    // ボタンを押すとフェードインで文字が現れる
    $('#fade-in').on('click', () => {
        $('#target').fadeIn();
    });
});