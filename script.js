// 語言資料
const translations = {
    zh: {
        head: "臺鐵對號列車座位查詢",
        title: "🚆 臺鐵對號列車座位查詢 🚆",
        subtitle: "快速查詢您的座位屬性，享受舒適的鐵路旅程！",
        languageLabel: "語言：",
        trainTypeLabel: "車型：",
        carNumberLabel: "車廂號碼：",
        seatNumberLabel: "座位號碼：",
        submitBtn: "🚂 送出",
    },
    en: {
        head: "Train Seat Checker",
        title: "🚆 Train Seat Checker 🚆",
        subtitle:
            "Quickly check your seat attributes and enjoy a comfortable railway journey!",
        languageLabel: "Language:",
        trainTypeLabel: "Train Type:",
        carNumberLabel: "Car Number:",
        seatNumberLabel: "Seat Number:",
        submitBtn: "🚂 Submit",
    },
};

// 初始化語言
let currentLang = "zh";

// 更新語言內容
function changeLanguage(lang) {
    currentLang = lang;
    document.getElementById("head").textContent = translations[lang].head;
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("subtitle").textContent =
        translations[lang].subtitle;
    document.getElementById("languageLabel").textContent =
        translations[lang].languageLabel;
    document.getElementById("trainTypeLabel").textContent =
        translations[lang].trainTypeLabel;
    document.getElementById("carNumberLabel").textContent =
        translations[lang].carNumberLabel;
    document.getElementById("seatNumberLabel").textContent =
        translations[lang].seatNumberLabel;
    document.getElementById("submitBtn").textContent =
        translations[lang].submitBtn;
    document.getElementById("carNumberError").textContent =
        translations[lang].carNumberError;
    document.getElementById("seatNumberError").textContent =
        translations[lang].seatNumberError;
}

// 綁定語言切換事件
document.getElementById("languageSelect").addEventListener("change", (e) => {
    changeLanguage(e.target.value);
});

// Taroko
function taroko(carNumber, seatNumber) {
    let total_line;
    if (carNumber == 1 || carNumber == 8) {
        total_line = 10;
    } else if (
        carNumber == 2 ||
        carNumber == 4 ||
        carNumber == 5 ||
        carNumber == 7
    ) {
        total_line = 13;
    } else if (carNumber == 3 || carNumber == 6) {
        total_line = 12;
    }
    let location;
    for (let line = 1; line <= total_line; line++) {
        if (4 * line - 3 == seatNumber) {
            location = 1;
            break;
        } else if (4 * line - 1 == seatNumber) {
            location = 2;
            break;
        } else if (4 * line == seatNumber) {
            location = 3;
            break;
        } else if (4 * line - 2 == seatNumber) {
            location = 4;
            break;
        }
    }
    if (carNumber == 1 || carNumber == 2 || carNumber == 3 || carNumber == 4) {
        location = 5 - location;
    }
    if (location == 1) {
        alert("🌊 海側靠窗 🪟");
    } else if (location == 2) {
        alert("🌊 海側靠走道 🚶");
    } else if (location == 3) {
        alert("⛰️ 山側靠走道 🚶");
    } else if (location == 4) {
        alert("⛰️ 山側靠窗 🪟");
    } else {
        alert("座位資訊輸入錯誤");
    }
}

// Puyuma
function puyuma(carNumber, seatNumber) {
    let total_line;
    if (carNumber == 1 || carNumber == 8) {
        total_line = 9;
    } else if (
        carNumber == 2 ||
        carNumber == 4 ||
        carNumber == 5 ||
        carNumber == 7
    ) {
        total_line = 13;
    } else if (carNumber == 3 || carNumber == 6) {
        total_line = 12;
    }
    let location;
    for (let line = 1; line <= total_line; line++) {
        if (4 * line - 3 == seatNumber) {
            location = 1;
            break;
        } else if (4 * line - 1 == seatNumber) {
            location = 2;
            break;
        } else if (4 * line == seatNumber) {
            location = 3;
            break;
        } else if (4 * line - 2 == seatNumber) {
            location = 4;
            break;
        }
    }
    if (carNumber == 1 || carNumber == 2 || carNumber == 3 || carNumber == 4) {
        location = 5 - location;
    }
    if (location == 1) {
        alert("🌊 海側靠窗 🪟");
    } else if (location == 2) {
        alert("🌊 海側靠走道 🚶");
    } else if (location == 3) {
        alert("⛰️ 山側靠走道 🚶");
    } else if (location == 4) {
        alert("⛰️ 山側靠窗 🪟");
    } else {
        alert("座位資訊輸入錯誤");
    }
}

// EMU3000
function newEMU(carNumber, seat) {
    let total_line;
    if (carNumber == 1 || carNumber == 3 || carNumber == 6 || carNumber == 12) {
        total_line = 10;
    } else if (
        carNumber == 2 ||
        carNumber == 4 ||
        carNumber == 5 ||
        carNumber == 8 ||
        carNumber == 9 ||
        carNumber == 10 ||
        carNumber == 11
    ) {
        total_line = 13;
    } else if (carNumber == 7) {
        total_line = 7;
    }

    let location;
    //VIP Car
    if (carNumber == 6) {
        for (let line = 1; line <= total_line; line++) {
            if (4 * line - 3 == seat) {
                location = 1;
                break;
            } else if (4 * line - 1 == seat) {
                location = 2;
                break;
            } else if (4 * line == seat) {
                location = 3;
                break;
            }
        }
        if (location == 3) {
            alert("🌊 海側靠窗 🪟");
        } else if (location == 2) {
            alert("⛰️ 山側靠走道 🚶");
        } else if (location == 1) {
            alert("⛰️ 山側靠窗 🪟");
        } else {
            alert("座位資訊輸入錯誤");
        }
    }

    //Normal Car
    else {
        for (let line = 1; line <= total_line; line++) {
            if (4 * line - 3 == seat) {
                location = 1;
                break;
            } else if (4 * line - 1 == seat) {
                location = 2;
                break;
            } else if (4 * line == seat) {
                location = 3;
                break;
            } else if (4 * line - 2 == seat) {
                location = 4;
                break;
            }
        }
        if (
            carNumber == 1 ||
            carNumber == 2 ||
            carNumber == 3 ||
            carNumber == 4 ||
            carNumber == 5 ||
            carNumber == 7 ||
            carNumber == 8
        ) {
            location = 5 - location;
        }
        if (location == 1) {
            alert("🌊 海側靠窗 🪟");
        } else if (location == 2) {
            alert("🌊 海側靠走道 🚶");
        } else if (location == 3) {
            alert("⛰️ 山側靠走道 🚶");
        } else if (location == 4) {
            alert("⛰️ 山側靠窗 🪟");
        } else {
            (cout << "Wrong input information.") << endl;
        }
    }
}

// Main
document.getElementById("submitBtn").onclick = function () {
    var trainType = document.getElementById("trainType").value;
    var carNumber = document.getElementById("carNumber").value;
    var seatNumber = document.getElementById("seatNumber").value;
    if (trainType == "taroko") {
        taroko(carNumber, seatNumber);
    } else if (trainType == "puyuma") {
        puyuma(carNumber, seatNumber);
    } else if (trainType == "newEMU") {
        newEMU(carNumber, seatNumber);
    } else {
        alert("所選車型尚無資料");
    }
};
