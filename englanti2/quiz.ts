interface QData {
    q: string;
    opts: string[];
    ans: string;
}

const quiz: QData[] = [
    { q: "What is the capital of France?", opts: ["Berlin", "Madrid", "Paris", "Lisbon"], ans: "Paris" },
    { q: "Which language is used for web development?", opts: ["Python", "HTML", "Java", "C++"], ans: "HTML" },
    { q: "Who wrote 'Hamlet'?", opts: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], 
        ans: "William Shakespeare" }
];

let idx = 0, scr = 0, time = 30, timer: number;
const timeEl = document.getElementById('t');
const qEl = document.querySelector('.q');
const optsEl = document.querySelector('.opts');
const resEl = document.querySelector('.rs');
const scrEl = document.getElementById('sc');
const restartEl = document.querySelector('.rst-btn');

function loadQ(): void {
    if (idx >= quiz.length) return endQ();
    const qData = quiz[idx];
    if (qEl) qEl.textContent = qData.q;
    if (optsEl) optsEl.innerHTML = '';
    qData.opts.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.classList.add('opt');
        btn.textContent = `${i + 1}. ${opt}`;
        btn.onclick = () => checkA(opt);
        optsEl?.appendChild(btn);
    });
}

function checkA(opt: string): void {
    if (opt === quiz[idx].ans) scr++;
    idx++;
    loadQ();
}

function startT(): void {
    if (timeEl) {
        timer = window.setInterval(() => {
            time--;
            timeEl.textContent = time.toString();
            if (time <= 0) endQ();
        }, 1000);
    }
}

function endQ(): void {
    clearInterval(timer);
    qEl?.style.setProperty('display', 'none');
    optsEl?.style.setProperty('display', 'none');
    resEl?.style.setProperty('display', 'block');
    if (scrEl) scrEl.textContent = scr.toString();
    restartEl?.style.setProperty('display', 'block');
}

restartEl?.addEventListener('click', () => {
    idx = 0; scr = 0; time = 30;
    if (timeEl) timeEl.textContent = time.toString();
    qEl?.style.setProperty('display', 'block');
    optsEl?.style.setProperty('display', 'block');
    resEl?.style.setProperty('display', 'none');
    restartEl?.style.setProperty('display', 'none');
    loadQ();
    startT();
});
loadQ();
startT();