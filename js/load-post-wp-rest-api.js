/**
* load-post-wp-rest-api.js
* @author Lynix Networks
* @version 1.2
*/

 let page = 1;
 const perPage = 6;
 const loadMoreBtn = document.getElementById('load-more');
 
 function loadPosts() {
   fetch(`https://sma.sch.id/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`)
     .then(response => {
       if (!response.ok) throw new Error('No more posts');
       return response.json();
     })
     .then(posts => {
       const postContainer = document.getElementById('post-container');
 
       posts.forEach(post => {
         const postCard = document.createElement('div');
         postCard.className = 'col-md-4';
 
         let imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/400x200';
 
         postCard.innerHTML = `
           <div class="card">
             <img src="${imageUrl}" class="card-img-top" alt="${post.title.rendered}">
             <div class="card-body">
               <h5 class="card-title">${post.title.rendered}</h5>
               <p class="card-text">${post.excerpt.rendered}</p>
               <a href="${post.link}" class="btn btn-primary">Baca Selengkapnya</a>
             </div>
           </div>
         `;
         postContainer.appendChild(postCard);
       });
 
       if (posts.length < perPage) {
         loadMoreBtn.style.display = 'none';
       }
     })
     .catch(error => {
       console.error('Error:', error);
       loadMoreBtn.style.display = 'none';
     });
 }
 
 loadPosts();
 
 loadMoreBtn.addEventListener('click', () => {
   page++;
   loadPosts();
 });
