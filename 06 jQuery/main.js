// ------------- DOM manipulation using vanila JS

// const list = document.getElementById('my-list');

// list.innerHTML += '<li>The last new item</li>';

// list.children[0].classList.add('important');

// for (const el of list.children) {

//     el.onmouseenter = function () {
//         this.classList.add('larger');
//     }
//     el.onmouseleave = function () {
//         this.classList.remove('larger');
//     }
// }

// ------------- using jQuery library

// syntax: $(selector).method();

const $list = $('#my-list');

$list.append('<li>New item using jQuery</li>');

$list.children().on('mouseenter', function () {
    $(this).addClass('larger');

    $(this).prev().addClass('muted');
    $(this).next().addClass('muted');
});
$list.children().on('mouseleave', function () {
    $(this).removeClass('larger');

    $(this).prev().removeClass('muted');
    $(this).next().removeClass('muted');
});

// change DOM: append prepend before after empty remove
// CSS: addClass removeClass toggleClass
// events: on off one
// access to elements: first last eq(index) lt(value) gt(value) even odd
// navigating: prev next

$list.children().eq(4).attr('title', 'Hello!');