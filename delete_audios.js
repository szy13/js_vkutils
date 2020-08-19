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

    function del(audio_id) {
        console.log(`delete ${audio_id.title}`);
        ajax.post("al_audio.php", {
            act: "delete_audio",
            oid: audio_id.ownerId,
            aid: audio_id.id,
            hash: audio_id.deleteHash,
            restore: 1
        });
    }

    audios.forEach(function(el) {
        let audio_id = AudioUtils.asObject(AudioUtils.getAudioFromEl(el));
        del(audio_id);
    });
});
