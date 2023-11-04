document.addEventListener("DOMContentLoaded", () => {
  const faculties = {
    cse: [
      "Dr. Ramesh B",
      "Dr. GeethaKiran A",
      "Mr. Neelakantappa B B",
      "Mr. Shashidhara H.V",
      "Dr. Aruna Kumar S V",
      "Dr. Keerthi Kumar H M",
      "Dr. Shivanna K",
      "Dr. Mohana Lakshmi J",
      "Mrs. Margaret R.E.",
      "Mr. Prasanna K S",
      "Mrs. Sunitha. P",
      "Mr. Vinod A M",
      "Mr. Vasanth Kumar N.T.",
      "Mrs. Ayeesha Siddiqha",
      "Mr. Keerthi K S",
      "Mr. Tejonidhi M R",
      "Dr. Kavyasri M N",
      "Mrs. Shobha Chandra K",
      "Mrs. Shruthi.T.R",
      "Mr. Sumanth C M",
      "Mrs. Harshitha S",
      "Mrs. Nithyashree R",
      "Mrs. Chandana H M",
      "Mr. Madhu C K",
      "Mrs. Nayana R",
      "Mrs. Nivyashree R",
      "Mr. Ravi Kumar D",
      "Ms. Meghana H M",
      "Mrs. Shruthi A S",
      "Mrs. Yashaswini S",
      "M S Prapulla Kumar",
      "Ms. Shruthi K R",
    ],
    me: [
      "Dr. Ezhil Vannan S",
      "Dr. Laxmana Naik L",
      "G.C. Gopalakrishna",
      "S. L. Dinesha",
      "Dr. S. Pradeep",
      "Dr. Amarendra H. J",
      "Dr. Dushyanth Kumar K.R",
      "Vijaykumar G.Tile",
      "Hareesha M.",
      "Dr. Vasundhara M G",
      "Satish V Talawar",
      "Shambulinga Murthy G.C.",
      "Prathap M.S",
      "SREE RAJENDRA",
      "B N Prasanna Kumar",
      "Dr. Jeevan T.P.",
      "S.S. Mahesh",
      "Dr.SHIVASHANKARA B.S",
      "Dr.Raghavendra Rao R",
      "Dr.Mahesh Kumar V",
      "Sharath H K",
      "Dr. P. Madhu",
      "Dr. Pradeep D.G.",
      "Dr. Madhu K S",
      "Dr.Sharath B.N",
      "Dr. Yashas Gowda T G",
      "Dr. Ashrith H S",
      "Dr. Gopi K. R.",
      "Dr. Shashank Lingappa M.",
      "Dr. H.V. Divya",
      "Prem kumar B. G.",
      "Dr. Hemanth T.S.",
      "K. J. Dileep",
      "D.N. Ravikiran",
    ],

    ce: [
      "Dr. Mohan Kumar Chavan",
      "Dr. A. J. Krishnaiah",
      "S. B. Devaraj",
      "K. S. Manjunath",
      "Dr. B. E. Yogendra",
      "Dr. H. S. Narashimhan",
      "R. S. Dakshayini",
      "Sumana Jayaprakash",
      "Dr. Kishor Kumar S.",
      "Indumathi C.",
      "Dr. Muralidhar N",
      "Dr. K. C. Manu",
      "Chethan Kumar N. T.",
      "Supriya M. J.",
      "Amrutha D. S.",
      "Lavanya H. D.",
      "Hemanth R",
      "Chandini M. S.",
      "Nudi Shree",
      "Siri Hemanth",
      "Rashmi B. R.",
      "Niranjan Nayak R K",
      "Krishna Swaroop C D",
      "Shamana B S",
      "Madhushree C",
      "Brunda B N",
      "Dr.M.T.Venuraju",
    ],
    eee: [
      "Dr. Rajanna S.",
      "Dr. N. S. Jyothi",
      "Mr. L. Kumaraswamy",
      "Mr. N. A. Ranjan",
      "Mr. M. E. Tejamoorthy",
      "Dr. M. Ramesh",
      "Mr. Varaprasad N. L.",
      "Mrs. Dhavala R. K.",
      "Mrs. Neethu V. S.",
      "Mr. Bharath Y. K.",
      "Mr. G. T. Arjun",
      "Mrs. S.P. Kruthi",
      "Yogitha S. K.",
      "Pooja Suman",
      "Mrs. Swathy B. A.",
      "Mrs. Prathima H .V.",
      "G R SOWMYA",
      "KIRAN KUMAR NAIK",
      "PRAMODH H. K.",
      "Suchithra M. M.",
      "G K MOHAN",
    ],
    au: [
      "Dr. M.K.Ravishankar",
      "Dr. A.N.Basavaraju",
      "Dr. Y. M. Shashidhara",
      "Dr. Ravikumar K P",
      "H. S. Lokesh",
      "R.Vijay",
    ],
    ece: [
      "Mr.Raghuram K A",
      "Manasa H S",
      "Kavana K V",
      "Poornima M R",
      "Spoorthi B S",
      "Mrs. Swathi H Y",
      "Mrs.Prakruthi H L",
      "Mrs.Deepika K C",
      "Mrs. Sushma N",
      "Dr. Santhosh Kumar K B",
      "Dr. Hemanth Kumar B M",
      "Dr. P.C.Srikanth",
      "Mr.Prathap P.B.",
      "Ms.M.R. Dakshayini",
      "Dr. Keerthi D.S.",
      "Dr.Venkateswara Rao Kolli",
      "Dr.Indira Bahaddur",
      "Dr. Triveni C L",
      "Mr.Ravikumar M.N.",
      "Dr. Padmaja Devi G",
      "Dr. Murthi Mahadeva Naik",
    ],
    eie: [
      "Dr. C. S. Suresh Babu",
      "Prof. N.E Ramesh",
      "Prof. Vanitha A",
      "Prof. Chaithra Chandrashekar",
      "Mrs. Meghashree B. S.",
      "Mrs. Shreedevi P.",
      "Dr. C M Naveen Kumar",
    ],
    ise: [
      "Dr. Chandrika.J",
      "Dr. Ananda Babu J",
      "Dr. Balaji Prabhu B V",
      "Dr. Nanditha B R",
      "Dr. Vinutha M R",
      "Ms. Shruthi D V",
      "Mr. Sudarshan G K",
      "Mr. Nithin K",
      "Ms. Priyanka H.L",
      "Ms. Sindhu K S",
      "Mrs. Shruthi B S",
      "Mr. Krishna Swaroop A",
      "Ms. Tasmiya Anjum H N",
      "Ms. Umme Sadiya",
    ],
    aiml: ["Sushma M V", "Akitha S"],
    physics: [
      "Dr. M R Rangaraju",
      "Mr. H N Vijayaraghava",
      "Mr. P T Rudre Gowda",
      "Dr. Prasanna A. A.",
      "Dr. S P Raju",
      "Dr. B C Hemaraju",
    ],
    chemistry: [
      "Mr. K. N. Krishnakumar",
      "Mr. B.C. Ravi",
      "Dr. Pradeep Kumar C B",
      "Dr. Kavitha C S",
      "Mr. Preetham R",
    ],
    mathematics: [
      "Dr. M.K Partha",
      "T Mohana",
      "Dr. Kalavathi G K",
      "Chaithra C.M",
      "Dr. Roopa G.S.",
      "Dr. Shashikumar N S",
      "Adithya G N",
      "Pradyumna R",
      "Niharika Hegde M",
      "Shwetha R",
      "Deekshitha K V",
      "Kruthika .N",
      "Chandhini K S",
      "Ankitha K P",
      "Thejaswini D T",
    ]
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
    console.log('in')
    const selectedBranch = BranchBlock.value;
    facultiesBlock.innerHTML = "";

    faculties[selectedBranch].forEach(faculty => {
      const option = document.createElement('option');
      option.text = faculty;
      option.value = faculty;
      facultiesBlock.appendChild(option);
    });
  }

  function updateTeacherName() {
    const teacherName = facultiesBlock.value;
    const teacherBlock = document.getElementById("teacherName");
    teacherBlock.innerHTML = teacherName;
  }



  updateFaculty();
  updateTeacherName();
  BranchBlock.addEventListener("change", updateFaculty);
  facultiesBlock.addEventListener("change", updateTeacherName);



  // extra animation for messages
  const extra = document.querySelector(".extra");
  setTimeout(() => {
    extra.style.right = "5%";
  }, 3000);

  const p1 = document.querySelector(".p1");
  setTimeout(() => {
    p1.style.left = "0%";
  }, 4500);

  const p2 = document.querySelector(".p2");
  setTimeout(() => {
    p2.style.left = "0%";
  }, 6500);
});
