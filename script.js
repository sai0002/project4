let heading = document.getElementsByTagName('h1')[0];
let image = document.getElementsByTagName('img')[0];

function change(){
    let randomValue = Math.floor(Math.random()*16);
    let imgName = "img/"+randomValue+".jpg";
    image.setAttribute("src",imgName);
    
}
let quotations = [

    {quote : "The greatest fear man can have is the fear of losing GOD's Love."},

    {quote : "Too much food results in dullness of mind."},

    {quote: "fall seven, stand up eightA language is as sweet as the tongues of the speakers." },
    {quote : "Every experience that is drawn through any of the senses has an effect on one's health."},
    {quote : "Love all beings; that is enough."},
    {quote : "Real happiness lies within you."},
    {quote : "Education should build character."},
    {quote : "Service springs out of LOVE and it scatters LOVE in profusion."},

    {quote : "Ignorance is the most important cause of sorrow."},
    {quote : "Have constructive thoughts, consoling words, compassionate acts."},
    {quote : "GOD is neither distant, nor distinct from you."},
    {quote : "The same current activates all."},
    {quote : "Take failure and victory cooly."},
    {quote : "GOD is ONE without a second."},
    {quote : "Too much food results in dullness of mind."},
    {quote : "Unity is divinity; purity is enlightenment"},
    {quote : "God is the life-breath of every soul"},
    {quote : "GOD first; the world next; myself last."},
    {quote : "Teachers must be examples of LOVE and TRUTH."},
    {quote : "LOVE must express itself as SERVICE."},
    {quote : "The wise are those who know the Self."},
    {quote : "God is neither distant nor distinct from you."},
    

];
let colors = ["0", "1", "2", "3", "4", "5","6","7","8","9","A","B","C","D","E","F"];

let quotation = document.getElementById("my");

let author = document.getElementById("my1");

function changeQuote(){

    let randomIndex = Math.floor(Math.random() * quotations.length);

    quotation.innerText = quotations[randomIndex].quote;

    let c=Math.floor(Math.random()*colors.length);
    let col="#";
    for(let i=0;i<6;i++)
    {
        col=col+colors[c];
    }
    document.body.style.backgroundColor = col;
   

}

