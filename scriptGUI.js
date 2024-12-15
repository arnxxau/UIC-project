let currentStep = 1;
const totalSteps = 8;
let currentLanguage = 'en';

const translations = {
    en: {
        welcomeTitle: "Welcome to the ID Application Service",
        welcomeMsg: "Please select your language and press start.",
        langLabel: "Language:",
        btnStart: "Start",

        prereqTitle: "Before you begin",
        prereqInstruction: "Please ensure you have the following documents ready:",
        prereqID: "A valid government-issued ID or proof of identity",
        prereqAddress: "A proof of address (utility bill, lease, etc.)",
        prereqInfoAccuracy: "All personal information accurately noted (Name, DOB)",

        personalInfoTitle: "Personal Information",
        firstNameLabel: "First Name:",
        lastNameLabel: "Last Name:",
        dobLabel: "Date of Birth:",
        genderLabel: "Gender:",
        genderFemale: "Female",
        genderMale: "Male",
        genderOther: "Other",

        addressTitle: "Address & Contact",
        addressLabel: "Street Address:",
        cityLabel: "City:",
        zipLabel: "Postal Code:",
        emailLabel: "Email (optional):",
        phoneLabel: "Phone (optional):",

        docVerifyTitle: "Document Verification",
        docVerifyMsg: "Please scan your existing ID card below or tap your NFC-enabled card on the reader.",
        docScanPlaceholder: "[ Scanner / NFC Area ]",
        btnSimulateVerification: "Simulate Verification",

        biometricTitle: "Biometric Capture",
        biometricMsg: 'Please look at the camera and press "Capture Photo".',
        cameraPlaceholder: "[ Live Camera Feed ]",
        btnCaptureContinue: "Capture & Continue",

        reviewTitle: "Review Your Information",
        reviewMsg: "Please confirm that all details are correct.",
        btnConfirm: "Confirm",

        termsTitle: "Terms & Conditions",
        // Changed to shorter text
        termsTextShort: 'By tapping "I Agree," you acknowledge the correctness of the data provided and consent to the government’s data handling policies.',
        btnAgree: "I Agree",

        submissionTitle: "Submission Complete",
        submissionMsg: "Your application is now submitted. Please take your printed receipt.",
        receiptPlaceholder: "[ Receipt Printing... ]",

        btnBack: "Back",
        btnNext: "Next"
    },
    es: {
        welcomeTitle: "Bienvenido al Servicio de Solicitud de Identificación",
        welcomeMsg: "Por favor seleccione su idioma y presione comenzar.",
        langLabel: "Idioma:",
        btnStart: "Comenzar",

        prereqTitle: "Antes de comenzar",
        prereqInstruction: "Por favor asegúrese de tener los siguientes documentos listos:",
        prereqID: "Una identificación oficial vigente o prueba de identidad",
        prereqAddress: "Una prueba de domicilio (recibo de servicios, contrato de arrendamiento, etc.)",
        prereqInfoAccuracy: "Toda la información personal anotada correctamente (Nombre, Fecha de Nacimiento)",

        personalInfoTitle: "Información Personal",
        firstNameLabel: "Nombre:",
        lastNameLabel: "Apellido:",
        dobLabel: "Fecha de Nacimiento:",
        genderLabel: "Género:",
        genderFemale: "Femenino",
        genderMale: "Masculino",
        genderOther: "Otro",

        addressTitle: "Dirección y Contacto",
        addressLabel: "Dirección:",
        cityLabel: "Ciudad:",
        zipLabel: "Código Postal:",
        emailLabel: "Correo (opcional):",
        phoneLabel: "Teléfono (opcional):",

        docVerifyTitle: "Verificación de Documento",
        docVerifyMsg: "Por favor escanee su tarjeta de identificación existente abajo o acerque su tarjeta con NFC al lector.",
        docScanPlaceholder: "[ Área de escaneo / NFC ]",
        btnSimulateVerification: "Simular Verificación",

        biometricTitle: "Captura Biométrica",
        biometricMsg: 'Por favor mire a la cámara y presione "Capturar Foto".',
        cameraPlaceholder: "[ Vista de cámara en vivo ]",
        btnCaptureContinue: "Capturar y Continuar",

        reviewTitle: "Revise Su Información",
        reviewMsg: "Por favor confirme que todos los datos son correctos.",
        btnConfirm: "Confirmar",

        termsTitle: "Términos y Condiciones",
        termsTextShort: 'Al presionar "Acepto," usted confirma la veracidad de los datos proporcionados y da su consentimiento para el manejo de datos por parte del gobierno.',
        btnAgree: "Acepto",

        submissionTitle: "Solicitud Completa",
        submissionMsg: "Su solicitud ha sido enviada. Por favor recoja su recibo impreso.",
        receiptPlaceholder: "[ Imprimiendo recibo... ]",

        btnBack: "Atrás",
        btnNext: "Siguiente"
    }
};

