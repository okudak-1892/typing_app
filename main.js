'use strict';

{
    function setWord(){
        word = words.splice(Math.floor(Math.random() * words.length),1)[0]; 
        target.textContent = word;
        loc = 0;
    }

    const words =[
        'python',
        'ruby',
        'c',
        'javascript',
        'java',
        'rubyonrails',
        'perl',
        'swift',
        'cotlin',
        'php',
        'go',
        'r',
        'react',
        'html',
        'css',
        'sier',
        'programmer',
        'youtuber',
        'star',
        'ses',
        'github',
        'heroku',
        'quiita',
        'cat',
        'twitter',
        'facebook',
        'instagram',
        'google',
        'apple',
        'amazon'
    ];

    let word;
    let loc = 0;
    let beginTime;
    let isPlaying = false;
    const target = document.getElementById('target');

    document.addEventListener('click',() => {
        if (isPlaying === true){
            return;
        }
        isPlaying = true;
        beginTime = Date.now();
        setWord();
    })

    
    document.addEventListener('keydown', e => {
        if (e.key !== word[loc]){
            return;
        }
        //early return
        loc++;

        target.textContent = '_'.repeat(loc)+word.substring(loc);

        if(loc === word.length){
            if(words.length === 0){
                const clearedTime = ((Date.now() - beginTime) / 1000).toFixed(2);
                const result = document.getElementById('result');
                result.textContent = `Cleared!! ${clearedTime} seconds!!`;
                return;
            }
            setWord();
        }
    });
}