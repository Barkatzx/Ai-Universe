const loadAiDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayAi(data.data.tools);
}

const displayAiDetails = ai => {
    console.log(ai);
    const modalTitle = document.getElementById('description');
    modalTitle.innerText = ai.tools.description;
}


const displayAi = aiArray => {
    const aiContainer = document.getElementById('ai-container');
    aiArray = aiArray.slice(0,6)
    // Loop through the array of AI objects and call the displayAi function for each one
    aiArray.forEach(ai => {
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('card');
        aiDiv.innerHTML = `
            <div class="card card-compact bg-gray-300 drop-shadow-2xl h-5/6">
                <figure><img src="${ai.image}"/></figure>
                <div class="card-body">
                    <h1 class="text-3xl font-semibold">Features</h1> <br>
                    <p>02. ${ai.features[0]}</p>
                    <p>03. ${ai.features[1]}</p>
                    <p>03. ${ai.features[2]}</p>
                    <hr>
                    <div class="flex justify-between">
                    <div>
                    <h2 class="card-title text-2xl font-semibold">${ai.name}</h2>
                    <p class="font-semibold"><i class="fa-regular fa-calendar-days"></i> ${ai.published_in}</p>
                    </div>
                    <div class="text-3xl">
                    <label for="my-modal-5">
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
            <h1 class="font-bold text-2xl" id="description">${ai.description}</h1>
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
};

loadAiDetails();


const displayAi = aiArray => {
    const aiContainer = document.getElementById('ai-container');
    aiArray = aiArray.slice(0,6);
    aiArray.forEach(ai => {
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('card');
        aiDiv.innerHTML = `
            <div class="card card-compact bg-gray-300 drop-shadow-2xl h-5/6">
                <figure><img src="${ai.image}"/></figure>
                <div class="card-body">
                <h1 class="text-3xl font-semibold">Features</h1> <br>
                    <ol>
                        <li>${ai.features[0]}</li>
                        <li>${ai.features[1]}</li>
                        <li>${ai.features[2]}</li>
                    </ol>
                    <hr>
                    <div class="flex justify-between">
                        <div>
                            <h2 class="card-title text-2xl font-semibold">${ai.name}</h2>
                            <p class="font-semibold"><i class="fa-regular fa-calendar-days"></i> ${ai.published_in}</p>
                        </div>
                        <div class="text-3xl">
                            <label for="my-modal-5">
                            <i class="fa-solid fa-circle-arrow-right"></i></label>
                        </div>
                    </div>
                </div>
            </div>
        `;
        aiContainer.appendChild(aiDiv);
    });
    
};