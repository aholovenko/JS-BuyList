/**
 * Created by 1 on 20.01.2016.
 */
//You	should	wrap	all	your	jQuery	code
$(function () {

    //new items will be added to section1
    var LIST = $(".section1");
    var LIST2 = $(".section2");

    //classes templates contain good's template
    var ITEM_TEMPLATE = $(".template").html();
    var ITEM_STATS_TEMPLATE = $(".template2").html();


    //click or keypress addButton to add a new good
    $('#addButton').click(function () {
        //var that remembers name of a good read from the input form
        var title = $("#addForm").val();
        $("#addForm").val("");

        if (title == "")
            return;

        var node = $(ITEM_TEMPLATE);
        var node2 = $(ITEM_STATS_TEMPLATE);

        node.find(".goodName").val(title); //Set product title

        //   node.find("input.gName").change(function(){
        //       title = node.find(".goodName").val();
        //       console.log(title);
        //      node2.find(".name").text(title);
        //  });

        //Delete Action
        node.find(".cross").click(function () {
            node.remove();
            node2.remove();
        });

        var number = node.find(".quantity").text();

        //change the quantity of the specific good in a list
        node.find(".plus").click(function () {
            var num = $(this).parent().find(".quantity").text();
            num = parseInt(num);
            $(this).parent().find(".quantity").text(++num);
            if (num > 1) {
                $(this).parent().find(".minus").css("background-color", "#db2828");
            }
            node2.find(".c").text(num);
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
            node2.find(".c").text(num);
        });

        node.find('.notBaught').hide();

        node.find(".baught").click(function () {
            $(this).parent().find(".quantity").css("margin-right", "275px");
            $(this).parent().find(".goodName").css("text-decoration", "line-through");
            $(this).parent().find(".cross").hide();
            $(this).parent().find(".plus").hide();
            $(this).parent().find(".minus").hide();
            $(this).hide();
            $(this).parent().find(".notBaught").show();
            node2.remove();
            node2.find(".name").css("text-decoration", "line-through");
            node2.find(".c").css("text-decoration", "line-through");
            LIST2.find("#statsPan2").append(node2);
        });

        node.find('.notBaught').click(function () {
            $(this).parent().find(".quantity").css("margin-right", "5px");
            $(this).parent().find(".goodName").css("text-decoration", "none");
            $(this).parent().find(".cross").show();
            $(this).parent().find(".plus").show();
            $(this).parent().find(".minus").show();
            $(this).hide();
            $(this).parent().find(".baught").show();
            node2.remove();
            node2.find(".name").css("text-decoration", "none");
            node2.find(".c").css("text-decoration", "none");
            LIST2.find("#statsPan1").append(node2);
        });

        $('#addForm').focus();

        LIST.append(node); //Add to the end of the list

        node2.find(".name").text(title);
        node2.find(".c").text(number);
        LIST2.find("#statsPan1").append(node2);
    });


    //actions with the existing goods from the list

    $('.cross').click(function () {

        var n = $(this).parent().find(".goodName").val();

        $(LIST2).each(function () {
            item = $(this).find(".statsItem");
            if(item.find(".name"))
            console.log(item+"-");
            if ($(this).find(".name").text() == name)
                $(this).parent().remove();
        });

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

    $('.notBaught').hide();

    $('.baught').click(function () {
        $(this).parent().find(".quantity").css("margin-right", "275px");
        $(this).parent().find(".goodName").css("text-decoration", "line-through");
        $(this).parent().find(".cross").hide();
        $(this).parent().find(".plus").hide();
        $(this).parent().find(".minus").hide();
        $(this).hide();
        $(this).parent().find(".notBaught").show();
    });

    $('.notBaught').click(function () {
        $(this).parent().find(".quantity").css("margin-right", "5px");
        $(this).parent().find(".goodName").css("text-decoration", "none");
        $(this).parent().find(".cross").show();
        $(this).parent().find(".plus").show();
        $(this).parent().find(".minus").show();
        $(this).hide();
        $(this).parent().find(".baught").show();
    });

});