function updateProgressBar() {
    const progressEl = document.getElementById('progress');
    const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
    progressEl.style.width = percentage + '%';
}

function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    // Show current step
    document.getElementById(`step${step}`).classList.add('active');
    updateProgressBar();

    if (step === 6) {
        populateReviewInfo();
    }
}

function goToNextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

function goToPreviousStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function simulateDocVerification() {
    alert(currentLanguage === 'en' ? 'Document Verified!' : 'Documento Verificado!');
    goToNextStep();
}

function populateReviewInfo() {
    // Fetch values from original fields
    const firstName = document.getElementById('firstName').value || '';
    const lastName = document.getElementById('lastName').value || '';
    const dob = document.getElementById('dob').value || '';
    const gender = document.getElementById('gender').value || '';
    const address = document.getElementById('address').value || '';
    const city = document.getElementById('city').value || '';
    const zip = document.getElementById('zip').value || '';
    const email = document.getElementById('email').value || '';
    const phone = document.getElementById('phone').value || '';

    // Populate the review form fields
    document.getElementById('reviewFirstName').value = firstName;
    document.getElementById('reviewLastName').value = lastName;
    document.getElementById('reviewDob').value = dob;
    document.getElementById('reviewGender').value = gender;
    document.getElementById('reviewAddress').value = address;
    document.getElementById('reviewCity').value = city;
    document.getElementById('reviewZip').value = zip;
    document.getElementById('reviewEmail').value = email;
    document.getElementById('reviewPhone').value = phone;
}

function saveReviewChanges() {
    // Get updated values from review fields
    const updatedFirstName = document.getElementById('reviewFirstName').value;
    const updatedLastName = document.getElementById('reviewLastName').value;
    const updatedDob = document.getElementById('reviewDob').value;
    const updatedGender = document.getElementById('reviewGender').value;
    const updatedAddress = document.getElementById('reviewAddress').value;
    const updatedCity = document.getElementById('reviewCity').value;
    const updatedZip = document.getElementById('reviewZip').value;
    const updatedEmail = document.getElementById('reviewEmail').value;
    const updatedPhone = document.getElementById('reviewPhone').value;

    // Update original input fields with the new values
    document.getElementById('firstName').value = updatedFirstName;
    document.getElementById('lastName').value = updatedLastName;
    document.getElementById('dob').value = updatedDob;
    document.getElementById('gender').value = updatedGender;
    document.getElementById('address').value = updatedAddress;
    document.getElementById('city').value = updatedCity;
    document.getElementById('zip').value = updatedZip;
    document.getElementById('email').value = updatedEmail;
    document.getElementById('phone').value = updatedPhone;

    alert(currentLanguage === 'en' ? 'Changes saved successfully!' : '¡Cambios guardados exitosamente!');
}

function startProcess() {
    const langSelect = document.getElementById('language');
    currentLanguage = langSelect.value;
    updateLanguage();
    goToNextStep();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[currentLanguage][key] || el.textContent;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
});
