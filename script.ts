document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    // Type assertion to access form elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    // Check if all elements exist
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create the resume output with editable sections
        const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone Number:</strong> <span contenteditable="true">${phone}</span></p>

        <h3>Education</h3>
        <p><strong>Education:</strong> <span contenteditable="true">${education}</span></p>

        <h3>Experience</h3>
        <p><strong>Experience:</strong> <span contenteditable="true">${experience}</span></p>

        <h3>Skills</h3>
        <p><strong>Skills:</strong> <span contenteditable="true">${skills}</span></p>
        `;

        // Insert resume output into the DOM
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.log('One or more input elements are missing');
    }
});
