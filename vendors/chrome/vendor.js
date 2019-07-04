const fs = require('fs')
const puppeteer = require('puppeteer');


const method = process.argv[2]

if (method !== "v8breakiterator") {
    console.log("Please use `v8breakiterator` for this vendor.")
    return;
}

const filePath = `/data/${process.argv[3]}`

const main = async (filename) => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    var content;
    try {
        content = fs.readFileSync(filename, "utf8")
            .toString().trim()
    } catch (err) {
        console.log(err)
        process.exit()
    }

    const outFile = filename
        .replace(".txt", "-tokenised-by-chrome-v8BreakIterator.txt")

    console.log(`Output: ${outFile}`)

    if (fs.existsSync(outFile)) {
        fs.unlinkSync(outFile)
    }

    page.on('console', msg => {
        const out = msg.text() + "\n"
        fs.appendFileSync(outFile, out)
    });

    await page.evaluate(({text, stream}) => {

        const iterator = new window.Intl.v8BreakIterator(["th"]);

        const cut = (text) => {
            iterator.adoptText(text);
            const result = [];
            let pos = iterator.first();
            while (pos !== -1) {
              let nextPos = iterator.next();
              if (nextPos === -1) break;
              result.push(text.slice(pos, nextPos));
              pos = nextPos;
            }
            return result
        }

        text.split("\n").map(l => {
            const tokens = cut(l)

            console.log(tokens.join("|"))

            return tokens
        })

    }, {text: content});

    await browser.close();

}

(async () => {
    const proc = await main(filePath);
})()