const { ipcRenderer } = require('electron')
console.log("hi")

function inject(){

    let loop = "https://loop.loop"
    if (loop !== window.location.href) {
        ipcRenderer.on('asynchronous-reply', (_event, arg) => {
            console.log(arg)
          })
        ipcRenderer.send('asynchronous-message', true)
    }

    try {
        document.getElementById("top-navbar").remove(); // reomve navigation bar
        document.getElementById("main").style.marginTop = "0px";
    } catch {
        function rmTopNav() {
            let inid = document.querySelectorAll('.our-blog-section');
            let inid2 = document.querySelectorAll('.pt-265p.pt-md-200p');
            for (var i = 0; i < inid.length; i++)
                inid[i].id = 'topnavspc';
            for (var i = 0; i < inid2.length; i++)
                inid2[i].id = 'topnavspc_aip';
            document.querySelectorAll('.position-fixed').forEach(function(a){a.remove()})
            try {
                document.getElementById("topnavspc").style.paddingTop = "0px";
            } catch {
                document.getElementById("topnavspc_aip").style.paddingTop = "13px";
            }
        };
        rmTopNav();
    };
};

setTimeout(function(){ inject();}, 450);