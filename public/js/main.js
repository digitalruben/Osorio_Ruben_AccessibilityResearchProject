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
                    lyrics:"The snow glows white - On the mountain tonight - Not a footprint to be seen - A kingdom of isolation - And it looks like I’m the Queen - The wind is howling - Like this swirling storm inside - Couldn’t keep it in - Heaven knows I tried… - Don’t let them in -Don’t let them see - Be the good girl you always have to be - Conceal - Don’t feel - Don’t let them know… - Well, now they know! - Let it go, let it go  - Can’t hold it back anymore - Let it go, let it go - Turn away and slam the door! - I don’t care what they’re going to say - Let the storm rage on - The cold never bothered me anyway - It’s funny how some distance - Makes everything seem small - And the fears that once controlled me - Can’t get to me at all! - It’s time to see - What I can do - To test the limits and break through - No right, no wrong - No rules for me - I’m free! - Let it go! Let it go! - I am one with the wind and sky! - Let it go! Let it go! - You’ll never see me cry! - Here I stand and here I’ll stay - Let the storm rage on… - My power flurries through the air into the ground - My soul is spiraling in frozen fractals all around - And one thought crystallizes like an icy blast - I’m never going back - The past is in the past! - Let it go! Let it go! - And I’ll rise like the break of dawn! - Let it go! Let it go! - That perfect girl is gone! - Here I stand in the light of day… - Let the storm rage on!!! - The cold never bothered me anyway."
                },
                {
                    name: "Frozen - Instrumental",
                    src: "frozen2.mp3",
                    image: "frozen2.jpg",
                    lyrics:"The snow glows white - On the mountain tonight - Not a footprint to be seen - A kingdom of isolation - And it looks like I’m the Queen - The wind is howling - Like this swirling storm inside - Couldn’t keep it in - Heaven knows I tried… - Don’t let them in -Don’t let them see - Be the good girl you always have to be - Conceal - Don’t feel - Don’t let them know… - Well, now they know! - Let it go, let it go  - Can’t hold it back anymore - Let it go, let it go - Turn away and slam the door! - I don’t care what they’re going to say - Let the storm rage on - The cold never bothered me anyway - It’s funny how some distance - Makes everything seem small - And the fears that once controlled me - Can’t get to me at all! - It’s time to see - What I can do - To test the limits and break through - No right, no wrong - No rules for me - I’m free! - Let it go! Let it go! - I am one with the wind and sky! - Let it go! Let it go! - You’ll never see me cry! - Here I stand and here I’ll stay - Let the storm rage on… - My power flurries through the air into the ground - My soul is spiraling in frozen fractals all around - And one thought crystallizes like an icy blast - I’m never going back - The past is in the past! - Let it go! Let it go! - And I’ll rise like the break of dawn! - Let it go! Let it go! - That perfect girl is gone! - Here I stand in the light of day… - Let the storm rage on!!! - The cold never bothered me anyway."
                },
            ],
            videos:[
                {
                    name: "Frozen (Captions)",
                    source: "frozen1.mp4",
                    captions:"frozen.vtt",
                    caps: "AUDIO TRANSCRIPT -- From the creators of tangled and wreckit-ralph Disney a carrot nosed. Snowman shuffles up to a purple flower peeping out of deep snow he takes a deep sniff his nose lands on a frozen pond a reindeer looks up and pants like a dog seeing the reindeer slip on the ice. The snowman smiles and moves towards him though actually he's running on the spot. The rainbow falls on his hin. The Snowman uses his arm as a crutch the reindeer paddles his front legs head over heels first snowman crawls along the ice. The reindeer does the breaststroke. The snowman rolls his body but flips onto his back. The brain deist tongue sticks to the ice. The snowman house his head twig arm and reindeer lips tug of the carrot the carrot flies off and lands in soft snow the reindeer goes after it with snowman at his body parts hanging on his tail. The Snowman puts himself back together again and glumly contemplates his noseless state. The reindeer jams the carrot back in place and pantsed at the brow of happy the Snowman patting with a stick then arm then goes to sneeze he grabs his nose with both hands his head. Shoots on frozen coming this winter in 3d."

                },
                {
                    name: "Frozen (Narrated)",
                    source: "frozen2.mp4",
                    captions:"frozen.vtt",
                    caps: "AUDIO TRANSCRIPT -- From the creators of tangled and wreckit-ralph Disney a carrot nosed. Snowman shuffles up to a purple flower peeping out of deep snow he takes a deep sniff his nose lands on a frozen pond a reindeer looks up and pants like a dog seeing the reindeer slip on the ice. The snowman smiles and moves towards him though actually he's running on the spot. The rainbow falls on his hin. The Snowman uses his arm as a crutch the reindeer paddles his front legs head over heels first snowman crawls along the ice. The reindeer does the breaststroke. The snowman rolls his body but flips onto his back. The brain deist tongue sticks to the ice. The snowman house his head twig arm and reindeer lips tug of the carrot the carrot flies off and lands in soft snow the reindeer goes after it with snowman at his body parts hanging on his tail. The Snowman puts himself back together again and glumly contemplates his noseless state. The reindeer jams the carrot back in place and pantsed at the brow of happy the Snowman patting with a stick then arm then goes to sneeze he grabs his nose with both hands his head. Shoots on frozen coming this winter in 3d."
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