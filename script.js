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
                    <label for="my-modal-5">
                    <i class="fa-solid fa-circle-arrow-right"></i></label>
                
                    </div>
                    </div>
                </div>
            </div>

    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
         <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-1 top-1">✕</label>
         <div class="flex gap-12 hove:box-border">
        <div class="bg-rose-300 rounded-lg p-6">
            <h1 class="font-bold text-5xl">Here Is Title</h1>
            <div class="flex gap-12 mt-5 items-center">
                <div class="bg-slate-100 box-border h-32 w-32 p-4 rounded-lg text-green-600 text-2xl font-bold text-center">$ 10/ month basic</div>
                <div class="bg-slate-100 box-border h-32 w-32 p-4 rounded-lg text-green-600 text-2xl font-bold text-center">67</div>
                <div class="bg-slate-100 box-border h-32 w-32 p-4 rounded-lg text-green-600 text-2xl font-bold text-center">67</div>
            </div>
            <div class="flex gap-12 mt-5 text-center">
                <div>
                <h1 class="text-3xl font-bold">Features</h1>
                <p>. bangladesh</p>
                </div>
                <div>
                <h1 class="text-3xl font-bold">Integrations</h1>
                <p>. bangladesh</p>
                </div>
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
              </div>
            </div>
          </div>
    </div>
  </div>
</div>
        `;
        aiContainer.appendChild(aiDiv);
    });
};



loadAiDetails();