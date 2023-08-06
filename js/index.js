const punnet_tag = document.querySelector("#punnet_tags");
const title_name = document.querySelector("#title_tags-name");
const dental_para = document.querySelector("#dental-para");
const appointmentbtn = document.querySelector("#appointmentbtn");

const dhiraj = gsap.timeline();

dhiraj.from([punnet_tag, title_name, dental_para, appointmentbtn], {
  y: 80,
  duration: 0.9,
  ease: "power3.out",
  opacity: 0,
  stagger: 0.6,
});

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  /*  triggerElement: "#time_tabless", */
  triggerHook: 0,
  reverse: true,
})
  /*   .addIndicators() */
  .addTo(controller);
