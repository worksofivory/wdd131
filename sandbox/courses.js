// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
    enrollStudent: function(sectionNum){
        const section = this.sections.find((section) => section.sectionNum === sectionNum);
        if(section){
            section.enrolled++;
        }},
    dropStudent: function(sectionNum){
        const section = this.sections.find((section) => section.sectionNum === sectionNum);
        if(section){
            section.enrolled--;
        }
    }
  };

  //aCourse.sections.find(item => item.roomNum('STC 347'))

  function setCourseInfo(course){
    const courseNameEl = document.querySelector("#courseName");
    const courseCodeEl = document.querySelector("#courseCode");
    
    courseNameEl.innerHTML = `<em>${course.name}</em>`;
    courseCodeEl.innerText = course.code;
  }

  function sectionTemplate(section){
    return `<tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
                </tr>`
  }

  function renderSections(sections){
    const sectionListEL = document.querySelector('#sections');
    const html = sections.map(sectionTemplate);
    sectionListEL.innerHTML = html.join("");
  }

  setCourseInfo(aCourse);
  renderSections(aCourse.sections);

  document.querySelector("#enrollStudent").addEventListener('click', function(){
    const sectionNum = parseInt(document.querySelector("#sectionNumber").value, 10);
    aCourse.enrollStudent(sectionNum);
    renderSections(aCourse.sections);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = parseInt(document.querySelector("#sectionNumber").value, 10);
    aCourse.dropStudent(sectionNum);
    renderSections(aCourse.sections);
  });