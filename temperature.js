function websiteCounter() {
    fetch("https://api.countapi.xyz/update/uimonk/youtubechannel/?amount=1")
        .then(res => res.json())
        .then(data => counterElement.innerHTML = data.value)
}

websiteCounter()



counterElement = document.getElementsById("totalCount")[0];