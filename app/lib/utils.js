 export async function fetchApiData() {
    const response = await fetch('https://dog.ceo/api/breed/whippet/images');

    if (!response.ok) {
        throw new Error('Failed to fetch API data');
    }

    const whippetImages = await response.json();
    
    return whippetImages;
}