define(function () {
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
    })();

    window.AudioContext = window.AudioContext || window.webkitAudioContext;


    jQuery.extend(String.prototype, {
        // 格式化 如c#的format
        format: function () {
            if (arguments.length === 0)
                return null;
            var str = this;
            for (var i = 0; i < arguments.length; i++) {
                var re = new RegExp('\\{' + (i) + '\\}', 'gm');
                str = str.replace(re, arguments[i]);
            }
            return str;
        },


        // 
        equalsIgnoreCase: function (value) {
            return this.toLowerCase() === value.toLowerCase();
        },

        //  转义
        htmlEncode: function () {
            var s = "";
            if (this.length === 0) return "";
            s = this.replace(/&/g, "&gt;");
            s = s.replace(/</g, "&lt;");
            s = s.replace(/>/g, "&gt;");
            s = s.replace(/ /g, "&nbsp;");
            s = s.replace(/\'/g, "&#39;");
            s = s.replace(/\"/g, "&quot;");
            s = s.replace(/\n/g, "<br>");
            return s;
        },


        getParam: function () {
            var obj = {}, name, value, pair, i;

            if (this.length === 0) return null;
            var pairs = this.split("&");
            var d = decodeURIComponent;
            var length = pairs.length;

            for (i = 0; i < length; i++) {
                pair = pairs[i].split("=");
                name = d(pair[0]);
                value = d(pair[1]);
                obj[name] = !obj[name] ? value : [].concat(obj[name]).concat(value);
            }


            return obj;
        }
    });

    return {}
});