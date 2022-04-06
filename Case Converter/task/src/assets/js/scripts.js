const text = document.getElementById('input-text');
const upperCaseBtn = document.getElementById('upper-case');
const lowerCaseBtn = document.getElementById('lower-case');
const properCaseBtn = document.getElementById('proper-case');
const sentenceCaseBtn = document.getElementById('sentence-case');
const saveTextFileBtn = document.getElementById('save-text-file');

/** upper case convert **/
upperCaseBtn.addEventListener('click', () => {
    text.value = text.value.toUpperCase();
});

/** lower case convert **/
lowerCaseBtn.addEventListener('click', () => {
    text.value = text.value.toLowerCase();
});

/** proper case convert **/
properCaseBtn.addEventListener('click', () => {
    let converted = text.value.toLowerCase();
    text.value = converted.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1));
});

/** sentence case convert **/
sentenceCaseBtn.addEventListener('click', () => {
    let converted = text.value.toLowerCase();
    text.value = converted.replace(/(^|[.!?]\s+)([a-z])/g, (m, txt1, txt2) => txt1 + txt2.toUpperCase());
});

const createAndDownloadFile = (filename, text) => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};

saveTextFileBtn.addEventListener('click', () => createAndDownloadFile('text.txt', text.value));
