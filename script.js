const filterBtn = document.getElementById("filter-solved");
filterBtn.addEventListener("click", () => {
    if (filterBtn.classList.contains("active")) {
        filterBtn.classList.remove("active");
        filterBtn.innerText = "필터링 취소"
        chrome.tabs.executeScript({
            code: `
                document.querySelectorAll(".col-item").forEach(item => {
                    const isSolved = item.querySelectorAll(".ic-added-circle").length > 0;
                    if (isSolved) {
                        item.style.opacity = 0.2;
                    }
                })
            `
        })
    } else {
        filterBtn.classList.add("active");
        filterBtn.innerText = "해결한 문제 필터링"
        chrome.tabs.executeScript({
            code: `
                document.querySelectorAll(".col-item").forEach(item => {                
                    item.style.opacity = 1;                
                })
            `
        })
    }
})