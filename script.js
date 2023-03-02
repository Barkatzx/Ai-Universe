const loadAiDetails = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    // displayAi (data.data);
    displayAi(data.data.tools);
}


const displayAi = aiArray => {
    const aiContainer = document.getElementById('ai-container');
    
    // Loop through the array of AI objects and call the displayAi function for each one
    aiArray.forEach(ai => {
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('card');
        aiDiv.innerHTML = `
            <div class="card card-compact bg-gray-300 drop-shadow-2xl h-5/6">
                <figure><img src="${ai.image}"/></figure>
                <div class="card-body">
                    <h1 class="text-3xl font-semibold">Features</h1> <br>
                    <p>01. ${ai.features[0]}</p>
                    <p>02. ${ai.features[1]}</p>
                    <p>03. ${ai.features[2]}</p> <hr>
                    <div class="flex justify-between">
                    <div>
                    <h2 class="card-title text-2xl font-semibold">${ai.name}</h2>
                    <p class="font-semibold"><i class="fa-regular fa-calendar-days"></i> ${ai.published_in}</p>
                    </div>
                    <div class="card-actions text-3xl">
                    <i class="fa-solid fa-circle-arrow-right"></i>
                    </div>
                    </div>
                </div>
            </div>
        `;
        aiContainer.appendChild(aiDiv);
    });
};



loadAiDetails();