async function fetchArticleData() {
    try {
        const response = await fetch('https://worldview.stratfor.com/topic/tracking-us-naval-power');
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // Find the first article
        const firstArticle = doc.querySelector('.article-body'); // Adjust selector as needed
        const firstImage = firstArticle.querySelector('img');
        const assessmentDate = firstArticle.querySelector('.assessment-date'); // Adjust selector as needed

        // Set the image source and link
        document.getElementById('naval-image').src = firstImage.src;
        document.getElementById('source-link').href = 'https://worldview.stratfor.com/topic/tracking-us-naval-power';
        document.getElementById('source-link').textContent = 'Source';
        document.getElementById('assessment-date').textContent = `Assessment Date: ${assessmentDate.textContent}`;
    } catch (error) {
        console.error('Error fetching article data:', error);
    }
}

// Fetch data on page load
window.onload = fetchArticleData;
