const filterButtons = document.querySelectorAll(".filter-btn");
const scheduleDays = document.querySelectorAll(".schedule-day");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedDay = button.dataset.filter;

    filterButtons.forEach(function (btn) {
      const isSelected = btn === button;
      btn.classList.toggle("is-active", isSelected);
      btn.setAttribute("aria-pressed", String(isSelected));
    });

    scheduleDays.forEach(function (day) {
      day.hidden = selectedDay !== "all" && day.dataset.day !== selectedDay;
    });
  });
});
