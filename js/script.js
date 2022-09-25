let sidebar = document.querySelector(".sidebar");
let webview = document.querySelector('webview');

let closeBtn_ = document.querySelector("#btn");
let goHome_ = document.querySelector("#btn_Home");
let goForum_ = document.querySelector("#btn_Forum");
let goevents_ = document.querySelector("#events");
let gochallenges_ = document.querySelector("#challenges");
let goblogs_ = document.querySelector("#blogs");
let golearn_ = document.querySelector("#learn");
let goprojects_ = document.querySelector("#projects");

webview.addEventListener('dom-ready', () => {
  webview.insertCSS('::-webkit-scrollbar { width: 0px; }');
}); // Hide scrollbar

goHome_.addEventListener("click", ()=>{
  webview.loadURL("https://aistudent.community/dashboard");
});

goForum_.addEventListener("click", ()=>{
  webview.loadURL("https://forum.aistudent.community");
});

goevents_.addEventListener("click", ()=>{
  webview.loadURL("https://aistudent.community/event");
});

gochallenges_.addEventListener("click", ()=>{
  webview.loadURL("https://www.aistudent.community/challenge");
});

goblogs_.addEventListener("click", ()=>{
  webview.loadURL("https://aistudent.community/blog");
});

golearn_.addEventListener("click", ()=>{
  webview.loadURL("https://aistudent.community/letslearn");
});

goprojects_.addEventListener("click", ()=>{
  webview.loadURL("https://aistudent.community/AIProjects");
  webview.addEventListener('did-start-loading', loadstart)
});

closeBtn_.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn_.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn_.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
};
