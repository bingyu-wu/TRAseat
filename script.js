// 語言資料
const translations = {
    zh: {
        title: "🚆 鐵路座位判斷系統 🚆",
        subtitle: "快速查詢您的座位屬性，享受舒適的鐵路旅程！",
        languageLabel: "語言：",
        trainTypeLabel: "車型：",
        carNumberLabel: "車廂號碼：",
        seatNumberLabel: "座位號碼：",
        submitBtn: "🚂 查詢座位屬性",
        resultHighSpeed: "高鐵",
        resultRailway: "台鐵",
        resultError: "請輸入正確的車廂與座位資訊！",
        carNumberError: "車廂號碼必須是1到12之間的整數。",
        seatNumberError: "座位號碼格式不正確，應為如 \"1A\" 或 \"10B\"。"
    },
    en: {
        title: "🚆 Train Seat Checker 🚆",
        subtitle: "Quickly check your seat attributes and enjoy a comfortable railway journey!",
        languageLabel: "Language:",
        trainTypeLabel: "Train Type:",
        carNumberLabel: "Car Number:",
        seatNumberLabel: "Seat Number:",
        submitBtn: "🚂 Check Seat Attributes",
        resultHighSpeed: "High Speed Rail",
        resultRailway: "Taiwan Railway",
        resultError: "Please enter valid car and seat information!",
        carNumberError: "Car number must be an integer between 1 and 12.",
        seatNumberError: "Seat number format is invalid. Examples: \"1A\", \"10B\"."
    }
};

// 初始化語言
let currentLang = "zh";

// 更新語言內容
function changeLanguage(lang) {
    currentLang = lang;
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    document.getElementById("languageLabel").textContent = translations[lang].languageLabel;
    document.getElementById("trainTypeLabel").textContent = translations[lang].trainTypeLabel;
    document.getElementById("carNumberLabel").textContent = translations[lang].carNumberLabel;
    document.getElementById("seatNumberLabel").textContent = translations[lang].seatNumberLabel;
    document.getElementById("submitBtn").textContent = translations[lang].submitBtn;
    document.getElementById("carNumberError").textContent = translations[lang].carNumberError;
    document.getElementById("seatNumberError").textContent = translations[lang].seatNumberError;
}

// 綁定語言切換事件
document.getElementById("languageSelect").addEventListener("change", (e) => {
    changeLanguage(e.target.value);
});

// 驗證邏輯
/*function validateCarNumber() {
    const carNumber = document.getElementById('carNumber').value.trim();
    const carNumberError = document.getElementById('carNumberError');
    if (!/^\d+$/.test(carNumber) || carNumber < 1 || carNumber > 12) {
        carNumberError.style.display = 'block';
        return false;
    }
    carNumberError.style.display = 'none';
    return true;
}

function validateSeatNumber() {
    const seatNumber = document.getElementById('seatNumber').value.trim();
    const seatNumberError = document.getElementById('seatNumberError');
    if (!/^\d+[A-Fa-f]$/.test(seatNumber)) {
        seatNumberError.style.display = 'block';
        return false;
    }
    seatNumberError.style.display = 'none';
    return true;
}

// 表單提交邏輯
function validateAndSubmit() {
    const isCarValid = validateCarNumber();
    const isSeatValid = validateSeatNumber();
    if (!isCarValid || !isSeatValid) return;

    const trainType = document.getElementById("trainType").value;
    const carNumber = parseInt(document.getElementById("carNumber").value);
    const seatNumber = document.getElementById("seatNumber").value.trim();

    let seatType = currentLang === "zh" ? "一般座位" : "Standard Seat";

    if (trainType === "highSpeed") {
        if (/A$|F$/i.test(seatNumber)) {
            seatType = currentLang === "zh" ? "靠窗座位" : "Window Seat";
        } else if (/C$|D$/i.test(seatNumber)) {
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

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.textContent = `${trainLabel}，${translations[currentLang].carNumberLabel} ${carNumber}，${translations[current}Lang].seatNumberLabel} ${seatNumber}，${seatType}。`;
}*/