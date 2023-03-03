const loadAiDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    toggleSpinner(true);
    const res = await fetch(url); 
    const data = await res.json();
    displayAi(data.data.tools);
    toggleSpinner(false);
};

const displayAi = aiArray => {
    const aiContainer = document.getElementById('ai-container');
    aiArray = aiArray.slice(0,6);

    // Loop through the array of AI objects and call the displayAi function for each one
    aiArray.forEach(ai => {
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('card');
        aiDiv.innerHTML = `
            <div class="card card-compact bg-gray-300 drop-shadow-2xl h-5/6">
                <figure><img src="${ai.image}"/></figure>
                <div class="card-body">
                    <h1 class="text-3xl font-semibold">Features</h1> <br>
                    <ol class="list-decimal pl-8">
                        ${ai.features[0] ? `<li>${ai.features[0]}</li>` : `<li style="display:none;"></li>`}
                        ${ai.features[1] ? `<li>${ai.features[1]}</li>` : `<li style="display:none;"></li>`}
                        ${ai.features[2] ? `<li>${ai.features[2]}</li>` : `<li style="display:none;"></li>`}
                    </ol>
                    <hr>
                    <div class="flex justify-between">
                    <div>
                    <h2 class="card-title text-2xl font-semibold">${ai.name}</h2>
                    <p class="font-semibold"><i class="fa-regular fa-calendar-days"></i> ${ai.published_in}</p>
                    </div>
                    <div class="text-3xl">
                    <label for="my-modal-5" class="open-modal">
                    <i class="fa-solid fa-circle-arrow-right"></i></label>
                    </div>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl shadow-xl">
         <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-1 top-1">✕</label>
         <div class="flex gap-12 hove:box-border">
        <div class="bg-rose-300 rounded-lg p-6 w-7/12">
            <h1 class="font-bold text-2xl" id="description">Modal Description</h1>
            <div class="flex gap-12 mt-5 items-center">
                <div class="bg-slate-100 box-border h-32 w-32 p-4 rounded-lg text-green-600 text-2xl font-bold text-center">$ 10/ month basic</div>
                <div class="bg-slate-100 box-border h-32 w-32 p-4 rounded-lg text-green-600 text-2xl font-bold text-center">67</div>
                <div class="bg-slate-100 box-border h-32 w-32 p-4 rounded-lg text-green-600 text-2xl font-bold text-center">67</div>
            </div>
            <div class="flex gap-12 mt-5 text-center">
                <div>
                <h1 class="text-3xl font-bold">Features</h1>
                <p>${ai.features}</p>
                </div>
                <div>
                <h1 class="text-3xl font-bold">Integrations</h1>
                <p>${ai.integrations}</p>
                </div>
            </div>
        </div>
        <div class="card w-11/12 bg-base-100 shadow-xl">
        <span class="indicator-item badge absolute right-1 top-1">${ai.accuracy}</span>
                <img src="${ai.image}"/>
              <h2 class="text-xl">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
    </div>
  </div>
        `;
        aiContainer.appendChild(aiDiv);
    });

    // Get the "Sort by date" button element
    const sortButton = document.getElementById('sort-by-date');

    // Add an event listener to sort the aiArray by published_in property when clicked
    sortButton.addEventListener('click', () => {
        aiArray.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
        aiContainer.innerHTML = '';
        displayAi(aiArray);
    });
};

// Add a toggleSpinner function to display or hide the loading spinner
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('hidden');
        loaderSection.innerHTML = `<div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>`;
    } else {
        loaderSection.classList.add('hidden');
        loaderSection.innerHTML = '';
    }
};

// Call the loadAiDetails function to start loading the AI tools data
loadAiDetails();










<div class="row row-cols-1 row-cols-md-2 g-4">
<div class="col">
    <div class="card bg-danger-subtle">
    <div class="card-body ">
      <h5 class="card-title">${description}</h5>
      <div class="d-flex  justify-content-between modal-style">
      <div  class=" rounded p-1 bg-white">
      <h6 class="fw-semibold text-wrap " style="width: 6rem;">${pricing[0].price ? pricing[0].price :'Free of Cost/Basic'}</h6><h6 class="fw-semibold text-wrap " style="width: 6rem; modal-style">${pricing[0].plan ? pricing[0].plan :'Free of Cost/Basic'}</h6>
    
      </div>
      <div class="  rounded p-1 bg-white">
      <h6 class="fw-semibold text-wrap" style="width: 6rem;">${pricing[1].price}</h6> <h6 class="fw-semibold text-wrap" style="width: 6rem;">${pricing[1].plan}</h6>
     
      </div>
      <div class="  rounded p-1 bg-white">
      <h6 class="fw-semibold text-wrap" style="width: 6rem;">${pricing[2].price}</h6>   <h6 class="fw-semibold text-wrap" style="width: 6rem;">${pricing[2].plan}</h6>
   
      </div>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <h4 class="card-title">Features</h4>
          <ul>
            <li class="card-text">${features[1].feature_name}</li>
            <li class="card-text">${features[2].feature_name}</li>
            <li class="card-text">${features[3].feature_name}</li>
        </ul>
         

        </div>
        <div>
        <h4 class="card-title">Integrations</h4>
        <ul>
            <li class="card-text">${integrations[0] ? integrations[0] :'No data found'}</li>
            <li class="card-text">${integrations[1] ? integrations[1] : 'No data found'}</li>
            <li class="card-text">${integrations[2] ? integrations[2] : 'No data found'}</li>
        </ul>
      
        </div>
    </div>
    </div>
    </div>
 </div>
<div class="col">
<div class="card">
    <img src="${image_link[0]}" class="card-img-top" alt="...">
  <div class="card-body">
      <h6 class="card-title">${input_output_examples[0].input}</h6>
       <p class="card-text">${input_output_examples[0].output}</p>
      <h6 class="card-title">${input_output_examples[1].input}</h6>
       <p class="card-text">${input_output_examples[1].output}</p>
    </div>
 </div>
</div>
