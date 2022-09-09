const os = require("os");
const path = require('path');
const fs = require('fs')

const userHomeDir = os.homedir();
console.log(userHomeDir)

function inject(){
    try {
        console.log(`Loading Settings File.`)
        var sfilePath = (`${userHomeDir}/aisc.setting.json`);
        const Data = fs.readFileSync(sfilePath, {encoding:'utf8'});
        const user_s = JSON.parse(Data);
        var OnlyForum = (user_s.OnlyForum);
        var DarkMode = (user_s.DarkMode);
        var disableHardwareAcceleration = (user_s.disableHardwareAcceleration);
        console.log(`Successfully loaded Settings File, Path ${sfilePath}`)
    } catch (e) {
        console.log(`Settings file not found! Using default settings`);
        alert("Settings file not found! Using default settings");
        var DarkMode = true;
        var OnlyForum = false;
    }
    if (disableHardwareAcceleration == true) {
        console.log("Hardware Acceleration Disabled!")
    }
    if (DarkMode == true) {
        if (window.getComputedStyle( document.body ,null).getPropertyValue('color') == "rgb(221, 221, 221)") {
            elements = document.querySelectorAll("*");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor="#101010";
                elements[i].style.color="#ddd";
            document.getElementById("kmv-logo").src = "https://i.imgur.com/gtNsxih.png";
            }
        }
    } 
    if (OnlyForum == true) {
        document.getElementById("top-navbar").remove();
        document.getElementById("main").style.marginTop = "0px";
    }
}

setTimeout(function(){ inject(); }, 3000);
