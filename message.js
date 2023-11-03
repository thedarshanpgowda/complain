document.addEventListener("DOMContentLoaded", () => {
  const faculties = {
    cse: ["Geeta Kiran", "Sunitha P", "Ayeesha Siddiqha", "Vasanth Kumar"],
    ece: ["faculty1", "faculty2", "faculty3", "faculty4"],
    eee: ["faculty5", "faculty6", "faculty7", "faculty8"],
  };

  const BranchBlock = document.getElementById("branch");
  const facultiesBlock = document.querySelector(".blockforFaculties select");

  function updateFaculty() {
    facultiesBlock.removeAttribute("disabled");
    const selectedBranch = BranchBlock.value;
    facultiesBlock.innerHTML = "";

    faculties[selectedBranch].forEach((element) => {
      const block = document.createElement("option");
      block.value = element;
      block.textContent = element;
      facultiesBlock.appendChild(block);
    });
  }
  BranchBlock.addEventListener("change", updateFaculty);
  updateFaculty();

  function updateTeacherName() {
    const teacherName = facultiesBlock.value;
    const teacherBlock = document.getElementById("teacherName");
    teacherBlock.innerHTML = teacherName;
  }

  facultiesBlock.addEventListener("change", updateTeacherName);
  updateTeacherName();

  const checkbox = document.querySelector('input[type="checkbox"]');
  const submitButton = document.querySelector('input[type="submit"]');

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      submitButton.removeAttribute("disabled");
    } else{
      submitButton.setAttribute("disabled", "true");
    }
  });
});
