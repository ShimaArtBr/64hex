# 64hex — I Ching Oracle

> *"The Tao gives birth to one. One gives birth to two. Two gives birth to three. Three gives birth to ten thousand things."*
> — Tao Te Ching, Chapter 42

A clean, offline-first PWA for consulting the I Ching — 64 hexagrams across three languages, built on classical sources. No account required. No ads. No interpretation imposed. The text speaks; you listen.

**[→ Open 64hex](https://64hex.pages.dev)**

---

## What it does

- Consults the oracle via the **3-coin ritual** (with animated reveal) or a **direct draw**
- Displays the primary hexagram with Judgment, Image, and Line texts
- When moving lines are present, reveals the **resulting hexagram**
- Full trilingual corpus: Classical Chinese · English · Brazilian Portuguese
- Works **offline** after first load (PWA, Service Worker cached)
- Installable on any device — no App Store required

## Text sources

| Layer | Source | Status |
|---|---|---|
| 🈶 Classical Chinese | Zhou Yi / 周易 — public domain via [ctext.org](https://ctext.org) | Complete |
| 🇬🇧 English | James Legge, 1899 — modernized (Pinyin romanization, contemporary register) | Complete |
| 🇧🇷 Portuguese | Contemporary Brazilian Portuguese translation — proprietary | Complete |
| 🇪🇸 Spanish | — | Planned |

## Files

```
index.html     — complete single-file PWA
corpus.json    — 64 hexagrams × 3 languages (346 KB)
sw.js          — service worker, offline-first cache
manifest.json  — PWA installation manifest
```

## Stack

Pure HTML · CSS · Vanilla JS · No framework · No build step · No dependencies

Randomness via `crypto.getRandomValues()` — cryptographically secure, equivalent to physical coins.

---
---

# 64hex — 易經神諭

> *「道生一，一生二，二生三，三生萬物。」*
> — 《道德經》第四十二章

以周易為基礎的離線優先漸進式網頁應用程式（PWA），涵蓋六十四卦，支援三種語言。無需帳號，無廣告，無強加詮釋。文本自言，聆聽即是。

**[→ 開啟 64hex](https://64hex.pages.dev)**

---

## 功能

- **三枚銅錢儀式**（含逐爻動態顯示）或**直接取卦**
- 顯示本卦：卦辭、象傳、爻辭
- 有動爻時，顯示**變卦**
- 完整三語語料庫：古典漢語 · 英語 · 巴西葡萄牙語
- 首次載入後可**離線使用**（PWA，Service Worker 緩存）
- 可安裝至任何設備，無需應用商店

## 文本來源

| 層次 | 來源 | 狀態 |
|---|---|---|
| 🈶 古典漢語 | 周易 — 公共領域，[ctext.org](https://ctext.org) | 完整 |
| 🇬🇧 英語 | 理雅各，1899年，現代化版本 | 完整 |
| 🇧🇷 葡萄牙語 | 當代巴西葡萄牙語譯本，專有版權 | 完整 |
| 🇪🇸 西班牙語 | — | 計劃中 |

## 技術棧

純 HTML · CSS · 原生 JS · 無框架 · 無構建步驟 · 無依賴項

亂數生成採用 `crypto.getRandomValues()` — 密碼學安全等級，等同實體銅錢。

---
---

# 64hex — Oráculo do I Ching

> *"O Tao gera o um. O um gera o dois. O dois gera o três. O três gera as dez mil coisas."*
> — Tao Te Ching, Capítulo 42

Um PWA offline-first para consultar o I Ching — 64 hexagramas em três idiomas, construído sobre fontes clássicas. Sem conta, sem anúncios, sem interpretação imposta. O texto fala; você ouve.

**[→ Abrir 64hex](https://64hex.pages.dev)**

---

## O que faz

- Consulta o oráculo pelo **ritual das 3 moedas** (com revelação animada) ou por **sorteio direto**
- Exibe o hexagrama primário com Julgamento, Imagem e textos das Linhas
- Quando há linhas móveis, revela o **hexagrama resultante**
- Corpus trilíngue completo: Chinês Clássico · Inglês · Português Brasileiro
- Funciona **offline** após o primeiro acesso (PWA, cache do Service Worker)
- Instalável em qualquer dispositivo — sem App Store

## Fontes textuais

| Camada | Fonte | Status |
|---|---|---|
| 🈶 Chinês clássico | Zhou Yi / 周易 — domínio público via [ctext.org](https://ctext.org) | Completo |
| 🇬🇧 Inglês | James Legge, 1899 — modernizado (romanização Pinyin, registro contemporâneo) | Completo |
| 🇧🇷 Português | Tradução contemporânea em português brasileiro — proprietária | Completo |
| 🇪🇸 Espanhol | — | Planejado |

## Arquivos

```
index.html     — PWA completo em arquivo único
corpus.json    — 64 hexagramas × 3 idiomas (346 KB)
sw.js          — service worker, cache offline-first
manifest.json  — manifesto de instalação PWA
```

## Stack

HTML puro · CSS · JS vanilla · Sem framework · Sem build · Sem dependências

Aleatoriedade via `crypto.getRandomValues()` — segurança criptográfica, equivalente às moedas físicas.

---

*64 — the number of hexagrams. The complete map of change.*
