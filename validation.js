function submitFunction1(e) {
  e.preventDefault();
  let count = 0;
  var formValues = {};
  for (let i = 0; i < e.target.length - 1; i++) {
    if (e.target[i].type == "checkbox" || e.target[i].type == "radio" && e.target[i].checked) {
      if (e.target[i].type == "radio") {
        formValues[e.target[i].name] = e.target[i].value;
      } else if (formValues[e.target[i].name] ) {
        console.log(formValues[e.target[i].name]);
        formValues[e.target[i].name] += ", " + e.target[i].value;
      } else {
        formValues[e.target[i].name] = e.target[i].value;
      }
    } else {
      formValues[e.target[i].name] = e.target[i].value
    }
  }
  console.log('formValues', formValues)
  if (!formValues.vehicle1 && !formValues.male) {
    alert("please select atleast one checkbox or one radio");
  } else if (e.target.num.value.length != 10) {
    alert("enter a valid number");
    console.log(formValues.number);
  } else if (e.target.textarea.value.length <= 20) {
    alert("Enter your valid address");
  } else {
    Object.keys(formValues).map((val, indx) => {
      document.writeln(
        val + " : " + Object.values(formValues)[indx] + "<br><br>"
      );
    });
  }
}

function numbercheck(num) {
  let str = "1234567890!@#$%^&*()~[]{}|_+-=,./<>?;:'";
  if (str.includes(num[num.length - 1])) {
    return true;
  }
  return false;
}

function nameCheck(e) {
  let val = e.value;
  if (val.includes(" ") || numbercheck(val)) {
    e.value = val.slice(0, -1);
    alert(
      "Please enter valid name \nName should not cantain number,special char and space"
    );
  }
}
function dropDownValidation(e) {
  if (document.getElementById("select").selectedIndex == 0) {
    alert("please select one language");
    document.getElementById("select").focus();
    return false;
  }
  return true;
}
