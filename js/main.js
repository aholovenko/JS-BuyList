/**
 * Created by 1 on 20.01.2016.
 */
//You	should	wrap	all	your	jQuery	code
$(function () {
//This	function	will	be	called
//	after	the	DOM	was	loaded	and	ready
//Here	we	can	place	all	jQuery	Code
    $('input').click(function () {
        $(this).css("font-size", "30px");
    });
});