const loadNews = async (id) =>{
    const res = await fetch(id? `https://openapi.programming-hero.com/api/retro-forum/posts?category=${id}`: 'https://openapi.programming-hero.com/api/retro-forum/posts?category')
    const data = await res.json()
    const news = data.posts;
    displayNews(news)
}

const displayNews = (allNews) =>{
    const newsContainer = document.getElementById('news-container')
    newsContainer.textContent = '';
    allNews.forEach(item => {
        const newDiv = document.createElement('div')
        newDiv.className = 'flex gap-5 p-5 bg-gray-50 rounded-xl border hover:bg-purple-50'
        newDiv.innerHTML = `
        <div class="relative">
            <img class="w-40 rounded-2xl" src="${item.image}" alt="Movie"/>
            <div class="${item.isActive? 'bg-green-500 h-3 w-3 rounded-full absolute -top-1 -right-1': 'bg-red-500 h-3 w-3 rounded-full absolute -top-1 -right-1'}"></div>
        </div>
        <div class="space-y-3 w-full">
                <div class="flex gap-5">
                    <p># ${item.category}</p>
                    <p>Auhtor: ${item.author.name}</p>
                </div>
                <h2 class="card-title">${item.title}</h2>
                <p>${item.description}</p>
                <hr class="border-dashed">
            <div class="flex justify-between">
                <div class="flex gap-5">
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
                </div>
                <div onclick="handleReadingList('${escape(item.title)}', '${item.view_count}')" class="cursor-pointer">
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

let count = 0;
const handleReadingList = (title , viewCount) =>{
    count++
    document.getElementById('read-count').innerText = count
    console.log(count)
    const chacklist = document.getElementById('chack-list')
    const newDiv = document.createElement('div')
    newDiv.className = 'bg-white p-5 rounded-xl shadow-xl flex justify-between';
    newDiv.innerHTML = `
    <h3 class="font-bold">${unescape(title)}</h3>
    <div class="flex items-center gap-1">
        <img src="images/eye.png" alt="">
        <p>${viewCount}</p>
    </div>
    `;
    chacklist.appendChild(newDiv)
}



const loadPost = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    displayPost(data)
}

const displayPost = (posts) =>{
    const postCards = document.getElementById('post-cards')
    posts.forEach(item => {
        const newDiv = document.createElement('div')
        newDiv.className = 'card card-compact bg-base-100 border pb-5'
        newDiv.innerHTML = `
        <figure><img class="p-4 rounded-3xl" src="${item.cover_image}" alt="posts" /></figure>
          <div class="px-5 flex items-center gap-3">
            <img src="images/calender.png" alt="">
            <p>${item.author.posted_date? item.author.posted_date: 'No publish date' }</p>
          </div>
          <div class="card-body">
            <h2 class="card-title">What will a mars habitat force that impact in our daily life!!!</h2>
            <p>Yes, you can run unit tests and view the results directly within the app. </p>
          </div>
          <div class="flex gap-5 items-center ml-5">
            <div>
              <img class="w-12 h-12 rounded-full" src="${item.profile_image}" alt="">
            </div>
            <div class="">
              <p class="font-bold">${item.author.name}</p>
              <p>${item.author.designation? item.author.designation: 'Unknown'}</p>
            </div>
          </div>
        `
        postCards.appendChild(newDiv)
    }); 
}









loadPost()






loadNews()