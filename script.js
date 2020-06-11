const urlList = {
	ktorErkinq: "RlqcCKennJw",
	pingvinVin: "haf55skhMrA",
	tteni: "_6gUU-5Izko",
	khatabala: "0JgcVmV4Lvw",
	hayrik: "8JiE59BPeto",
};
let keys = Object.keys(urlList);
const video = document.getElementById("video")
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const randomButton = document.getElementById('random');
let generateValidUrl = endPart => "https://www.youtube.com/embed/" + endPart + "?enablejsapi=1";
let index = 0;
let setVideoUrl = (v_index = 0) => {
	// video.createAttribute("src");
	return video.setAttribute("src", generateValidUrl(urlList[keys[v_index]]));
}
setVideoUrl();
const nextSlide = () => {
	if (index === keys.length - 1) {
		index = 0;
	} else {
		index++;
	}
	setVideoUrl(index);
}
const prevSlide = () => {
	if (index === 0) {
		index = keys.length - 1;
	} else {
		index--;
	}
	setVideoUrl(index);
}

const randomSlide = list =>{
	let index = Math.trunc(Math.random()*list.length);
	setVideoUrl(index);
}

const fadeOut = ()=> {
	video.style.opacity='0';
	video.style.backgroundColor = 'black'
	video.style.transition='all 1s';
}

const fadeIn  =()=>{
	video.style.opacity='1';
	video.style.backgroundColor = 'black'
	video.style.transition='all 1s';
}

nextButton.addEventListener('click', e => {
	fadeOut();
	nextSlide();
	fadeIn();
});

prevButton.addEventListener('click', e => {
	fadeOut();
	prevSlide();
	fadeIn();
})

randomButton.addEventListener('click', e=>{
	fadeOut();
	randomSlide(keys);
	fadeIn()
})

