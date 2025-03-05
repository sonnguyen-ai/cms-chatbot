var buildAIChatbot = function () {
    return this.Init();
}

buildAIChatbot.prototype = {
    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        if (document.querySelector('#btn-add-web-url')) {
            document.querySelector('#btn-add-web-url').addEventListener('click', this.AddNewWebURL);
        }

        this.InitialBottomValue();
        this.InitialRightValue();

        if (document.querySelector('#btn-open-chatbot')) {
            document.querySelector('#btn-open-chatbot').addEventListener('click', this.OpenChatBotPopup);
        }
    },
    InitialBottomValue: function () {
        const rangeInput = document.querySelector("#txt-bottom-position");
        const rangeValue = document.querySelector("#txt-bottom-value");

        // Cập nhật số khi di chuyển thanh trượt
        rangeInput.addEventListener("input", function () {
            rangeValue.value = this.value;
        });

        // Đặt giá trị ban đầu
        rangeInput.value = 50; // Giá trị mặc định
        rangeValue.value = rangeInput.value;
    },
    InitialRightValue: function () {
        const rangeInput = document.querySelector("#txt-right-position");
        const rangeValue = document.querySelector("#txt-right-value");

        // Cập nhật số khi di chuyển thanh trượt
        rangeInput.addEventListener("input", function () {
            rangeValue.value = this.value;
        });

        // Đặt giá trị ban đầu
        rangeInput.value = 50; // Giá trị mặc định
        rangeValue.value = rangeInput.value;
    },
    AddNewWebURL: function () {
        let itemCount = document.querySelectorAll('.web-url-item').length;
        let firstItemHTML = document.querySelectorAll('.web-url-item')[0].outerHTML;
        let lastItemHTML = firstItemHTML.replace('id="txt-web-url-1', 'id="txt-web-url-' + (itemCount + 1));
        lastItemHTML = lastItemHTML.replace('chk-web-url-1', 'chk-web-url-' + (itemCount + 1)).replace('chk-web-url-1', 'chk-web-url-' + (itemCount + 1));
        lastItemHTML = lastItemHTML.replace('Please enter your Web URL 1', 'Please enter your Web URL ' + (itemCount + 1));

        document.querySelectorAll('.web-url-item')[itemCount - 1].outerHTML += lastItemHTML;
    },
    OpenChatBotPopup: function () {
        if (document.querySelector('.chat-wrapper')) {
            if (document.querySelector('.chat-wrapper').style.display == 'none') {
                document.querySelector('.chat-wrapper').style.display = '';
            } else {
                document.querySelector('.chat-wrapper').style.display = 'none';
            }
        }
    }
}
var buildAIChatbot = buildAIChatbot;
buildAIChatbot.constructor = buildAIChatbot;