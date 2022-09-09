if (window.getComputedStyle( document.body ,null).getPropertyValue('color') == "rgb(221, 221, 221)") {
    elements = document.querySelectorAll("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#101010";
        elements[i].style.color="#ddd";
    document.getElementById("kmv-logo").src = "https://i.imgur.com/gtNsxih.png";
    }
}
if (window.getComputedStyle( document.body ,null).getPropertyValue('color') == "rgb(112, 112, 112)") {
    const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());
    remove(".pb-5.mt-4.m-3.p-4.social-media-section.socials"); // remove social section from home page
    elements = document.querySelectorAll("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background="#101010";
        elements[i].style.color="#ddd";
        $("img[src='/static/media/kmv.ef0e3a3e.png'").attr("src","https://i.imgur.com/gtNsxih.png");
}
    }
function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }