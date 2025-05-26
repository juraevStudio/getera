// Animation Start
setTimeout(function() {
    $(".main").addClass("open");
}, 3500);
setTimeout(function() {
    $(".getera_bg").addClass("none");
}, 5000);

// Burgir
$(".btn_burgir").click(function() {
    var thisClass = $(this);
    if(thisClass.hasClass('active')) {
        $(".menu_bar").addClass("opacity");
        thisClass.removeClass("active");
        setTimeout(function() {
            $(".menu_bar").removeClass("open");
            thisClass.removeClass("one");
        },300);
        setTimeout(function() {
            $(".menu_bar").removeClass("opacity");
        },600);
    } else {
        $(".menu_bar").addClass("open");
        thisClass.addClass("one");
        setTimeout(function() {
            thisClass.addClass("active");
        },300);
    }
});
$(".menu_bar .item").click(function() {
    $(".menu_bar").addClass("opacity");
    $(".btn_burgir").removeClass("active");
    setTimeout(function() {
        $(".menu_bar").removeClass("open");
        $(".btn_burgir").removeClass("one");
    },300);
    setTimeout(function() {
        $(".menu_bar").removeClass("opacity");
    },600);
});

// crumbs
$("#link-main").click(function() {
    $( ".fp-sr-only:contains('section1')" ).click();
});
$("#link-services").click(function() {
    $( ".fp-sr-only:contains('section2')" ).click();
});
$("#link-about").click(function() {
    $( ".fp-sr-only:contains('section4')" ).click();
});
$("#link-contact").click(function() {
    $( ".fp-sr-only:contains('section6')" ).click();
});

// arrows
$("#btn_up").click(function() {
    var nextPage = $("#fp-nav ul li a.active").parent("li").prev("li").children("a").children("span");
    nextPage.click();
});
$("#btn_down").click(function() {
    var nextPage = $("#fp-nav ul li a.active").parent("li").next("li").children("a").children("span");
    nextPage.click();
});

// Scroll animation Bg
function scrollAnimation (scrollEvent) {
    $(document).on(scrollEvent, function(e){
        setTimeout(function() {
            if($(".section2").hasClass('active')) {
                $(".section1").addClass("bg-bottom");
            };
            if($(".section3").hasClass('active')) {
                $(".section4").addClass("bg-top");
            };
            if($(".section4").hasClass('active')) {
                $(".section5").addClass("bg-top");
            };
            if($(".section5").hasClass('active')) {
                $(".section4").addClass("bg-bottom");
                $(".section6").addClass("bg-top");
            };
            if($(".section6").hasClass('active')) {
                $(".section5").addClass("bg-bottom");
            };
            function deleteClassBg (className) {
                if($(className).hasClass('active')) {
                    $(className).removeClass("bg-top");
                    $(className).removeClass("bg-bottom");
                }
            };
            deleteClassBg(".section1");
            deleteClassBg(".section4");
            deleteClassBg(".section5");
            deleteClassBg(".section6");
            if ($(".section1").hasClass('active')) {
                $("#btn_up").addClass("opacity");
                $(".mobile_soc").removeClass("opacity");
                setTimeout(function() {
                    $(".mobile_soc").removeClass("active");
                }, 300);
            } else {
                $(".mobile_soc").addClass("active");
                setTimeout(function() {
                    $(".mobile_soc").addClass("opacity");
                }, 100);
                $("#btn_up").removeClass("opacity");
            }
            if ($(".page_last").hasClass('active')) {
                $("#btn_down").addClass("opacity");
            } else {
                $("#btn_down").removeClass("opacity");
            }
        }, 10);
    });
}
scrollAnimation('wheel');
scrollAnimation('click');
scrollAnimation('touchstart');
