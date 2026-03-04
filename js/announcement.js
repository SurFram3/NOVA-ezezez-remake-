function execAction(command, value = null) {
    document.execCommand(command, false, value);
    document.getElementById('editor').focus();
}

function saveData() {
    const htmlContent = document.getElementById('editor').innerHTML;
    const textContent = document.getElementById('editor').innerText;
    console.log("Результат (HTML):", htmlContent);
    alert("Текст сохранен! Проверьте консоль (F12)");
}
