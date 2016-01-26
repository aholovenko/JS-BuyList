/**
 * Created by 1 on 20.01.2016.
 */
//You	should	wrap	all	your	jQuery	code
$(function () {

    //new items will be added to section1
    var LIST = $(".section1");


    //class templates contains a good template
    var ITEM_TEMPLATE = $(".template").html();

    var ITEM_STATS_TEMPLATE = $(".template2").html();


    //click or keypress addButton to add a new good
    $('#addButton').click(function () {
        //var that remembers name of a good read from the input form
        var title = $("#addForm").val();
        $("#addForm").val("");

        if (titlee == "")
            return;

        var node = $(ITEM_TEMPLATE);

        var node2 = $(ITEM_STATS_TEMPLATE);

        node.find(".goodName").val(title); //Set product title

        //Delete Action
        node.find(".cross").click(function () {
            node.remove();

            node2.remove();

        });

        //change the quantity of the specific good in a list
        node.find(".plus").click(function () {
            var num = $(this).parent().find(".quantity").text();
            num = parseInt(num);
            $(this).parent().find(".quantity").text(++num);
            if (num > 1) {
                $(this).parent().find(".minus").css("background-color", "#db2828");
            }
        });

        node.find(".minus").click(function () {
            var num = $(this).parent().find(".quantity").text();
            num = parseInt(num);
            if (num > 1) {
                $(this).parent().find(".quantity").text(--num);
            }
            if (num == 1) {
                $(this).css("background-color", "#ff9e82");
            }
        });
        {
            node.find(".baught").click(function () {
                $(this).parent().find(".quantity").css("margin-right", "275px");
                $(this).parent().find(".goodName").css("text-decoration", "line-through");
                $(this).parent().find(".cross").hide();
                $(this).parent().find(".plus").hide();
                $(this).parent().find(".minus").hide();
                $(this).val("Не куплено");
            });
        }

        $('#addForm').focus();

        node2.find("div.title").text(title);
        node2.find("div.c").text(node.find(".quantity").val());
        $("section2").find(".statsPant").append(node2);

        LIST.append(node); //Add to the end of the list

    });

    //actions with the existing goods from the list

    $('.cross').click(function () {
        var name = $(this).parent().find(".goodName").val();
        console.log(name);
        $(this).parent().remove();
    });

    $('.plus').click(function () {
        var num = $(this).parent().find(".quantity").text();
        num = parseInt(num);
        num++;
        if (num > 1) {
            $(this).parent().find(".minus").css("background-color", "#db2828");
        }
        $(this).parent().find(".quantity").text(num);
    });

    $('.minus').click(function () {
        var num = $(this).parent().find(".quantity").text();
        num = parseInt(num);
        if (num > 1) {
            $(this).parent().find(".quantity").text(--num);
        }
        if (num == 1) {
            $(this).css("background-color", "#ef9e9e");
        }
    });

    $('.baught').click(function () {
        $(this).parent().find(".quantity").css("margin-right", "275px");
        $(this).parent().find(".goodName").css("text-decoration", "line-through");
        $(this).parent().find(".cross").hide();
        $(this).parent().find(".plus").hide();
        $(this).parent().find(".minus").hide();
        $(this).val("Не куплено");
        //     $('.baught').click()
    });


});
