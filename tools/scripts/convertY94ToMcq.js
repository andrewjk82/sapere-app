import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const dump = JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/tools/audit-state/dump-y9-4.json', 'utf8'));
const byId = Object.fromEntries(dump.map(d => [d.id, d]));

const wrap = (s) => `\\(${s}\\)`;

// Each entry: id, options (plain math strings, will be wrapped), answerIndex, steps (array of {explanation, workingOut})
const items = [
  { id: 'y9-4a-1a', options: ['15y', 'y', '-y', '225y'], answerIndex: 1,
    steps: [
      { explanation: "We are given \\(15y = 15 \\times \\dots\\) and need to find the missing factor. Since 15 is already factored out, we find the remaining factor by dividing the original expression by 15.", workingOut: '15y = 15 \\times \\dots' },
      { explanation: "Divide both sides by 15 to isolate the missing factor. Dividing a term by its own numerical coefficient leaves just the variable part.", workingOut: '\\frac{15y}{15} = y' },
      { explanation: "So the missing factor is \\(y\\). We can check this is correct by multiplying \\(15 \\times y\\) back together and confirming it equals the original expression \\(15y\\).", workingOut: '15 \\times y = 15y' },
    ] },
  { id: 'y9-4a-1b', options: ['b', '30b', '-2b', '2b'], answerIndex: 3,
    steps: [
      { explanation: "We are given \\(30b = 15 \\times \\dots\\) and need to find the missing factor. Since 15 has already been factored out, we divide the original expression by 15 to find what remains.", workingOut: '30b = 15 \\times \\dots' },
      { explanation: "Divide both sides by 15. Note the divisor is 15 (the factor already given), not 30 (the original coefficient) — a common mistake is dividing by the wrong number.", workingOut: '\\frac{30b}{15} = 2b' },
      { explanation: "So the missing factor is \\(2b\\). Checking by multiplying \\(15 \\times 2b\\) confirms it equals the original expression \\(30b\\).", workingOut: '15 \\times 2b = 30b' },
    ] },
  { id: 'y9-4a-1c', options: ['4xy', '48y', '-4y', '4y'], answerIndex: 3,
    steps: [
      { explanation: "We are given \\(48xy = 12x \\times \\dots\\) and need to find the missing factor. Since \\(12x\\) has been factored out, we divide the original expression by \\(12x\\), dividing coefficients and cancelling the shared variable \\(x\\).", workingOut: '48xy = 12x \\times \\dots' },
      { explanation: "Divide both sides by \\(12x\\). The coefficients divide as \\(48 \\div 12 = 4\\), and the \\(x\\) in the numerator cancels completely with the \\(x\\) in \\(12x\\), leaving only \\(y\\).", workingOut: '\\frac{48xy}{12x} = 4y' },
      { explanation: "So the missing factor is \\(4y\\). Checking by multiplying \\(12x \\times 4y\\) confirms it equals the original expression \\(48xy\\).", workingOut: '12x \\times 4y = 48xy' },
    ] },
  { id: 'y9-4a-1d', options: ['3pq', '21p', '-3p', '3p'], answerIndex: 3,
    steps: [
      { explanation: "We are given \\(21pq = 7q \\times \\dots\\) and need to find the missing factor. Since \\(7q\\) has been factored out, we divide the original expression by \\(7q\\), dividing coefficients and cancelling the shared variable \\(q\\).", workingOut: '21pq = 7q \\times \\dots' },
      { explanation: "Divide both sides by \\(7q\\). The coefficients divide as \\(21 \\div 7 = 3\\), and the \\(q\\) cancels completely, leaving only \\(p\\).", workingOut: '\\frac{21pq}{7q} = 3p' },
      { explanation: "So the missing factor is \\(3p\\). Checking by multiplying \\(7q \\times 3p\\) confirms it equals the original expression \\(21pq\\).", workingOut: '7q \\times 3p = 21pq' },
    ] },
  { id: 'y9-4a-1e', options: ['z', 'z^2', '-z', 'z^3'], answerIndex: 0,
    steps: [
      { explanation: "We are given \\(z^2 = z \\times \\dots\\) and need to find the missing factor. Since one factor of \\(z\\) has been taken out, we divide the original expression by \\(z\\), which reduces the power by one.", workingOut: 'z^2 = z \\times \\dots' },
      { explanation: "Divide both sides by \\(z\\). Using the index law \\(z^2 \\div z = z^{2-1} = z^1\\), the power reduces from 2 to 1.", workingOut: '\\frac{z^2}{z} = z' },
      { explanation: "So the missing factor is \\(z\\). Checking by multiplying \\(z \\times z\\) confirms it equals the original expression \\(z^2\\).", workingOut: 'z \\times z = z^2' },
    ] },
  { id: 'y9-4a-1f', options: ['2x^2', '2x', '8x', '-2x'], answerIndex: 1,
    steps: [
      { explanation: "We are given \\(8x^2 = 4x \\times \\dots\\) and need to find the missing factor. Since \\(4x\\) has been factored out, we divide the original expression by \\(4x\\), dividing coefficients and reducing the power of \\(x\\) by one.", workingOut: '8x^2 = 4x \\times \\dots' },
      { explanation: "Divide both sides by \\(4x\\). The coefficients divide as \\(8 \\div 4 = 2\\), and by the index law \\(x^2 \\div x = x^1\\), the power of \\(x\\) reduces from 2 to 1.", workingOut: '\\frac{8x^2}{4x} = 2x' },
      { explanation: "So the missing factor is \\(2x\\). Checking by multiplying \\(4x \\times 2x\\) confirms it equals the original expression \\(8x^2\\).", workingOut: '4x \\times 2x = 8x^2' },
    ] },
  { id: 'y9-4a-1g', options: ['4m^2', '-4m', '4m', '36m'], answerIndex: 2,
    steps: [
      { explanation: "We are given \\(36m^2 = 9m \\times \\dots\\) and need to find the missing factor. Since \\(9m\\) has been factored out, we divide the original expression by \\(9m\\), dividing coefficients and reducing the power of \\(m\\) by one.", workingOut: '36m^2 = 9m \\times \\dots' },
      { explanation: "Divide both sides by \\(9m\\). The coefficients divide as \\(36 \\div 9 = 4\\), and by the index law \\(m^2 \\div m = m^1\\), the power reduces from 2 to 1.", workingOut: '\\frac{36m^2}{9m} = 4m' },
      { explanation: "So the missing factor is \\(4m\\). Checking by multiplying \\(9m \\times 4m\\) confirms it equals the original expression \\(36m^2\\).", workingOut: '9m \\times 4m = 36m^2' },
    ] },
  { id: 'y9-4a-1h', options: ['-5n', '5n', '-5n^2', '-10n'], answerIndex: 0,
    steps: [
      { explanation: "We are given \\(-10n^2 = 2n \\times \\dots\\) and need to find the missing factor. Since \\(2n\\) has been factored out, we divide the original expression by \\(2n\\), keeping careful track of the negative sign.", workingOut: '-10n^2 = 2n \\times \\dots' },
      { explanation: "Divide both sides by \\(2n\\). The coefficients divide as \\(-10 \\div 2 = -5\\) (the negative sign stays with the coefficient), and \\(n^2 \\div n = n\\).", workingOut: '\\frac{-10n^2}{2n} = -5n' },
      { explanation: "So the missing factor is \\(-5n\\). Checking by multiplying \\(2n \\times (-5n)\\) confirms it equals the original expression \\(-10n^2\\).", workingOut: '2n \\times (-5n) = -10n^2' },
    ] },
  { id: 'y9-4a-1i', options: ['4p^2', '4p', '4pq', '-4p'], answerIndex: 1,
    steps: [
      { explanation: "We are given \\(12p^2q = 3pq \\times \\dots\\) and need to find the missing factor. Since \\(3pq\\) has been factored out, we divide the original expression by \\(3pq\\), dividing coefficients and cancelling each shared variable.", workingOut: '12p^2q = 3pq \\times \\dots' },
      { explanation: "Divide both sides by \\(3pq\\). The coefficients divide as \\(12 \\div 3 = 4\\), \\(p^2 \\div p = p\\), and \\(q\\) cancels completely since it appears to the same power in both.", workingOut: '\\frac{12p^2q}{3pq} = 4p' },
      { explanation: "So the missing factor is \\(4p\\). Checking by multiplying \\(3pq \\times 4p\\) confirms it equals the original expression \\(12p^2q\\).", workingOut: '3pq \\times 4p = 12p^2q' },
    ] },
  { id: 'y9-4a-1j', options: ['2a^2b', '6ab', '-2ab', '2ab'], answerIndex: 3,
    steps: [
      { explanation: "We are given \\(6a^2b = 3a \\times \\dots\\) and need to find the missing factor. Since \\(3a\\) has been factored out, we divide the original expression by \\(3a\\), dividing coefficients and reducing the power of \\(a\\) by one.", workingOut: '6a^2b = 3a \\times \\dots' },
      { explanation: "Divide both sides by \\(3a\\). The coefficients divide as \\(6 \\div 3 = 2\\), \\(a^2 \\div a = a\\), and \\(b\\) is unaffected since it was not part of the given factor.", workingOut: '\\frac{6a^2b}{3a} = 2ab' },
      { explanation: "So the missing factor is \\(2ab\\). Checking by multiplying \\(3a \\times 2ab\\) confirms it equals the original expression \\(6a^2b\\).", workingOut: '3a \\times 2ab = 6a^2b' },
    ] },
  { id: 'y9-4a-1k', options: ['3u', '3uv', '3u^2', '-3u'], answerIndex: 0,
    steps: [
      { explanation: "We are given \\(15u^2v = 5uv \\times \\dots\\) and need to find the missing factor. Since \\(5uv\\) has been factored out, we divide the original expression by \\(5uv\\), dividing coefficients and cancelling each shared variable.", workingOut: '15u^2v = 5uv \\times \\dots' },
      { explanation: "Divide both sides by \\(5uv\\). The coefficients divide as \\(15 \\div 5 = 3\\), \\(u^2 \\div u = u\\), and \\(v\\) cancels completely since it appears to the same power in both.", workingOut: '\\frac{15u^2v}{5uv} = 3u' },
      { explanation: "So the missing factor is \\(3u\\). Checking by multiplying \\(5uv \\times 3u\\) confirms it equals the original expression \\(15u^2v\\).", workingOut: '5uv \\times 3u = 15u^2v' },
    ] },
  { id: 'y9-4a-1l', options: ['5x^2y', '40xy', '5xy', '-5xy'], answerIndex: 2,
    steps: [
      { explanation: "We are given \\(40x^2y^2 = 8xy \\times \\dots\\) and need to find the missing factor. Since \\(8xy\\) has been factored out, we divide the original expression by \\(8xy\\), dividing coefficients and reducing the power of each variable by one.", workingOut: '40x^2y^2 = 8xy \\times \\dots' },
      { explanation: "Divide both sides by \\(8xy\\). The coefficients divide as \\(40 \\div 8 = 5\\), and by the index law \\(x^2 \\div x = x\\) and \\(y^2 \\div y = y\\).", workingOut: '\\frac{40x^2y^2}{8xy} = 5xy' },
      { explanation: "So the missing factor is \\(5xy\\). Checking by multiplying \\(8xy \\times 5xy\\) confirms it equals the original expression \\(40x^2y^2\\).", workingOut: '8xy \\times 5xy = 40x^2y^2' },
    ] },
  { id: 'y9-4a-2a', options: ['3xy', '3y', '15y', '-3y'], answerIndex: 1,
    steps: [
      { explanation: "We are given \\(15xy = 5x \\times \\dots\\) and need to find the missing factor. Since \\(5x\\) has been factored out, we divide the original expression by \\(5x\\), dividing coefficients and cancelling the shared variable \\(x\\).", workingOut: '15xy = 5x \\times \\dots' },
      { explanation: "Divide both sides by \\(5x\\). The coefficients divide as \\(15 \\div 5 = 3\\), and the \\(x\\) cancels completely, leaving only \\(y\\).", workingOut: '\\frac{15xy}{5x} = 3y' },
      { explanation: "So the missing factor is \\(3y\\). Checking by multiplying \\(5x \\times 3y\\) confirms it equals the original expression \\(15xy\\).", workingOut: '5x \\times 3y = 15xy' },
    ] },
  { id: 'y9-4a-2b', options: ['15xy', 'x', '225xy', 'xy'], answerIndex: 3,
    steps: [
      { explanation: "We are given \\(15xy = 15 \\times \\dots\\) and need to find the missing factor. Since the numerical coefficient 15 has already been factored out, we divide the original expression by 15 to find the remaining variable part.", workingOut: '15xy = 15 \\times \\dots' },
      { explanation: "Divide both sides by 15. Dividing the term by its own numerical coefficient leaves both variables \\(x\\) and \\(y\\) untouched.", workingOut: '\\frac{15xy}{15} = xy' },
      { explanation: "So the missing factor is \\(xy\\). Checking by multiplying \\(15 \\times xy\\) confirms it equals the original expression \\(15xy\\).", workingOut: '15 \\times xy = 15xy' },
    ] },
  { id: 'y9-4a-2c', options: ['5x', '5xy', '15x', '-5x'], answerIndex: 0,
    steps: [
      { explanation: "We are given \\(15xy = 3y \\times \\dots\\) and need to find the missing factor. Since \\(3y\\) has been factored out, we divide the original expression by \\(3y\\), dividing coefficients and cancelling the shared variable \\(y\\).", workingOut: '15xy = 3y \\times \\dots' },
      { explanation: "Divide both sides by \\(3y\\). The coefficients divide as \\(15 \\div 3 = 5\\), and the \\(y\\) cancels completely, leaving only \\(x\\).", workingOut: '\\frac{15xy}{3y} = 5x' },
      { explanation: "So the missing factor is \\(5x\\). Checking by multiplying \\(3y \\times 5x\\) confirms it equals the original expression \\(15xy\\).", workingOut: '3y \\times 5x = 15xy' },
    ] },
  { id: 'y9-4a-2d', options: ['3xy', '5', '3', '-3'], answerIndex: 2,
    steps: [
      { explanation: "We are given \\(15xy = 5xy \\times \\dots\\) and need to find the missing factor. Since \\(5xy\\) has already been factored out — matching both variables in the original expression — we divide the original expression by \\(5xy\\).", workingOut: '15xy = 5xy \\times \\dots' },
      { explanation: "Divide both sides by \\(5xy\\). Both the \\(x\\) and \\(y\\) cancel completely since they match exactly, leaving only the coefficient division \\(15 \\div 5 = 3\\).", workingOut: '\\frac{15xy}{5xy} = 3' },
      { explanation: "So the missing factor is \\(3\\), a constant with no variables left. Checking by multiplying \\(5xy \\times 3\\) confirms it equals the original expression \\(15xy\\).", workingOut: '5xy \\times 3 = 15xy' },
    ] },
  { id: 'y9-4a-2e', options: ['2b + 24', '2b + 3', '2b - 3', '4b + 6'], answerIndex: 1,
    steps: [
      { explanation: "We are given \\(16b + 24 = 8 \\times \\dots\\) and need to find the missing factor. Since 8 is the highest common factor of 16 and 24, we divide every term of the expression by 8.", workingOut: '16b + 24 = 8 \\times \\dots' },
      { explanation: "Divide both terms of the expression by 8 separately — this is essential, as forgetting to divide one of the two terms is a common mistake.", workingOut: '\\frac{16b}{8} + \\frac{24}{8} = 2b + 3' },
      { explanation: "So the missing factor is \\(2b + 3\\). Checking by expanding \\(8(2b + 3)\\) back out confirms it equals the original expression \\(16b + 24\\).", workingOut: '8(2b + 3) = 16b + 24' },
    ] },
  { id: 'y9-4a-2f', options: ['4q - 15', '4q + 3', '20q - 3', '4q - 3'], answerIndex: 3,
    steps: [
      { explanation: "We are given \\(20q - 15 = 5 \\times \\dots\\) and need to find the missing factor. Since 5 is the highest common factor of 20 and 15, we divide every term of the expression by 5.", workingOut: '20q - 15 = 5 \\times \\dots' },
      { explanation: "Divide both terms of the expression by 5 separately, keeping the subtraction sign in place — dividing only one term or losing the sign are common mistakes.", workingOut: '\\frac{20q}{5} - \\frac{15}{5} = 4q - 3' },
      { explanation: "So the missing factor is \\(4q - 3\\). Checking by expanding \\(5(4q - 3)\\) back out confirms it equals the original expression \\(20q - 15\\).", workingOut: '5(4q - 3) = 20q - 15' },
    ] },
  { id: 'y9-4a-2g', options: ['4ab - 3b', '4ab - 18b', '4ab + 3b', '24ab - 3b'], answerIndex: 0,
    steps: [
      { explanation: "We are given \\(24ab - 18b = 6 \\times \\dots\\) and need to find the missing factor. Since 6 is the highest common factor of 24 and 18, we divide every term of the expression by 6.", workingOut: '24ab - 18b = 6 \\times \\dots' },
      { explanation: "Divide both terms of the expression by 6 separately, keeping the subtraction sign in place.", workingOut: '\\frac{24ab}{6} - \\frac{18b}{6} = 4ab - 3b' },
      { explanation: "So the missing factor is \\(4ab - 3b\\). Checking by expanding \\(6(4ab - 3b)\\) back out confirms it equals the original expression \\(24ab - 18b\\).", workingOut: '6(4ab - 3b) = 24ab - 18b' },
    ] },
  { id: 'y9-4a-2h', options: ['4ab - 3', '4a + 3', '4a - 3', '4a - 18'], answerIndex: 2,
    steps: [
      { explanation: "We are given \\(24ab - 18b = 6b \\times \\dots\\) and need to find the missing factor. Since \\(6b\\) is the highest common factor of \\(24ab\\) and \\(18b\\), we divide every term of the expression by \\(6b\\).", workingOut: '24ab - 18b = 6b \\times \\dots' },
      { explanation: "Divide both terms of the expression by \\(6b\\) separately. In the first term the \\(b\\) cancels completely (leaving \\(4a\\)), and in the second term \\(18b \\div 6b = 3\\).", workingOut: '\\frac{24ab}{6b} - \\frac{18b}{6b} = 4a - 3' },
      { explanation: "So the missing factor is \\(4a - 3\\). Checking by expanding \\(6b(4a - 3)\\) back out confirms it equals the original expression \\(24ab - 18b\\).", workingOut: '6b(4a - 3) = 24ab - 18b' },
    ] },
  { id: 'y9-4a-2i', options: ['x + 5', 'x', '-x', 'x^2'], answerIndex: 1,
    steps: [
      { explanation: "We are given \\(x^2 + 5x = (x + 5) \\times \\dots\\) and need to find the missing factor. Notice that \\(x\\) is a common factor of both terms, so \\(x^2 + 5x = x(x + 5)\\).", workingOut: 'x^2 + 5x = x(x + 5)' },
      { explanation: "Comparing \\(x(x + 5)\\) with the given form \\((x + 5) \\times \\dots\\), the missing factor must be the other factor, \\(x\\), since the \\((x+5)\\) part is already accounted for.", workingOut: '(x + 5) \\times \\dots = x(x + 5) \\implies \\dots = x' },
      { explanation: "So the missing factor is \\(x\\). Checking by expanding \\((x + 5) \\times x\\) back out confirms it equals the original expression \\(x^2 + 5x\\).", workingOut: '(x + 5) \\times x = x^2 + 5x' },
    ] },
  { id: 'y9-4a-2j', options: ['y + 12', 'y^2 - 12', '-y + 12', 'y - 12'], answerIndex: 3,
    steps: [
      { explanation: "We are given \\(y^2 - 12y = y \\times \\dots\\) and need to find the missing factor. Since \\(y\\) has been factored out, we divide the original expression by \\(y\\), term by term.", workingOut: 'y^2 - 12y = y \\times \\dots' },
      { explanation: "Divide both terms of the expression by \\(y\\) separately. By the index law \\(y^2 \\div y = y\\), and \\(12y \\div y = 12\\), keeping the subtraction sign.", workingOut: '\\frac{y^2}{y} - \\frac{12y}{y} = y - 12' },
      { explanation: "So the missing factor is \\(y - 12\\). Checking by expanding \\(y(y - 12)\\) back out confirms it equals the original expression \\(y^2 - 12y\\).", workingOut: 'y(y - 12) = y^2 - 12y' },
    ] },
  { id: 'y9-4a-2k', options: ['2vw - 6v', '2vw + 6v', '2vw - 6vw', '2vw^2 - 6v'], answerIndex: 0,
    steps: [
      { explanation: "We are given \\(8vw^2 - 24vw = 4w \\times \\dots\\) and need to find the missing factor. Since \\(4w\\) has been factored out, we divide the original expression by \\(4w\\), term by term.", workingOut: '8vw^2 - 24vw = 4w \\times \\dots' },
      { explanation: "Divide both terms by \\(4w\\) separately. In the first term, \\(8vw^2 \\div 4w = 2vw\\) (coefficients \\(8 \\div 4 = 2\\), and \\(w^2 \\div w = w\\)); in the second term, \\(24vw \\div 4w = 6v\\), keeping the subtraction sign.", workingOut: '\\frac{8vw^2}{4w} - \\frac{24vw}{4w} = 2vw - 6v' },
      { explanation: "So the missing factor is \\(2vw - 6v\\). Checking by expanding \\(4w(2vw - 6v)\\) back out confirms it equals the original expression \\(8vw^2 - 24vw\\).", workingOut: '4w(2vw - 6v) = 8vw^2 - 24vw' },
    ] },
  { id: 'y9-4a-2l', options: ['8w + 24', '8w - 24v', '8w - 24', '8w^2 - 24'], answerIndex: 2,
    steps: [
      { explanation: "We are given \\(8vw^2 - 24vw = vw \\times \\dots\\) and need to find the missing factor. Since \\(vw\\) has been factored out, we divide the original expression by \\(vw\\), term by term.", workingOut: '8vw^2 - 24vw = vw \\times \\dots' },
      { explanation: "Divide both terms by \\(vw\\) separately. In the first term, \\(v\\) cancels completely and \\(w^2 \\div w = w\\), leaving \\(8w\\); in the second term, \\(v\\) and \\(w\\) both cancel completely, leaving \\(24\\), keeping the subtraction sign.", workingOut: '\\frac{8vw^2}{vw} - \\frac{24vw}{vw} = 8w - 24' },
      { explanation: "So the missing factor is \\(8w - 24\\). Checking by expanding \\(vw(8w - 24)\\) back out confirms it equals the original expression \\(8vw^2 - 24vw\\).", workingOut: 'vw(8w - 24) = 8vw^2 - 24vw' },
    ] },
  { id: 'y9-4a-2m', options: ['2w - 6', '-2w + 6', '2w + 6', '-2w - 6'], answerIndex: 1,
    steps: [
      { explanation: "We are given \\(8vw^2 - 24vw = -4vw \\times \\dots\\) and need to find the missing factor. Since \\(-4vw\\) has been factored out (a negative divisor), we divide the original expression by \\(-4vw\\), watching the signs carefully.", workingOut: '8vw^2 - 24vw = -4vw \\times \\dots' },
      { explanation: "Divide both terms by \\(-4vw\\) separately. Dividing a positive term by a negative divisor flips its sign: \\(8vw^2 \\div (-4vw) = -2w\\); dividing a negative term by a negative divisor gives a positive result: \\(-24vw \\div (-4vw) = 6\\).", workingOut: '\\frac{8vw^2}{-4vw} - \\frac{24vw}{-4vw} = -2w + 6' },
      { explanation: "So the missing factor is \\(-2w + 6\\). Checking by expanding \\(-4vw(-2w + 6)\\) back out confirms it equals the original expression \\(8vw^2 - 24vw\\).", workingOut: '-4vw(-2w + 6) = 8vw^2 - 24vw' },
    ] },
  { id: 'y9-4a-2n', options: ['w + 3', 'vw - 3', '-w + 3', 'w - 3'], answerIndex: 3,
    steps: [
      { explanation: "We are given \\(8vw^2 - 24vw = 8vw \\times \\dots\\) and need to find the missing factor. Since \\(8vw\\) has been factored out, we divide the original expression by \\(8vw\\), term by term.", workingOut: '8vw^2 - 24vw = 8vw \\times \\dots' },
      { explanation: "Divide both terms by \\(8vw\\) separately. In the first term, the coefficients cancel (\\(8 \\div 8 = 1\\)), \\(v\\) cancels completely, and \\(w^2 \\div w = w\\), leaving \\(w\\); in the second term, everything cancels except \\(24 \\div 8 = 3\\), keeping the subtraction sign.", workingOut: '\\frac{8vw^2}{8vw} - \\frac{24vw}{8vw} = w - 3' },
      { explanation: "So the missing factor is \\(w - 3\\). Checking by expanding \\(8vw(w - 3)\\) back out confirms it equals the original expression \\(8vw^2 - 24vw\\).", workingOut: '8vw(w - 3) = 8vw^2 - 24vw' },
    ] },
];

