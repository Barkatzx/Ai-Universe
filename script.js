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
