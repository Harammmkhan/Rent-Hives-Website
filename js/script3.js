  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

let index = 0;
const visibleCount = 3;

// slider controls
function slideDown() {
  const track = document.getElementById("track");
  const total = document.querySelectorAll(".slider img").length;

  if (index < total - visibleCount) {
    index++;
    track.style.transform = `translateY(-${index * 120}px)`;
  }
}

function slideUp() {
  const track = document.getElementById("track");

  if (index > 0) {
    index--;
    track.style.transform = `translateY(-${index * 120}px)`;
  }
}
//zoom in effect
let zoomm = document.querySelector(".zoom-img");
zoomm.addEventListener("click",()=>{
  zoomm.classList.toggle("zoomed");
})
zoomm.addEventListener("mousemove",(e)=>{
  if(!zoomm.classList.contains("zoomed"))
    return;
  let rect = zoomm.getBoundingClientRect();
  let x = ((e.clientX - rect.left)/rect.width)*100;
  let y = ((e.clientY - rect.top)/rect.height)*100;
  zoomm.style.transformOrigin =  `${x}% ${y}%`;
})

window.addEventListener("DOMContentLoaded", () => {
  //click image--> path changed
  const thumbnails = document.querySelectorAll(".slide-img");
  const zoomImage = document.querySelector(".zoom-img");
  thumbnails.forEach((img) => {
    img.addEventListener("click", () => {
      console.log("Clicked thumbnail:", img.src);
      zoomImage.src = img.src;
      zoomImage.classList.add("active");
      console.log("Right image src set to:", zoomImage.src);
    });
  });
});

//flatpickr calendar
let fp = flatpickr("#calendar", {
  mode: "range",
  dateFormat: "d-m-Y",

  onChange: function(selectedDates, dateStr, instance) {
    if (selectedDates.length === 1) {
      let start = selectedDates[0];
      let end = new Date(start);
      end.setDate(start.getDate() + 2);

      instance.setDate([start, end], true);
      localStorage.setItem("deliveryStart", start.toISOString());
      localStorage.setItem("deliveryEnd", end.toISOString());
    }
  }
});
//fitting calendar
let fittingDatePicker = flatpickr("#fitting-date", {
  dateFormat: "m/d/Y",
  minDate: new Date().fp_incr(1),
  defaultDate: new Date().fp_incr(1),
  disableMobile: "true"
});

window.addEventListener("DOMContentLoaded",()=>{
  let startStr = localStorage.getItem("deliveryStart");
  let endStr = localStorage.getItem("deliveryEnd");
  if(startStr && endStr){
    let start = new Date(startStr);
    let end = new Date(endStr);
    fp.setDate([start,end],true)
  }
})
//Function for button click
function openCalendar() {
  fp.open();
}
//hide panel for location
  let btn = document.getElementById("openPanel");
  let panel = document.getElementById("panel");

  btn.addEventListener("click", function () {
    panel.classList.toggle("active");
  });

//panel for Hyderabad Hub info-card
  let hyderabadCard = document.querySelector(".info-card");
  hyderabadCard.addEventListener("click", function () {
    panel.classList.toggle("active");
  });

//hide panel for size-guide
  let sizeBtn = document.getElementById("openPanel-2");
  let sizePanel = document.querySelector(".panel2");

  sizeBtn.addEventListener("click", function () {
    if (sizePanel) {
      sizePanel.classList.toggle("active");
    }
  });

  //hide panel for view-all
    let viewall = document.querySelector(".measure-header a");
  viewall.addEventListener("click", function () {
    sizePanel.classList.toggle("active");
  });
  //hide panel for free fitting
  let fittingBtn = document.getElementById("openPanel-3");
  let panel3 = document.querySelector(".panel3");
  fittingBtn.addEventListener("click", function () {
    if (panel3) {
      panel3.classList.toggle("active");
    }
  });
  let panel3Close = document.querySelector(".panel-close");
  if (panel3Close) {
    panel3Close.addEventListener("click", function () {
      if (panel3) {
        panel3.classList.remove("active");
      }
    });
  }

  // Close buttons for all panels
  document.querySelectorAll('.panel-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('#panel, .panel2, .panel3');
      if (panel) {
        panel.classList.remove('active');
      }
    });
  });
