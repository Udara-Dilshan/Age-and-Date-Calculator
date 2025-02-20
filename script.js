function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const birthDateObj = new Date(birthdate);
    const currentDate = new Date();
    
    if (!birthdate) {
      document.getElementById("age-result").innerText = "Please select a valid date!";
      return;
    }
  
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();
    const month = currentDate.getMonth() - birthDateObj.getMonth();
    const day = currentDate.getDate() - birthDateObj.getDate();
  
    if (month < 0 || (month === 0 && day < 0)) {
      age--;
    }
    
    document.getElementById("age-result").innerText = `You are ${age} years old. 🎉`;
  }

  function calculateDateDiff() {
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
  
    if (!startDate || !endDate) {
      document.getElementById("date-diff-result").innerText = "Please select both dates!";
      return;
    }
  
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
  
 
    const timeDiff = endDateObj - startDateObj;
    const diffInDays = Math.floor(timeDiff / (1000 * 3600 * 24)); // Difference in days
  
   
    let diffInMonths = endDateObj.getMonth() - startDateObj.getMonth();
    let diffInYears = endDateObj.getFullYear() - startDateObj.getFullYear();
  
    if (diffInMonths < 0) {
      diffInMonths += 12;
      diffInYears--;
    }
  
    let monthsAndYears = `${diffInYears} years, ${diffInMonths} months, and ${diffInDays} days`;
  
    document.getElementById("date-diff-result").innerText = `The difference is: ${monthsAndYears}. ⏳`;
  }
  