// Sanity checks before writing anything
const seenIds = new Set();
for (const it of items) {
  if (seenIds.has(it.id)) throw new Error(`Duplicate id ${it.id}`);
  seenIds.add(it.id);
  if (it.options.length !== 4) throw new Error(`${it.id}: options length != 4`);
  const uniq = new Set(it.options);
  if (uniq.size !== 4) throw new Error(`${it.id}: duplicate option values`);
  if (it.answerIndex < 0 || it.answerIndex > 3) throw new Error(`${it.id}: bad answerIndex`);
  for (const o of it.options) {
    if (o.includes('$')) throw new Error(`${it.id}: option contains $: ${o}`);
    if (o.includes('\\(') || o.includes('\\)')) throw new Error(`${it.id}: option pre-wrapped: ${o}`);
  }
  if (it.steps.length < 3) throw new Error(`${it.id}: fewer than 3 steps`);
  for (const s of it.steps) {
    if (s.workingOut.includes('$')) throw new Error(`${it.id}: workingOut contains $`);
    if (/[가-힣]/.test(s.explanation)) throw new Error(`${it.id}: Korean detected in explanation`);
  }
  if (!byId[it.id]) throw new Error(`${it.id}: not found in dump`);
}
if (items.length !== 26) throw new Error(`Expected 26 items, got ${items.length}`);
console.log('Pre-flight checks passed for all 26 items.');

