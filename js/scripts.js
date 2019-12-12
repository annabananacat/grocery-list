// Back-end logic:



// Front-end logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("form").hide();

    var items = [];
      items[0] = $("input#item1").val();
      items[1] = $("input#item2").val();
      items[2] = $("input#item3").val();
      items[3] = $("input#item4").val();
      items[4] = $("input#item5").val();
      items[5] = $("input#item6").val();
      items[6] = $("input#item7").val();
      items[7] = $("input#item8").val();
      items[8] = $("input#item9").val();
      items[9] = $("input#item10").val();

    var capitalItems = items.map(function(capitalItem) {
      return capitalItem.toUpperCase();
    })

    var orderedItems = capitalItems.sort();

    orderedItems.forEach(function(orderedItem) {
      $("#grocerylist ul").append("<li>" + orderedItem + "</li>");
      $("#grocerylist").show();
    });
  });
});
