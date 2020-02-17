'use struct';

{
    const score1 = 80;
    const score2 = 90;
    const score3 = 40;

    配列を使用
    const otherScores = [10, 20];
    const scores = [80, 90, 40, 70, ...otherScores]; //スプレット構文
    console.log(scores);

    const scores = [80, 90, 40, 70];
    const [a, b, c, d] = scores;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    scores.forEach((score, index) => {
        console.log(`Score ${index}: ${scores}`);
    });

    const prices = [180, 190, 200];

    const updatePrices= prices.map((price) =>{
        return price + 20;
    });

    const updatePrices= prices.map(price =>price + 20);
    console.log(updatePrices);

    const numbers = [1, 4, 7, 8, 10];

    const evenNumbers = numbers.filter((number) => {
        if(number % 2 === 0){
            return true;
        }else{
            return false;
        }
    });

    //省略形
    const evenNumbers = numbers.filter((number) => number % 2 === 0);
    console.log(evenNumbers);


    const[a, b, ...others] = scores; //a,bをothersに格納
    console.log(a);
    console.log(b);
    console.log(others);

    //引っくり帰り
    let x = 30;
    let y = 70;
    [x, y] = [y, x];
    console.log(x);
    console.log(y);

    function sum(a, b){
        console.log(a + b);
    }

    sum(...otherScores); //sum(10, 20)

    scores.splice(1,1,40,50); //変更始点、変更箇所、挿入番号
    scores.push(60, 50); //80, 90, 40, 70,60, 50
    scores.shift(); //90, 40, 70,60, 50
    console.log(scores);

    配列の個々の要素にアクセス
    console.log(scores[1]);

    scores[2] = 44;
    console.log(scores);

    // scoresそのものへの代入は可能となる　配列はOK
    console.log(scores.length);

    // 文字列に埋め込んで表示してみる
    console.log(`Score: ${scores[0]}`);
    console.log(`Score: ${scores[1]}`);
    console.log(`Score: ${scores[2]}`);

    // for文を使って書き換える方法
    for(let i = 0; i < scores.length; i++){ //lengthで要素を取得する
        console.log(`Score ${i}: ${scores[i]}`);
    }

    const point = [100, 180];

    const othersProps = {
        r: 4,
        color: 'red',
    };
    const point = {
        x:100, 
        y:180,
        ...othersProps
    };
    console.log(point);

    const {x, r, ...others} = point;
    console.log(x);
    console.log(r);
    console.log(others);

    point.x = 120;
    point['x'] = 120;

    console.log(point.x);
    console.log(point['y']);

    point.z = 90;
    delete point.y;
    console.log(point);

    const point = {
        x:100, 
        y:180,
    };

    const keys = Object.keys(point);
    keys.forEach(key => {
        console.log(`Key: ${key} Value: ${point[key]}`);
    });

    const points = [
        {x: 30, y: 20},
        {x: 10, y: 50},
        {x: 40, y: 40},
    ];
    console.log(points[1].y);

    let x = 1;
    let y = x;
    x = 5;
    console.log(x); //5
    console.log(y); //1

    let x = [1, 2];
    let y = x;
    x[0] = 5;
    console.log(x); //[5,2]
    console.log(y); //[5, 2]

    let x = [1, 2];
    let y = [...x]; //[1,2]が格納される
    x[0] = 5;
    console.log(x); //[5,2]
    console.log(y); //[1, 2]

    const str = 'hello';

    console.log(str.length);

    str.substring(開始位置,終了位置);
    str.substring(2,4); //４の手前
    console.log(str.substring(2, 4));

    console.log(str[1]);
    str[1] = 'a';

    const d = [2019, 11, 14];
    console.log(d.join('/'));
    console.log(d.join(''));
    const t = '17:08:24';
    console.log(t.split(':'));
    const [hour, minute, second] = t.split(':');
    console.log(hour);
    console.log(minute);
    console.log(second);

    const scores = [10, 3, 9];

    let sum = 0;

    scores.forEach(score => {
        sum += score;
    });

    const avg = sum / scores.length;

    console.log(sum);
    console.log(avg);

    console.log(Math.floor(avg)); //7
    console.log(Math.ceil(avg)); //8
    console.log(Math.round(avg)); //7
    console.log(avg.toFixed(3)); //7.333

    console.log(Math.random());

    console.log(Math.floor(Math.random() * 6) + 1);

    const d = new Date(); 
    console.log(d)
    console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);

    const d = new Date(2019,10); //2019/11/01 00:00:00 
    d.setHours(10,20,30); //2019/11/01 10:20:30 
    d.setDate(31); //2019/12/01 10:20:30
    d.setDate(d.getDate() + 3); //2019/12/04 10:20:30
    console.log(d);

    alert('hello');
    const answer = confirm('削除しますか');
    if(answer){
        console.log('削除しました');
    }else{
        console.log('キャンセルしました');
    }

    let i = 0;

    function showTime(){
        console.log(new Date());
        i++;
        if(i > 2){
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(showTime, 1000);

    let i = 0;
    function showTime(){
        console.log(new Date());
        const timeoutId = setTimeout(showTime, 1000);
        i++;
        if(i > 2){
            clearTimeout(timeoutId);
        }
    }

    showTime();

    const name = 'taguchi';

    //例外処理
    try{
        console.log(name.toUpperCase()); //文字列のみ
    }catch(e){
        console.log(e);
    }

    console.log('Finish');

    class Post{ //親クラス
        constructor(text){
            this.text =  text;
            this.likeCount = 0;
        }
        
        show: function() { //メソット
            console.log(`${this.text} - ${this.likeCount}いいね`);
        }
        show() { //メソット
        console.log(`${this.text} - ${this.likeCount} likes`);
        }

        like(){
            this.likeCount++;
            this.show();
        }

        静的メソッド
        static showInfo(){ //インスタンスから直接呼び出さず、クラス名から直接呼び出し可能となる thisを使えないので注意
            console.log(`Post class version 1.0`);
        }
    }

    class SponsoredPost extends Post{　//子クラス
        constructor(text, sponsor){
            super(text);
            this.sponsor = sponsor;
        }
        
        show: function() { //メソット
            console.log(`${this.text} - ${this.likeCount}いいね`);
        }
        show() { //メソット
        super.show();
        console.log(`... sponsored by ${this.sponsor}`);
        }

        静的メソッド
        static showInfo(){ //インスタンスから直接呼び出さず、クラス名から直接呼び出し可能となる thisを使えないので注意
            console.log(`Post class version 1.0`);
        }
    }

    const posts = [
        new Post('Javascriptの勉強'),
        new Post('kumasan'),
        new SponsoredPost('荷点台'),
    ];

    posts[0].like();

    show(posts[0]);
    posts[0].show();
    posts[1].show();

    Post.showInfo();

    posts[2].show();
    posts[2].like();
}