const logPath = '/Users/andrewkim/Desktop/sapere1/tools/audit-state/fix-y9-4-log.json';
let log = [];
if (existsSync(logPath)) {
  log = JSON.parse(readFileSync(logPath, 'utf8'));
}

(async () => {
  try {
    let written = 0;
    for (const it of items) {
      const orig = byId[it.id];
      const newOptions = it.options.map(wrap);
      const newSolutionStepsFinal = it.steps.map(s => ({ explanation: s.explanation, workingOut: `\\(${s.workingOut}\\)`, graphData: null }));

      // self-check: options[answer] should equal derived correct value (the un-wrapped option at answerIndex)
      const correctPlain = it.options[it.answerIndex];
      console.log(`${it.id}: correct = ${correctPlain} @ index ${it.answerIndex}`);

      const updatePayload = {
        type: 'multiple_choice',
        options: newOptions,
        answer: it.answerIndex,
        solutionSteps: newSolutionStepsFinal,
        isNew: true,
      };

      await db.collection('questions').doc(it.id).update(updatePayload);
      written++;

      log.push({
        id: it.id,
        chapterId: 'y9-4',
        topicId: 'y9-4a',
        changedFields: {
          type: { old: orig.type, new: 'multiple_choice' },
          options: { old: orig.options, new: newOptions },
          answer: { old: orig.answer, new: it.answerIndex },
          solutionSteps: { old: orig.solutionSteps, new: newSolutionStepsFinal },
          isNew: { old: Object.prototype.hasOwnProperty.call(orig, 'isNew') ? orig.isNew : undefined, new: true },
        },
      });
      console.log(`Wrote ${it.id}`);
    }

    writeFileSync(logPath, JSON.stringify(log, null, 2));
    console.log(`\nDone. Wrote ${written} docs. Log now has ${log.length} entries at ${logPath}`);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    // Still persist whatever log entries were accumulated before the error
    writeFileSync(logPath, JSON.stringify(log, null, 2));
    process.exit(1);
  }
})();
