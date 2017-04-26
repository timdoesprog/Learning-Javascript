$().ready(function() {
    $.getJSON("employees.json", function(data) {
        let ul = $("#employees");
        $.each(data, function(index, employee) {
            let li = $("<li>").html(employee.name);
            if(employee.inoffice) {
                li.addClass("in");
            } else {
                li.addClass("out");
            }
            ul.append(li);
        }); // end $.each
    }); // end getJSON
}); // end ready
