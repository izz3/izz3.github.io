// DRY: Don't Repeat Yourself
// abstraction == generalization


const onResumeClick = function() {
    let resumeContentNode = document.getElementById('resume-content');
    showElement(resumeContentNode);

    let projectsContentNode = document.getElementById('projects-content');
    let bioContentNode = document.getElementById('bio-content');
    hideElement(projectsContentNode);
    hideElement(bioContentNode);

}
const onProjectsClick = function() {
    // Show the project content
    let projectsContentNode = document.getElementById('projects-content');
    showElement(projectsContentNode);
    
    // Hide the project content
    let resumeContentNode = document.getElementById('resume-content');
    let bioContentNode = document.getElementById('bio-content');
    hideElement(resumeContentNode);
    hideElement(bioContentNode);
}

const onBioClick = function() {
    let bioContentNode = document.getElementById('bio-content');
    showElement(bioContentNode);
    
    let resumeContentNode = document.getElementById('resume-content');
    let projectsContentNode = document.getElementById('projects-content');
    hideElement(resumeContentNode);
    hideElement(projectsContentNode);

}

const hideElement = function(element) {
    element.classList.remove("is-showing");
    element.classList.add("is-hidden");
}

const showElement = function(element) {
    element.classList.add("is-showing");
    element.classList.remove("is-hidden");
}