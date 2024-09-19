// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $("#map-image").on("click")
    {

    }

    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });

    $(".gift-send").click(function () {
        $("#gift-name").text($(this).data("name"));
    })


    $("#reserveGiftButton").click(function () {
        let name = $("#sender-name").val();
        let message = $("#sender-message").val();
        $("#reserveGiftButton").text("전송중...");
        $("#reserveGiftButton").prop("disabled", true);

        emailjs.init("user_yjLL5xG0A3kkOCH5BGIDh");
        emailjs.send("wedding-mail", "gift_send", {
            name: name,
            gift: $("#gift-name").text(),
            message: message
        }).then(function (response) {
            $('#giftMailModal').modal('hide');
            alert(name + "님의 메시지가 정상적으로 전송되었습니다.");

            $("#reserveGiftButton").text("예약하기!");
            $("#sender-name").val('');
            $("#sender-message").val('');
            $("#reserveGiftButton").prop("disabled", false);
        }, function (err) {
            alert("메시지 전송이 실패했습니다. 다시 시도해주세요.");
        });
    })
})

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
});




// 모든 .items 요소를 선택
const items = document.querySelectorAll('.items');

// 각 .items 요소에 클릭 이벤트 리스너 추가
items.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation(); // 클릭 이벤트의 전파를 막음
            e.preventDefault();
        })
});

const list = document.querySelectorAll('.list');

function accordion(e){
    e.stopPropagation(); 
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
    }
    else{
        for(i=0; i < list.length; i++){
          list[i].classList.remove('active');
        }
            this.classList.add('active');
        }
}
for(i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', accordion);
}



function copyToClipboard() {
   // 복사할 텍스트 선택
   var textArea = document.getElementById("hidden-text");

   // 텍스트 영역을 선택하고 복사
   textArea.select();
   document.execCommand("copy");

   // 성공 메시지 알림
   alert("계좌번호를 복사했습니다.");
}

function copyToClipboard2() {
   // 복사할 텍스트 선택
   var textArea = document.getElementById("hidden-text2");

   // 텍스트 영역을 선택하고 복사
   textArea.select();
   document.execCommand("copy");

   // 성공 메시지 알림
   alert("계좌번호를 복사했습니다.");
}

function copyToClipboard3() {
   // 복사할 텍스트 선택
   var textArea = document.getElementById("hidden-text3");

   // 텍스트 영역을 선택하고 복사
   textArea.select();
   document.execCommand("copy");

   // 성공 메시지 알림
   alert("계좌번호를 복사했습니다.");
}

function copyToClipboard4() {
   // 복사할 텍스트 선택
   var textArea = document.getElementById("hidden-text4");

   // 텍스트 영역을 선택하고 복사
   textArea.select();
   document.execCommand("copy");

   // 성공 메시지 알림
   alert("계좌번호를 복사했습니다.");
}

function copyToClipboard5() {
   // 복사할 텍스트 선택
   var textArea = document.getElementById("hidden-text5");

   // 텍스트 영역을 선택하고 복사
   textArea.select();
   document.execCommand("copy");

   // 성공 메시지 알림
   alert("계좌번호를 복사했습니다.");
}


function fadeImages() {
    const damImages = document.querySelectorAll('.box.dam .image-section img');
    const yangImages = document.querySelectorAll('.box.yang .image-section img');
    
    let damIndex = 0;
    let yangIndex = 0;
    
    function showNextImage(images, index) {
      images.forEach((img, i) => img.classList.remove('active'));
      images[index].classList.add('active');
    }
    
    setInterval(() => {
      damIndex = (damIndex + 1) % damImages.length;
      yangIndex = (yangIndex + 1) % yangImages.length;
      showNextImage(damImages, damIndex);
      showNextImage(yangImages, yangIndex);
    }, 3000);
  }
  
  window.onload = fadeImages;