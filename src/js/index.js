function mode() {
  let body = document.body;
  let header = document.querySelector("header");
  let footer = document.querySelector("footer");
  let pendidikan = document.getElementById("pendidikan");
  let tentang = document.getElementById("follow");
  let pengalaman = document.getElementById("pengalaman");
  let cards = document.querySelectorAll(".card-text");
  let biografi = document.querySelectorAll(".card-pengalaman");
  let isi = document.querySelectorAll(".isi-pengalaman")
  let pendiWarp = document.getElementById("pendidikan-wrap")
  let nav = document.getElementById("isNav")
  let banner1 = document.getElementById("txt-banner1")
  let banner2 = document.getElementById("txt-banner2")
  let time = document.time;




  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-header");
  tentang.classList.toggle("dark-tentang");
  pengalaman.classList.toggle("dark-tentang");
  footer.classList.toggle("dark-footer");
  pendiWarp.classList.toggle("dark-wrap")
  banner1.classList.toggle("dark-txt1")
  banner2.classList.toggle("dark-txt2")
 
  

  cards.forEach(card => {
    card.classList.toggle("dark-card");
  });
  biografi.forEach(card => {
    card.classList.toggle("dark-pengalaman");
  });
  isi.forEach(card => {
    card.classList.toggle("dark-isi");
  });
  nav.forEach(card => {
    card.classList.toggle("dark-isNav");
  });
  pendiWarp.forEach(card => {
    card.classList.toggle("dark-wrap");
  });

}
