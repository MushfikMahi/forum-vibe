const loadNews = async (id='coding') =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${id}`)
    const data = await res.json()
    const news = data.posts;
    displayNews(news)
}

const displayNews = (allNews) =>{
    const newsContainer = document.getElementById('news-container')
    newsContainer.textContent = '';
    allNews.forEach(item => {
        const newDiv = document.createElement('div')
        newDiv.className = 'flex gap-5 p-5 bg-base-100 rounded-xl shadow-xl'
        newDiv.innerHTML = `
        <div>
            <img class="w-40 rounded-2xl" src="${item.image}" alt="Movie"/>
        </div>
        <div class="space-y-3">
            <div class="flex gap-5">
                <p># ${item.category}</p>
                <p>Auhtor: ${item.author.name}</p>
            </div>
            <h2 class="card-title">${item.title}</h2>
            <p>${item.description}</p>
            <hr class="border-dashed">
            <div class="flex justify-between">
            <div class="flex items-center gap-3">
                <img src="images/massage.png" alt="">
                <p>${item.comment_count}</p>
            </div>
            <div class="flex items-center gap-3">
                <img src="images/eye.png" alt="">
                <p>${item.view_count}</p>
            </div>
            <div class="flex items-center gap-3">
                <img src="images/clock.png" alt="">
                <p>${item.posted_time}</p>
            </div>
            <div class="">
                <img src="images/msg box.png" alt="">
            </div>
            </div>
        </div>
        `
        newsContainer.appendChild(newDiv)
    });
}

const handleSearch = () =>{
    const value = document.getElementById('search-box').value;
    loadNews(value)
}

loadNews()