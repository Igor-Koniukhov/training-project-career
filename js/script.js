// Мой учебный проект. Отработка навыков работы с JS


$(function () {
    $(".lang-block__item").on('click', function () {
        $(".lang-block__item").removeClass("active");
        $(this).addClass("active");
    })
    $(".nuv-block__dropdown").on('click', function () {
        $(".nuv-block__reference").removeClass("nuv-block__reference_active");
        $(this).children(".nuv-block__reference").addClass("nuv-block__reference_active");
    })
    $(".header-content__list").on('click', function () {
        $(".header-content__list").removeClass("header-content__list_active");
        $(this).addClass("header-content__list_active");
    })
    // работа с табами переключение вкладом и добавление красного маркера который стоит на ::before
    $(".tab").on('click', function () {
        $(".tab").removeClass("tab-active");
        $(this).addClass("tab-active")
        var num = $(this).index();
        $(".block-tabs").removeClass("block-tabs_active");
        $(".block-tabs").eq(num).addClass("block-tabs_active");

    }) // раскрытие и закрытие аккордиона на клик (здесь можно было бы использовать sledeToggle)
    $(".accordion-header-button").on('click', function () {
        $(this).toggleClass("accordion-header-button_active");
        $(this).parent(".block-tabs__accordion-header").parent(".block-accordion").toggleClass("block-accordion_active");
    })
});

/* функция при изменениии размера окна добавляет активный класс к кнопке меню
кнопка меню с активным классом переключает видимость контекста меню при заданном размере window*/
function myFunction(x) {
    if (x.matches) {
        $(".logo-block__item").addClass("logo-block__item_active")
        $(".nuv-block").addClass("nuv-block_active")
        $(".nuv-block").css('display', 'none');
    } else {
        $(".logo-block__item").removeClass("logo-block__item_active")
        $(".nuv-block").removeClass("nuv-block_active")
        $(".nuv-block").css('display', 'flex');
    }

}
let x = window.matchMedia('(max-width: 991.98px)')
myFunction(x)
x.addListener(myFunction)
/*раскрытие выпадающего списка в хедере по средствам slideToggle. Здесь необходима была корректировка работы через добавления css сойств, поскольку slideToggle - display: inline; на расширение экрана добавил (выше в коде) display: flex;  и на уменьшение экрана display: none;. Добавил работая с devtools responsiv для корректного отображения при работе. На практике с размера на размер экрана не перескакивают.*/
$(".logo-block__item:last-child").on('click', function () {
    if ($(".logo-block__item").hasClass("logo-block__item_active")) {
        $(".nuv-block_active").slideToggle("slow");
    }
})

/* слайдер-аккардион из пяти слайдов. Поведение: На первый клик картинка растягивается на 70%, остальные сжимаются на 10%. При повторном клике все слайды приобретают первоначальное положение. При клике на сжатый слайд - кликаемый растягивается на 70%, остальные сжимаются до 10%.*/
$(function () {
    $(".main-picture").on('click', function () {
        $(".ant-info").addClass("ant-info_active")
        if ($(this).hasClass("main-picture_full-size")) {
            $(".main-picture").removeClass("main-picture_full-size").removeClass("main-picture_min-size"); //эта часть кода относится к востановлению первоначального размера слайдов

            $(".ant-info").removeClass("ant-info_active").removeClass("ant-info_body-content-active"); //эта часть кода относится к поведению надписей на слайдах -изменение размеров и положения
            $(".ant-info__title").removeClass("ant-info__title_body-content-active");
            $(".ant-info__description").removeClass("ant-info__description_body-content-active");
            $(this).children(".ant-info").children(".button_transparent-with-arrow-white").addClass("hidden");
            $(".container-main-text-5p").addClass("visible"); //эта строка отвечает за появление заголовка когда контейнеры находятся с средних размерах


        } else {
            $(".main-picture").removeClass("main-picture_full-size").addClass("main-picture_min-size");
            $(this).removeClass("main-picture_min-size").addClass("main-picture_full-size"); // эта часть кода относится к слайдам и изменяет размеры - кликаемый увеличивается, остальные сжимаются
            $(".ant-info").removeClass("ant-info_body-content-active") // манипуляция с размерами и снятием стилей отвечающих за размеры и положение надписей на слайдах
            $(this).children(".ant-info").removeClass("ant-info_active").addClass("ant-info_body-content-active");
            $(".ant-info__title").removeClass("ant-info__title_body-content-active");
            $(".ant-info__description").removeClass("ant-info__description_body-content-active");
            $(this).children(".ant-info").children(".ant-info__title").addClass("ant-info__title_body-content-active");
            $(this).children(".ant-info").children(".ant-info__description").addClass("ant-info__description_body-content-active");
            $(".button_transparent-with-arrow-white").addClass("hidden");
            $(this).children(".ant-info").children(".button_transparent-with-arrow-white").removeClass("hidden");
            $(".container-main-text-5p").removeClass("visible");


            var i = 0; // фрагмент кода с изспользованием затухания-появления заглавного текста в горизонтальном хедере-аккардионе
            while (i < 3) {
                if ($(".ant-info__title").hasClass("ant-info__title_body-content-active")) {
                    var fadeTitle = document.querySelector(".ant-info__title_body-content-active");
                    $(fadeTitle).fadeOut(500).fadeIn(500);
                    i++
                }
            }
        }
    })

})



$(function () {
    $(".button_transparent-with-arrow-white").on('click', function (Event) {
        Event.stopPropagation();
    })
})
