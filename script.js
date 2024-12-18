// 語言資料
const translations = {
    zh: {
        title: "火車座位判斷系統",
        trainTypeLabel: "車型：",
        carNumberLabel: "車廂號碼：",
        seatNumberLabel: "座位號碼：",
        submitBtn: "送出",
        resultHighSpeed: "高鐵",
        resultRailway: "台鐵",
        resultError: "請輸入正確的車廂與座位資訊！"
    },
    en: {
        title: "Train Seat Checker",
        trainTypeLabel: "Train Type:",
        carNumberLabel: "Car Number:",
        seatNumberLabel: "Seat Number:",
        submitBtn: "Submit",
        resultHighSpeed: "High Speed Rail",
        resultRailway: "Taiwan Railway",
        resultError: "Please enter valid car and seat information!"
    }
};

// 初始化語言
let currentLang = "zh";

// 更改語言
function changeLanguage(lang) {
    currentLang = lang;
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("trainTypeLabel").textContent = translations[lang].trainTypeLabel;
    document.getElementById("carNumberLabel").textContent = translations[lang].carNumberLabel;
    document.getElementById("seatNumberLabel").textContent = translations[lang].seatNumberLabel;
    document.getElementById("submitBtn").textContent = translations[lang].submitBtn;
}

// 設置語言切換
document.getElementById("languageSelect").addEventListener("change", (e) => {
    changeLanguage(e.target.value);
});

// 座位檢查邏輯
function checkSeat() {
    const trainType = document.getElementById("trainType").value;
    const carNumber = parseInt(document.getElementById("carNumber").value);
    const seatNumber = document.getElementById("seatNumber").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";

    if (!carNumber || !seatNumber) {
        resultDiv.textContent = translations[currentLang].resultError;
        return;
    }

    let seatType = "一般座位"; // Default seat type

    if (trainType === "highSpeed") {
        if (/A$|F$/.test(seatNumber)) {
            seatType = currentLang === "zh" ? "靠窗座位" : "Window Seat";
        } else if (/C$|D$/.test(seatNumber)) {
            seatType = currentLang === "zh" ? "走道座位" : "Aisle Seat";
        }
    } else if (trainType === "railway") {
        if (/1$|4$/.test(seatNumber)) {
            seatType = currentLang === "zh" ? "靠窗座位" : "Window Seat";
        } else if (/2$|3$/.test(seatNumber)) {
            seatType = currentLang === "zh" ? "走道座位" : "Aisle Seat";
        }
    }

    const trainLabel = trainType === "highSpeed"
        ? translations[currentLang].resultHighSpeed
        : translations[currentLang].resultRailway;

    resultDiv.textContent = `${trainLabel}，車廂: ${carNumber}，座位: ${seatNumber} => ${seatType}`;
}

// 綁定按鈕事件
document.getElementById("submitBtn").addEventListener("click", checkSeat);

// 初始化默認語言
changeLanguage(currentLang);
