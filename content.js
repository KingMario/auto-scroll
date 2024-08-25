let scrollInterval = null;
let scrollSpeed = 0;
const maxScrollSpeed = 4;
const speedOverMax = maxScrollSpeed + 1;

document.addEventListener('dblclick', function (e) {
    if (e.metaKey) {
        if (e.shiftKey) {
            scrollSpeed -= 1;
        } else {
            scrollSpeed += 1;
        }
        scrollSpeed = (scrollSpeed + speedOverMax) % speedOverMax;

        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }

        if (scrollSpeed > 0) {
            scrollInterval = setInterval(() => {
                const documentElement = document.documentElement;
                
                window.scrollTo({
                    top: documentElement.scrollTop + scrollSpeed,
                    behavior: 'smooth'
                });

                if (documentElement.scrollTop + window.innerHeight >= documentElement.scrollHeight) {
                    clearInterval(scrollInterval);
                    scrollInterval = null;
                }
            }, 60);
        }
    }
});
