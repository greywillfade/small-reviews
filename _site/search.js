(async () => {
  const searchInput = document.getElementById('search');

  const handleSearch = (event) => {
    const searchString = event.target.value.toLowerCase();
    const results = ['<hr/>'];
    const searchStrLen = event.target.value.toLowerCase().length;

    if (searchStrLen > 0) {
      posts.forEach((post) => {
        let outStr = "";
        let outLink = "/" + post.date.substr(0, 4);
        if (outLink.substring(1, 4) == new Date().getFullYear()) { outLink = ""; }
        if (
          post.title.toLowerCase().includes(searchString) ||
          post.author.toLowerCase().includes(searchString)
        ) {
          if (post.author != "") { outStr = "📖 " + post.title + " by " + post.author; }
          else { outStr = "🎮 " + post.title; }
          results.push(`
            <p>
              <a href="${outLink}#${post.category}${post.date}">${outStr}</a>
            </p>
          `);
        }
      });
      document.getElementById('results').innerHTML = results.join('');
    } else {
      document.getElementById('results').innerHTML = '';
    }
  };

  searchInput.addEventListener('keyup', handleSearch);
  searchInput.addEventListener('search', handleSearch);

  const posts = await fetch('/search.json').then(res => res.json());
})()


function copyToClipboard(revId) {
    const cb = navigator.clipboard;
    cb.writeText(location.href.replace(location.hash,"") + "#review-"+ revId).then(() => alert('Link to review copied ✨'));
}