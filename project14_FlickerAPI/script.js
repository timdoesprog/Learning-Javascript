$(document).ready(function() {

    // sends of a get request to the Flicker API with a tag name
    function makeRequest(queryWord) {
        let flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        let flickerOptions = {
            tags: queryWord,
            format: "json"
        };
        let displayPhotos = function(data) {
            let list = $("#photos");
            list.empty();
            $.each(data.items, function(index, photo) {
                let li = document.createElement("li");
                li.className = "image";
                let link = document.createElement("a");
                link.href = photo.link;
                let image = document.createElement("img");
                image.src = photo.media.m;
                link.appendChild(image);
                li.appendChild(link);
                list.append(li);
            });
            $("#gallery").append(list);
        };
        $.getJSON(flickerAPI, flickerOptions, displayPhotos)
    }

    $("button").click(function() {
        let queryWord = $(this).text().toLowerCase();
        makeRequest(queryWord);
    });

    $("form").submit(function(e) {
        e.preventDefault();
        let queryWord = $("#queryWord").val();
        makeRequest(queryWord);
    });
});
