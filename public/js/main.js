(() => {

    const vm = new Vue({
        data:{
            isVideo: true,
            isPlaying: false,
            current: {},
            showlyrics: true,
            showcaps: true,
            audioPlayer: new Audio(),
            index: 0,
            music:[
                {
                    name: "Frozen - Sountrack",
                    src: "frozen1.mp3",
                    image: "frozen1.jpg",
                    lyrics:"Lorem ipsum pod bubble vote remote learning Drizly. Wash hands ventilator dumpster fire what day is it? Lysol spray. Toilet paper wash hands it's about March 213th into quarantine asymptomatic. Spread WHO remote learning. We can't hear you. furlough the before times sanitizer it's about March 213th TikTok my camera is off."
                },
                {
                    name: "Frozen - Instrumental",
                    src: "frozen2.mp3",
                    image: "frozen2.jpg",
                    lyrics:"Sweatpants my camera is off kraken Queen's Gambit Drizly. Maskne X Æ A-Xii four seasons total landscaping. Toilet paper hurricane Greek alphabet four seasons total landscaping staycation home press conference. Stay-at-home order Drizly bubble vaccine remote learning antibodies Dr. Fauci. Whipped coffee lockdown mask quarantini wash hands. Queen's Gambit second wave my camera is off Clorox wipes protests. Quarantine take out order second wave."
                },
            ],
            videos:[
                {
                    name: "Frozen (Captions)",
                    source: "frozen1.mp4",
                    captions:"frozen.vtt",
                    caps: "You're on mute. trying times election. Take out order virtual happy hour maskne Among Us. Walktail home haircut uncertain times social distancing sourdough bread into quarantine. Second wave take out order remote learning. X Æ A-Xii doomscrolling dumpster fire lockdown K-shaped recovery stimulus."

                },
                {
                    name: "Frozen (Narrated)",
                    source: "frozen2.mp4",
                    captions:"frozen.vtt",
                    caps: "Lorem ipsum quarantini home monolith schadenfreude wear a mask K-shaped recovery quarantine. It's about March 213th Coronavirus virtual. Zoombomb hydroxychloroquine what day is it? spread stimulus home Clorox wipes Coronavirus. Election TikTok postponed it's about March 213th hindsight sourdough bread Queen's Gambit virtual happy hour. Hydroxychloroquine Zoom call pod droplet quarantine. Hurricane Greek alphabet socialffgfghfg distance Among Us toilet paper doomscroll. Election Drizly into quarantine K-shaped recovery. Joe Exotic sanitizer hindsight asymptomatic schadenfreude home school. You're on mute. Folklore N95 into quarantine virtual whipped coffee. Home Netflix election antibodies K-shaped recovery second wave. Among Us wash hands hydroxychloroquine. Sourdough bread remote isolation Folklore you're on mute. wildfires mail-in vote."
                },
            ]
        },

        created() {
            this.current = this.videos[0];
        },

        methods: {
            playVideo(video){
                this.pauseAudio();
                this.isVideo = true;
                this.current = video;
            },

            showCaps(){
                this.showcaps = this.showcaps ? false : true;
            },

            selectAudio(song,index){
                this.isVideo = false;
                this.current = song;
                this.index = index;

                this.audioPlayer.src = `audio/${song.src}`;
                this.audioPlayer.play();

                this.isPlaying = true;
            },

            prevAudio(){
                this.index--;
                if (this.index < 0) {
                    this.index = this.music.length - 1;
                }
                this.current = this.music[this.index];
                this.playAudio(this.music[this.index]);
                console.log(this.index);
            },

            nextAudio(){
                this.index++;
                if (this.index > this.music.length - 1) {
                    this.index = 0;
                }

                this.current = this.music[this.index];
                this.playAudio(this.current);
            },

            pauseAudio(){
                this.audioPlayer.pause();
                this.isPlaying = false;
            },
            playAudio(song){
                this.audioPlayer.src = `audio/${song.src}`;
                this.audioPlayer.play();

                this.isPlaying = true;
            },

            showLyrics(){
                this.showlyrics = this.showlyrics ? false : true;
            }
        },
    }).$mount("#app");

})();