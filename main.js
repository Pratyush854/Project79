menu_list_array = ["Margherita Pizza",
                   "Farmhouse Pizza",
                   "Cheese N Corn Pizza",
                   "Deluxe Veggie Pizza",
                   "Peppy Paneer Pizza",
                   "Mexican Green Wave Pizza",
                   "Veg Extravaganza Pizza",
                   "Paneer Makhani Pizza",
                   "Pepper Barbeque Chicken Pizza",
                   "Chicken Sausage Pizza",
                   "Non Veg Supreme Pizza",
                   "Chicken Fiesta Pizza",
                   "Indi Chicken Tikka Pizza"];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for (var i = 0;i<menu_list_array.length;i++) {
        htmldata=htmldata+"<li>"+menu_list_array[i]+"</li>"
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata="<section class='cards'>";
    for (var i=0;i<menu_list_array.length;i++) {
        htmldata=htmldata+'<div class="card">'+'<img src="images/pizzaImg.png">'+menu_list_array[i]+'</div>';
    }
    htmldata=htmldata+"</section>";
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}