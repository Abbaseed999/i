
class Browser{
    constructor(){
        this.ua = navigator.userAgent
        // Blink engine detection
        this.isBlink = (isChrome || isOpera) && !!window.CSS;
        // Opera 80+
        this.isOpera = (!!window.opr && !!opr.addons) || !!window.opera || ua.indexOf(' OPR/') >= 0;
        // Firefox 93.0+
        this.isFirefox = typeof InstallTrigger !== 'undefined';
        // Safari 15.0+ "[object HTMLElementConstructor]"
        this.isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
        // Internet Explorer 6-11
        this.isIE = /*@cc_on!@*/false || !!document.documentMode;
        // Edge 20+
        this.isEdge = (!isIE && ua.indexOf("Edg") != -1);
        // Chrome 1 - 95
        this.isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        // Edge (based on chromium) detection
        this.isEdgeChromium = isChrome && this.isEdge;
        // iPhone
        this.isiPhone = !!ua.match(/iPhone/i);
        // iPad
        this.isiPad = !!ua.match(/iPad/i);
        // iOS (iPhone, iPad)
        this.isiOS = this.isiPhone || this.isiPad;
        // detect the browser based on webkit (like BlackBerry Browser, PlayStation consoles beginning from the PS3, the Tizen mobile operating systems, and a browser included with the Amazon Kindle e-book reader)
        this.isWebkit = !!ua.match(/WebKit/i);
        // detect Crios (Chrome on iOS)
        this.isChromeiOS = iOS && webkit && !ua.match(/CriOS/i);
        //windows
        this.isWin = navigator.userAgent.indexOf("Win") != -1
        // Mac
        this.isMac = navigator.userAgent.indexOf("Mac") != -1
        // UNIX OS
        this.isUnix = navigator.userAgent.indexOf("X11") != -1
        // linux
        this.isLinux = navigator.userAgent.indexOf("Linux") != -1
        // linux
        this.isAndroid = navigator.userAgent.indexOf("Android") != -1
    }
    function getBrowser(){
        let b = isOpera
                ?"opera"
            :isFirefox
                ?"firefox"
            :iOSSafari
                ?"safariMobile"
            :isSafari
                ?"safari"
            :isIE
                ?"internetExplorer"
            :isEdge
                ?"edge"
            :isChrome
                ?"chrome"
            : "undefined";

        if(b == "undefined"){
            return this.getMainTech()
        }
        return b;
    }
    function getMainTech(){
        let mt = isBlink
                    ?"blink"
                :isOpera
                    ?"opera"
                :isChrome
                    ?"chromium"
                :isWebkit
                    ?"blink"
                :isFirefox
                    ?"firefox"
        return mt
    }
    function deviceType(){
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }else if(/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){
            return "bot";
        }
        return "pc";
    }
    function mobileBrand() {
        if(this.deviceType() == "mobile"){
            return {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }
            }
        }
    }
    function getInternet(){
        if(this.getBrowser() == "firefox" ||this.getBrowser() == "safariMobile" ||this.getBrowser() == "safari" ||this.getBrowser() == "internetExplorer" ){
            //navigator.connection don't work on firefox, safari and IE
            return null;
        }
        return navigator.connection;
    }
    function mobileOrTablet(){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
            return true;
        }
    }
    // os
    function getOS() {
        return  this.isWin
                    ? "windows"
                :this.isMac
                    ? "macintosh"
                :this.isUnix
                    ? "unix"
                :this.isLinux
                    ? "linux"
                :this.isiOS
                    ? "ios"
                :this.isAndroid
                    ? "android"
    }
    function getBits() {
        if(this.getOS() == "windows"){
            if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1 ){
                return "64"
            }
            return "32"
        }
        return null
    }
    function getVersion() {
        return navigator.appVersion.split("NT")[1].split(";")[0].trim()
    }
    // ! os
    function getTimezone() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    function getTime() {
        new Date().toLocaleString('en-US', { timeZone: getTimezone() })
    }
    function GetJson() {
        return {
            browserName : this.getBrowser(),
            mainBrowser : this.getMainTech(),
            deviceType : this.deviceType(),
            mobileBrand : this.mobileBrand(),
            internet : this.getInternet(),
            mobileOrTablet : this.mobileOrTablet(),
            os : this.getOS(),
            bit : this.getBits(),
            version : this.version(),
            timezone : this.timezone(),
            time : this.time(),
            getLangs : this.getLangs(),
            getPlungins : this.getPlungins(),
            isBlink : this.isBlink
            isOpera : this.isOpera
            isFirefox : this.isFirefox
            isSafari : this.isSafari
            isIE : this.isIE
            isEdge : this.isEdge
            isChrome : this.isChrome
            isEdgeChromium : this.isEdgeChromium
            isiPhone : this.isiPhone
            isiPad : this.isiPad
            isiOS : this.isiOS
            isWebkit : this.isWebkit
            isChromeiOS : this.isChromeiOS
            isWin : this.isWin
            isMac : this.isMac
            isUnix : this.isUnix
            isLinux : this.isLinux
            isAndroid : this.isAndroid
        }
    }
    /**
      * gets the languages the user use
      *
      * @return array
     */
    function getLangs(){
        return navigator.languages
    }
    function getPlungins(){
        return navigator.plugins
    }
    function RAM(){
        return navigator.deviceMemory
    }
}

export default Browser
/*
#browsers

- maxthon
- falkon
- puffin
- redcore
- Rockmelt
- Sleipnir
- WebView Android
- Samsung Internet
 */
/**
-raw: the raw ua
-type: desktop / mobile / tablet / bot / other

-browser_name
-browser_version

-platform_name
-platform_version

hardware: hstore containing memory, processor, device_model, device_name

connection: hstore containing downlink_max, connection_type

-timezone

location (country)
location (Xaxis Yaxis)
-json all
 */
