var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion to access form elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Check if all elements exist
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create the resume output with editable sections
        var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone Number:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n\n        <h3>Education</h3>\n        <p><strong>Education:</strong> <span contenteditable=\"true\">").concat(education, "</span></p>\n\n        <h3>Experience</h3>\n        <p><strong>Experience:</strong> <span contenteditable=\"true\">").concat(experience, "</span></p>\n\n        <h3>Skills</h3>\n        <p><strong>Skills:</strong> <span contenteditable=\"true\">").concat(skills, "</span></p>\n        ");
        // Insert resume output into the DOM
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.log('One or more input elements are missing');
    }
});
