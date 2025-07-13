# Modem Unlock Code Calculator

A simple web tool to calculate the unlock code for Huawei modems (V1 algorithm).

## Usage

1. Open `index.html` in your browser.
2. Enter your 15-digit IMEI.
3. Click **Calculate**.
4. Your unlock code will be shown below.

## How it works

This tool uses the basic Huawei V1 formula: `Unlock Code = IMEI mod 10,000,000`.

## Expand

To add more modem brands or algorithms:
- Add new functions in `script.js`.
- Add UI elements in `index.html`.

---

MIT License.
