# Mini-task Algoritma

This is a bare minimum usage of algoritma, according to mini task on **Day 2** (15/042025)

## Algoritma menghitung luas dan keliling lingkaran

1. mulai
2. masukkan jari jari sebagai r
3. jika "r" habis dibagi 7, maka gunakan "phi" sebagai 22/7
4. jika tidak, gunakan "phi" sebagai 3.14
5. hitung luas dengan "phi" dikali r kuadrat
6. hitung keliling dengan 2 dikali "phi" dikali r
7. selesai

## Flowcahrt

```mermaid
flowchart TB

 a@{ shape: circle, label: "Start" }
 b@{ shape: lean-r, label: "jari-jari = r" }
 c@{ shape: diamond, label: "r % 7 == 0" }
 d@{ shape: lean-r, label: "22/7" }
 e@{ shape: lean-r, label: "3.14" }
 f@{ shape: rect, label: " hitung luas
 phi x r x r" }
 g@{ shape: rect, label: "hitung keliling
 2 x phi x r" }
 h@{ shape: lean-r, label: '"hasil luas dan keliling"' }
 i@{ shape: dbl-circ, label: "Selesai" }


 a --> b
 b --> c
 c --TRUE--> d
 c --FALSE--> e
 d --> f
 e --> f
 f --> g
 g --> h
 h --> i

```

```pseudocode
// luas lingkaran

DECLARE r: REAL
DECLARE phi: REAL
DECLARE luas: REAL
DECLARE keliling: REAL

INPUT r

IF r%7== 0 THEN
    phi <-- 22/7
ELSEIF
    phi <-- 3.14
ENDIF

luas <-- r x phi x r x r
keliling <-- r x 2 x phi x r

OUTPUT "hasil dari luas lingkaran adalah:", luas
OUTPUT "hasil dari keliling lingkaran adalah:", keliling

```
