function change_div_content(menu_item) { //нужна для меню, чтобы менять контент в  фрейме
const a = 'fr1';//название id фрейма
    switch (menu_item) {
        case 'О породе':
            document.getElementById(a).src = "O_Porode.html";
            break;
        case 'Продажа':
            document.getElementById(a).src = "Prodaja.html";
            break;
        case 'Наши дети':
            document.getElementById(a).src = "Nashi_Deti.html";
            break;
        case 'Производители':
            document.getElementById(a).src = "Proizvoditeli.html";
            break;
        case 'Фотогалерея':
            document.getElementById(a).src = "Photogallery.html";
            break;
        case 'Рекомендации':
            document.getElementById(a).src = "Recommendations.html";
            break;
        case 'Контакты':
            document.getElementById(a).src = "Contacts.html";
            break;
    }
}