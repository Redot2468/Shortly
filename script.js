const menuMobile = document.querySelector(".menu__mobile");
const hamburger = document.querySelector(".fa-bars");
const menuClose = document.querySelector(".fa-xmark");
const menuSigns = document.querySelector(".menu__signs");
const shortenContainer = document.querySelector(".shorten__links-container");

// for the menu
menuSigns.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden");
    hamburger.classList.toggle("hidden");
    menuClose.classList.toggle("hidden");
})

// shortening the link...
const shortenBtn = document.querySelector(".shorten__btn");
const inputField = document.querySelector(".input__field");
shortenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getData(inputField.value);
    console.log(copyBtn.length)

    if(inputField.value === ""){
        inputField.style.border = "1px solid red";
    }
    else{
        inputField.style.border = "none";
    }
})
         

// getting data...
async function getData(link){
    try{
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
        if(!res.ok)
            throw new Error(`Error with the api. ${res.status}`);

            const data = await res.json();
            displayData(data);
    }
    catch(err){
        console.log(err.message)
    }
}

// displaying data...
function displayData(link){
    const html =
        `
        <div class="links space-y-6 mt-6 font-medium">
              <section
                class="p-4 md:py-2 md:px-6 bg-white flex flex-col md:flex-row md:space-y-0 md:justify-between md:items-center space-y-3 rounded-lg"
              >
                <p
                  class="pb-3 md:pb-0 text-veryDarkBlue overflow-hidden border-b md:border-0 border-gray md:w-[45%]"
                >
                  ${link.result.original_link}
                </p>

                <section
                  class="space-y-4 py-1 flex-auto md:py-0 md:space-y-0 flex flex-col md:flex-row md:w-[55%] md:gap-x-8 md:items-center md:justify-end"
                >
                  <p class="shortened__link copy__btn text-cyan overflow-hidden">${link.result.full_short_link}</p>
                  <button
                    type="submit"
                    class="bg-cyan py-3 px-8 font-semibold text-white w-full md:w-[25%] rounded-xl cursor-pointer hover:bg-sky-400 transition-colors duration-200"
                  >
                    Copy
                  </button>
                </section>
              </section>
            </div>
        `
        shortenContainer.insertAdjacentHTML("afterbegin", html)
  
}

// copying the shortened link...
shortenContainer.addEventListener("click", (e) => {
    const copyBtn = e.target.closest("button");
    const shortenUrls = e.target.closest(".links").querySelector(".shortened__link").innerText;
    navigator.clipboard.writeText(shortenUrls)
        .then(success =>{
            copyBtn.innerText = "Copied!";
            copyBtn.style.background = "hsl(257, 27%, 26%)";
        })
})