function scrollDown(callback) {
    let scroll = document.body.scrollHeight;
    let lastScroll = scroll;

    window.scrollTo(0,document.body.scrollHeight);

    requestAnimationFrame(function() {
        scroll = document.body.scrollHeight;
        if(scroll != lastScroll)
            scrollDown(callback);
        else
            callback();
    });
}

scrollDown(function() {
    var audios = document.querySelectorAll(".audio_row");
    console.log(`Total songs: ${audios.length}`);

    function del(audio_obj) {
        console.log(`delete ${audio_obj.title}`);
        ajax.post("al_audio.php", {
            act: "delete_audio",
            oid: audio_obj.ownerId,
            aid: audio_obj.id,
            hash: audio_obj.deleteHash,
            restore: 1
        });
    }

    audios.forEach(function(el) {
        let audio_obj = AudioUtils.asObject(AudioUtils.getAudioFromEl(el));
        del(audio_obj);
    });
});
