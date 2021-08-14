/* .js files add interaction to your website */
var factList= [
  "The leading cause of death for the Hispanic/Latine community is cancer.",
"Breast cancer is the most common fatal cancer for Hispanic women, while lung cancer is the highest cause of cancer death for Hispanic men.",
"Latinas are 20% more likely to die than non-Hispanic whites with the same age and stage of breast cancer." ,
"While 12% of non-Hispanic white cancer patients are under 50, 25% of cancer diagnoses in the Hispanic community are found in individuals who are younger than 50 years old.",
"1 in 3 Latine individuals will experience a cancer diagnosis in their lifetime.",
"Due to cultural factors and a generally lower socioeconomic status, Hispanics are more likely to be affected by the negative mental health effects of cancer.",
"Factors such as economic barriers, health education, cultural issues, lack of public assistance, misinformation, language, child care, insufficient insurance coverage, and more prevent Latinos, especially those who are undocumented, from getting the cancer screenings/treatments they need."

]

//Fact generator
var fact = document.getElementById("fact");
var fbutton = document.getElementById("fbutton");
var count = 0


fbutton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count== factList.length) {

    count=0;
  }
}

if (fbutton) {
  fbutton.addEventListener("click",displayFact);
}


