const generateQuote = () => {
    const quotes = [
        ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
        ["I don't mean to brag, but I put together a puzzle in 1 day and the box said 2-4 years.", "Anonymous"],
        ["Some people are like clouds.  When they go away, it's a brighter day.", "Frank Zappa"],
        ["I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.", "Mitch Hedberg"],
        ["I’m not superstitious, but I am a little stitious.", "Michael Scott"],
        ["Always forgive your enemies; nothing annoys them so much.", "Oscar Wilde"],
        ["To live is the rarest thing in the world. Most people exist, that is all.", "Oscar Wilde"],
        ["Sometimes when I close my eyes, I can't see.", 'Anonymous'],
        ["An apple a day keeps anyone away, if you throw it hard enough.", "Anonymous"],
        ["Yes officer I saw the speed limit, I just didn't see your car.", "Some guy"],
        ["Our phones fall, we panic. Our friends fall, we laugh.", "Anonymous"],
        ["Your secrets are safe with me... I wasn't even listening.", "Anonymous"],
        ["I put my phone in airplane mode, but it's not flying!.", "Anonymous"]
    ];
    const [text, author] = quotes[Math.floor(Math.random() * quotes.length)];
    return { text, author };
};

export default generateQuote;