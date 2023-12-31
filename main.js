let currentLimit = 6;
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
    aiContainer.innerHTML = '';
    aiArray = aiArray.slice(0,currentLimit);

    aiArray.forEach(ai => {
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('card');
        aiDiv.innerHTML = `
            <div class="card card-compact bg-gray-100 drop-shadow-2xl">
           <figure class="h-64"><img src="${ai.image}"/></figure>
                <div class="card-body">
                    <h1 class="text-3xl font-semibold">Features</h1>
                    <ol class="list-decimal pl-5 text-lg">
                    ${ai.features.map(feature => feature ? `<li>${feature}</li>` : `<li style="display:none;"></li>`).join('\n')}
                    </ol>
                    <hr>
                    <div class="flex justify-between">
                    <div>
                    <h2 class="card-title text-2xl font-semibold">${ai.name}</h2>
                    <p class=""><i class="fa-regular fa-calendar-days"></i> ${ai.published_in}</p>
                    </div>
                    <button onclick="loadDataDetails('${ai.id}')" class="text-3xl">
                    <label for="my-modal-5" class="open-modal">
                    <i class="fa-solid fa-circle-right text-rose-400"></i></label>
                    </button>
                    </div>
                </div>
            </div>
        `;
        aiContainer.appendChild(aiDiv);
    });

    // Get "Sort By Date" Button Element
    const sortButton = document.getElementById('sort-by-date');
    sortButton.addEventListener('click', () => {
        aiArray.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
        aiContainer.innerHTML = '';
        displayAi(aiArray);
    });
};

// Add a ToggleSpinner Function to Display And Hide The Loading Spinner
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
// See More Button Function Added
const seeMoreButton = document.getElementById('see-more-button');
seeMoreButton.addEventListener('click', () => {
    currentLimit += 6;
    seeMoreButton.style.display = "none";
    loadAiDetails(currentLimit);
});

loadAiDetails();
