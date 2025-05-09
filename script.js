function interview() {
    const wantsToWork = confirm("Чи хотіли б ви працювати у нас?");
    
    if (wantsToWork) {
        let age = prompt("Введіть ваш вік:");
        
        if (age >= 18) {
            let answer = prompt("Розв'яжіть задачу: 2 + 2(4 + 2) = ?");

            if (answer == 2 + 2 * (4 + 2)) {
                compareStrings()
                alert("Вітаємо! Ви успішно пройшли перевірку.");

                const phone = prompt("Будь ласка, введіть ваш номер телефону:");
                
                alert("Дякуємо за участь у співбесіді. Ми зв'яжемося з вами!");
            } else {
                alert("Перевірку не пройдено. Спробуйте ще!.");
            }
        } else {
            alert("Вибачте, ви занадто молоді для цієї роботи.");
        }
    } else {
        alert("Співбесіду завершено.");
    }
}

function showDeveloperInfo(lastName, firstName, position = "студент") {
    alert("Розробник: " + firstName + " " + lastName + "\nПосада: " + position);
}

function compareStrings() {
    let str1 = prompt("Лаконічність це добре, але не в розмові з клієнтом, можете потренуватись тут. Введіть перший варіант:");
    let str2 = prompt("Введіть другий варіант:");

    switch (true) {
        case (str1.length > str2.length):
            alert("Перший рядок довший: " + str1);
            break;
        case (str1.length < str2.length):
            alert("Другий рядок довший: " + str2);
            break;
        case (str1.length === str2.length):
            alert("Рядки однакової довжини");
            break;
    }
}

function changeBackground() {
    document.body.style.backgroundColor = "#f0f8ff"; 
    setTimeout(() => {
        document.body.style.backgroundColor = ""; 
    }, 30000); 
}

function redirectPage() {
    location.href = "https://www.example.com"; 
}

function changeContent() {
    const element = document.getElementById("catalog-header");
    document.write("<p>Це новий текст, доданий через document.write.</p>");
}

function insertNewElement() {
    const newElement = document.createElement("p");
    const textNode = document.createTextNode("Це новий абзац, доданий через JavaScript.");
    newElement.appendChild(textNode);
    document.body.appendChild(newElement); 
    const newPrependElement = document.createElement("p");
    const textPrependNode = document.createTextNode("Це новий абзац, доданий на початок документа.");
    newPrependElement.appendChild(textPrependNode);
    document.body.prepend(newPrependElement); 
}

function manipulateNodes() {
    const newParagraph = document.createElement("x");
    const textNode = document.createTextNode("Цей абзац доданий після існуючого елемента.");
    newParagraph.appendChild(textNode);
    const existingParagraph = document.querySelector("p"); 
    existingParagraph.after(newParagraph); 
    const replacementParagraph = document.createElement("p");
    replacementParagraph.textContent = "Цей абзац замінить попередній.";
    existingParagraph.replaceWith(replacementParagraph); 
}

function removeElement() {
    const element = document.querySelector("x");
    element.remove(); 
}

// 1. Обробник для підсвічування елементів списку категорій товарів
function handleClick(event) {
    const clickedElement = event.currentTarget; 
    clickedElement.style.backgroundColor = "#dcdcdc"; 
    console.log("Клік по категорії: " + clickedElement.id); 

    // Виводимо елемент на сторінку через infoDiv
    document.getElementById("infoDiv").textContent = "Ви клікнули на категорію: " + clickedElement.id;
}

// 2. Призначення функції через атрибут (HTML)
document.getElementById("washing-machines").setAttribute("onclick", "handleClick(event)");

// 3. Призначення функції через властивість (JavaScript)
const blendersElement = document.getElementById("blenders");
blendersElement.onclick = handleClick;

// 4. Використання addEventListener для однієї події з різними обробниками
const refrigeratorsElement = document.getElementById("refrigerators");
refrigeratorsElement.addEventListener("click", function() {
    alert("Ви клікнули на холодильники!");
});

refrigeratorsElement.addEventListener("click", function() {
    console.log("Додаткове повідомлення про холодильники.");
});

// 5. Призначення обробником об'єкта за допомогою handleEvent
class ClickHandler {
    handleEvent(event) {
        alert("Ви клікнули на елемент: " + event.currentTarget.tagName);
    }
}

const clickHandler = new ClickHandler();
document.getElementById("microwaves").addEventListener("click", clickHandler);

// 6. Видалення обробника події
function removeHandler() {
    document.getElementById("microwaves").removeEventListener("click", clickHandler);
    alert("Обробник для мікрохвильовок видалено.");
}
setTimeout(removeHandler, 5000); 


document.getElementById("category-list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {

        const allItems = document.querySelectorAll("#category-list li");
        allItems.forEach(item => item.style.backgroundColor = "");


        event.target.style.backgroundColor = "#dcdcdc";
    }
});


// обробник на меню
document.getElementById("menu").addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {
        const action = event.target.getAttribute("data-action");


        switch (action) {
            case "changeBackground":
                document.body.style.backgroundColor = "#f0f8ff";
                break;
            case "redirectPage":
                window.location.href = "https://www.example.com";
                break;
            case "showAlert":
                alert("Це повідомлення!");
                break;
            default:
                console.log("Невідома дія");
        }
    }
});

//  обробник для меню з поведінкою
document.getElementById("menu-behavior").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        const action = event.target.getAttribute("data-action");

        switch (action) {
            case "addText":
                const text = event.target.getAttribute("data-text");
                document.getElementById("text-container").textContent = text;
                break;
            case "removeText":
                document.getElementById("text-container").textContent = "";
                break;
            default:
                console.log("Невідома дія");
        }
    }
});



