// Akan names based on the day of the week a person is born
const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
};

// Function to calculate day of the week using formula
function calculateDayOfWeekUsingFormula(dateStr) {
    const date = new Date(dateStr);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 3) {
        month += 12;
        year -= 1;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;

    const dayOfWeek = Math.floor(
        ((4 * CC - 2 * CC - 1) + (5 * YY) + Math.floor(26 * (month + 1) / 10) + day) % 7
    );

    return (dayOfWeek + 7) % 7;
}

document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');

    if (!birthdate || !genderInput) {
        alert("Please enter a valid birthdate and select your gender.");
        return;
    }

    const gender = genderInput.value;
    const dayIndex = calculateDayOfWeekUsingFormula(birthdate);
    const akanName = akanNames[gender][dayIndex];

    document.getElementById("result").innerHTML = `Your Akan name is: <strong>${akanName}</strong>`;
});
