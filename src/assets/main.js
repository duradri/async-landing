const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC55-mxUj5Nj3niXFReG44OQ&filter=videos_latest';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb36ec0e05msh359d15b3df1d20dp19914ejsnf8c5092cf24a',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

async function fetchData (urlAPI) {
        const response = await fetch(urlAPI,options);
        const data = await response.json();
        return data;
}

(async ()=> {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.contents.map(video => `
        <a href=https://www.youtube.com/watch?v=${video.video.videoId} target= _blank>
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.video.thumbnails[3].url}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.video.title}
                </h3>
            </div>
            </div>
        </a>`
            ).slice(0,8).join('')}`;
        content.innerHTML = view;
    } catch (err) {
        throw ("ESTE ES EL ERROR: "+err);
    }
})();



// async function fetchData (urlAPI, options) {
//     try{
//         const response = await fetch(urlAPI,options);
//         const data = await response.json();
//         console.log(data.contents[0].video.title);
//         return data;
//     } catch (err){
//         throw err;
//     }
// }

// fetchData(API, options);
