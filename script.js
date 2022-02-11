d3.selectAll("body").on("change", updatePage);

function updatePage() {
    var dropDownMenu = d3.selectAll("#selectOption").node();
    var dropDownMenuID = dropDownMenu.id;
    var selectedOption = dropDownMenu.text;

    console.log(dropDownMenuID);
    console.log(selectedOption);
}