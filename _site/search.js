(async () => {
    document.getElementById('search').addEventListener('keyup', (event) => {
      const searchString = event.target.value.toLowerCase()
      const results = []

      posts.forEach((post) => {
        let outStr = "";
        let outLink = "/" + post.date.substr(0,4);
        if(outLink.substring(1,4) == new Date().getFullYear()) {outLink = "";}
        console.log(outLink);
        if (
          post.title.toLowerCase().includes(searchString) ||
          post.author.toLowerCase().includes(searchString)
        ) {
            if(post.author != "") {outStr = "📖 " + post.title + " by " + post.author;}
            else {outStr = "🎮 " + post.title}
            results.push(`
            <p>
                <a href="${outLink}#${post.category}${post.date}">${outStr}</a>
            </p>
            `)
        }
      })
  
      document.getElementById('results').innerHTML = results.join('')
    })
  
    const posts = await fetch('/search.json').then(res => res.json())
  })()


function copyToClipboard(revId) {
    const cb = navigator.clipboard;
    console.log('hi');
    cb.writeText(location.href.replace(location.hash,"") + "#review-"+ revId).then(() => alert('Link to review copied ✨'));
}