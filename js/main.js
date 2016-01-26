/**
 * Created by 1 on 20.01.2016.
 */
//You	should	wrap	all	your	jQuery	code
//$(function () {
// $('input').click(function () {
//   $(this).css("font-size", "30px");
//});
//});


var title = "Сир";

function addItem(title) {
    var node = $(ITEM_TEMPLATE);	//Create	new	HTML	node
    node.find(".goodName").text(title);	//Set	product	title
//Delete	Action
    node.find(".cross").click(function () {
        node.remove();
    });
    LIST.append(node);	//Add	to	the	end	of	the	list
}
$('addButton').click(addItem);