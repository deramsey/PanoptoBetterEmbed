let conData = () => {
  let i = document.querySelector("#p-url").value;
  let id = i.slice(68);
  let o = "<iframe src='https://clevelandcc.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=" + id + "&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=false&interactivity=all' style='width:100%;aspect-ratio:16/9; box-sizing: border-box; border: 1px solid #464646;' allowfullscreen allow='autoplay'></iframe>";
  navigator.clipboard.writeText(o);
  document.querySelector("#output").innerText = o;
}

document.querySelector("#submit").addEventListener("click", conData);