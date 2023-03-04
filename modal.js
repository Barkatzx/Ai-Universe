const loadDataDetails = async (id) => {
  const apiUrl = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  console.log(data.data);
  displayData(data.data);
};
const displayData = ai => {
  document.getElementById('description').innerText = ai.description;

// Feature for Modal
  let featuresContainer = document.getElementById("features");
  let featuresList = [];
  for (let i = 1; i <= 3; i++) {
    if (ai.features[i] && ai.features[i].feature_name) {
      featuresList.push(`<li>${ai.features[i].feature_name}</li>`);
    } else {
      featuresList.push(`<li style="display:none;"></li>`);
    }
  }
  
  if (featuresList.length > 0) {
    const featuresHtml = `<ol class="list-decimal pl-3 font-small">${featuresList.join('')}</ol>`;
    featuresContainer.innerHTML = featuresHtml;
  } else {
    featuresContainer.innerHTML = '';
  }
// integrations For Modal
let integratContainer = document.getElementById("integration");
  let integratList = [];
  for (let i = 0; i <= 3; i++) {
    if (ai.integrations[i] && ai.integrations[i]) {
      integratList.push(`<li>${ai.integrations[i]}</li>`);
    } else {
      integratList.push(`<li style="display:none;"></li>`);
    }
  }
  
  if (integratList.length >= 0) {
    const integratHtml = `<ol class="list-decimal pl-3 font-small">${integratList.join('')}</ol>`;
    integratContainer.innerHTML = integratHtml;
  } else {
    integratContainer.innerHTML = '';
  }

  // Image For Modal
  document.getElementById('image').innerHTML = `
  <figure><img src="${ai.image_link[0]}" class="rounded-lg" /></figure>
  `;

  // Input For Modal 
  document.getElementById('input').innerHTML = `
  <h2 class="text-2xl text-center font-semibold">${ai.input_output_examples[0].input}</h2>
  `;

  // Output For Modal 
  document.getElementById('output').innerHTML = `
  <h2 class="text-lg text-center">${ai.input_output_examples[0].output}</h2>
  `;

  // Basic Plan
  document.getElementById('basic').innerHTML = `
  <div class="bg-white box-border p-2 rounded-lg text-2xl font-bold text-center text-green-600 text-clip	">
  <p>${ai.pricing[0].price}</p>
  <p>${ai.pricing[0].plan}</p>
  </div>
  `
  // Pro Plan
  document.getElementById('premium').innerHTML = `
  <div class="bg-white box-border p-2 rounded-lg text-2xl font-bold text-center text-yellow-600 text-clip	">
  <p>${ai.pricing[1].price}</p>
  <p>${ai.pricing[1].plan}</p>
  </div>
  `
  // Enterprise Plan
  document.getElementById('enterprise').innerHTML = `
  <div class="bg-white box-border p-2 rounded-lg text-2xl font-bold text-center text-red-400 text-clip	">
  <p>${ai.pricing[2].price}</p>
  <p>${ai.pricing[2].plan}</p>
  </div>
  `

  Accurency For Modal;
}

  loadDataDetails();

