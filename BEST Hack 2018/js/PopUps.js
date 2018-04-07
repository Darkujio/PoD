//Функция отображения PopUp
function PopUpShow(eId) {
    $(eId).show();
}
//Функция скрытия PopUp
function PopUpHide(eId) {
    $(eId).hide();
}

$(document).ready(function () {
    //Скрыть PopUp`ы при загрузке страницы    
    PopUpHide("#iInfo");
    PopUpHide("#jInfo");
    PopUpHide("#sInfo");
    PopUpHide("#yInfo");
    PopUpHide("#nInfo");
});