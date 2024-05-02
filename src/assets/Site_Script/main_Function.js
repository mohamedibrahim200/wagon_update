$(".menu").click(function() {
    $(this).toggleClass('open');
    $('.main-nav-container').slideToggle(500)
});


$(document).mouseup(e => {
    if (!$('.menu_item .menu_item_link').is(e.target) // if the target of the click isn't the container...
        &&
        $('.menu_item .menu_item_link').has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('.menu_item .menu_item_link').removeClass('actColor');
        $('.menu_item .menu_item_link').next('.submenu').slideUp('acSubPro');
    }
});

$('.menu_item .menu_item_link').click(function() {
    $(this).toggleClass('actColor');
    $('.main-nav .menu_item .menu_item_link').not($(this)).removeClass('actColor');
})


$('.menu_item .menu_item_link ').click(function() {
        $(this).next('.submenu').slideToggle('acSubPro');
        $('.menu_item .menu_item_link ').not($(this)).next('.submenu').slideUp('acSubPro');
    })
    // $('.menu_item .menu_item_link ').click(function() {
    //     $(this).next('.submenu').toggleClass('acSubPro');
    //     $('.menu_item .menu_item_link ').not($(this)).next('.submenu').removeClass('acSubPro');
    // })

$('.subTitle_ADS_DE .container_search_add .inputsearch a').click(function() {
        $('.searchWidth').toggleClass('withInput');

    })
    // $("body").on("click", function(e) {
    //     var $target = $(e.target);
    //     if (!$target.parents().hasClass(".inputsearch a")) {
    //         $(".searchWidth").removeClass("withInput");
    //     }
    // });

/*============== Start Dynamic Tab ==============*/
$('.tap_item').on('click', function() {
    $(this).addClass('tap_item_active').siblings().removeClass('tap_item_active');

    $('.content_tap > div').hide();
    $($(this).data('content')).fadeIn();
});
/*============== End Dynamic Tab ==============*/

$('.select').on('click', function() {
    var options = $(this).siblings('.options');
    $('.select .arrowMenu').toggleClass('rotate');
    options.slideToggle(300, function() {
        options.toggleClass('dropdown-active d-block');
    });
    options.find('span').on('click', function() {
        options.removeClass('dropdown-active d-block');
        options.slideUp(300);
        $(".select .arrowMenu").removeClass("rotate");
    });

    $('.select').not(this).siblings('.options').removeClass('dropdown-active d-block').slideUp(300);;
    $('.select').not(this).find('.arrowMenu').removeClass('rotate');
});

$("html").on("click", function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass("select_warpper")) {
        $(".options").slideUp(300);
        $(".options").removeClass("dropdown-active d-block");
        $(".select .arrowMenu").removeClass("rotate");
    }
});




/*============== Start Two points Range ==============*/


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

var swiper = new Swiper(".taps_swiper_container", {
    slidesPerView: 6,
    spaceBetween: 15,
    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 15,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});


/*============== Start product Tab ==============*/
$('.head_details_item').on('click', function() {
    $(this).addClass('head_details_item_active').siblings().removeClass('head_details_item_active');

    $('.content_tap > div').hide();
    $($(this).data('content')).fadeIn();
});
/*============== End product Tab ==============*/


// Collapse & Expand Details
// $('.collapse-trigger img').addClass('flip-img');
// $('.collapse-trigger img').first().removeClass('flip-img');



$('.collapse-container').hide();

$('.collapse-trigger').on('click', function() {
    $(this).next('.collapse-container').slideToggle(200);
    $('.collapse-trigger ').not($(this)).next('.collapse-container ').slideUp();
});

$('.collapse-trigger').click(function() {
    $(this).toggleClass('activeCollapse');
    $('.collapse-trigger').not($(this)).removeClass('activeCollapse');
})

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#FFD600', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#FFD600', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
    }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#FFD600', toSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromInput.value = from;
    }
}

function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#FFD600', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
        toInput.value = from;
        toSlider.value = from;
    }
}

function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
to right,
${sliderColor} 0%,
${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0) {
        toSlider.style.zIndex = 2;
    } else {
        toSlider.style.zIndex = 0;
    }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#FFD600', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);


/*============== End Two points Range ==============*/