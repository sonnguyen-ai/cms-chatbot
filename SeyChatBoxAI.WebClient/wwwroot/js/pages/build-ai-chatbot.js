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
    },
    AddNewWebURL: function () {
        let itemCount = document.querySelectorAll('.web-url-item').length;
        let firstItemHTML = document.querySelectorAll('.web-url-item')[0].outerHTML;
        let lastItemHTML = firstItemHTML.replace('id="txt-web-url-1', 'id="txt-web-url-' + (itemCount + 1));
        lastItemHTML = lastItemHTML.replace('chk-web-url-1', 'chk-web-url-' + (itemCount + 1)).replace('chk-web-url-1', 'chk-web-url-' + (itemCount + 1));
        lastItemHTML = lastItemHTML.replace('Please enter your Web URL 1', 'Please enter your Web URL ' + (itemCount + 1));

        document.querySelectorAll('.web-url-item')[itemCount - 1].outerHTML += lastItemHTML;
    }
}
var buildAIChatbot = buildAIChatbot;
buildAIChatbot.constructor = buildAIChatbot;