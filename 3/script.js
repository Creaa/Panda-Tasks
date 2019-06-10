const apiKey = "sGYddUq5gkvbIK8BB558HFzUhrjkcKvp"
const resultsLimit = 200;
const generateCatButton = $('#createCat');
const catImage = $('#catImage');

const fetchData = async () => {
	generateCatButton.addClass("disabled")
	let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=cat&api_key=${apiKey}&limit=${resultsLimit}`)
	let {
		data
	} = await res.data;
	await setImage(data)
}

const setImage = (dataList) => {
	const randomNumber = Math.floor(Math.random() * (dataList.length - 0 + 1)) + 0;
	const filteredData = dataList.filter((el, index) => index === randomNumber);
	catImage[0].src = filteredData[0].images.downsized.url
	generateCatButton[0].innerText = generateCatButton[0].innerText === "Just one more cat!" ? false : "Just one more cat!";
	generateCatButton.removeClass("disabled")
}

generateCatButton.on("click", fetchData)