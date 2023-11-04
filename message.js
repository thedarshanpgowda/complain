document.addEventListener("DOMContentLoaded", () => {
  const faculties = {
    cse: ["Geeta Kiran", "Sunitha P", "Ayeesha Siddiqha", "Vasanth Kumar"],
    ece: ["faculty1", "faculty2", "faculty3", "faculty4"],
    eee: ["faculty5", "faculty6", "faculty7", "faculty8"],
  };

  const BranchBlock = document.getElementById("branch");
  const facultiesBlock = document.querySelector(".blockforFaculties select");

  const checkbox = document.querySelector('input[type="checkbox"]');
  const submitButton = document.querySelector('input[type="submit"]');

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "true");
    }
  });

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

  function updateTeacherName() {
    const teacherName = facultiesBlock.value;
    const teacherBlock = document.getElementById("teacherName");
    teacherBlock.innerHTML = teacherName;
  }

  updateFaculty();
  updateTeacherName();

  facultiesBlock.addEventListener("change", updateTeacherName);
  BranchBlock.addEventListener("change", updateFaculty);

  const extra = document.querySelector(".extra");
  setTimeout(() => {
    extra.style.right = "5%";
  }, 3000);

  const p1 = document.querySelector(".p1");
  setTimeout(() => {
    p1.style.left = "0%";
  }, 4000);

  const p2 = document.querySelector(".p2");
  setTimeout(() => {
    p2.style.left = "0%";
  }, 5000);
});
