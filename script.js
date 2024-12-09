function updateResult() {
    const display = document.getElementById('display');
    const liveResult = document.getElementById('live-result');
    
    try {
        const result = eval(display.value);
        if (!isNaN(result) && display.value.trim() !== "") {
            liveResult.textContent = `${result}`;
        } else {
            liveResult.textContent = '';
        }
    } catch {
        liveResult.textContent = '';
    }
}
