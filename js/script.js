document.addEventListener("DOMContentLoaded", () => {
  const bmiForm = document.getElementById("bmiForm");

  // Function to calculate BMI
  const calculateBMI = (height, weight) => {
    return (weight / (height / 100) ** 2).toFixed(2);
  };

  // Function to display BMI result using SweetAlert
  const displayResult = (bmi, gender) => {
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    // Display result using SweetAlert
    Swal.fire({
      title: "Your BMI Result",
      html: `
                <p>Gender: ${
                  gender.charAt(0).toUpperCase() + gender.slice(1)
                }</p>
                <p>BMI: ${bmi}</p>
                <p>Category: ${category}</p>
            `,
      icon: "info",
    });
  };

  // Form submission event listener
  bmiForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const gender = document.getElementById("gender").value;

    if (height && weight && gender) {
      const bmi = calculateBMI(height, weight);
      displayResult(bmi, gender);
    }
  });
});
