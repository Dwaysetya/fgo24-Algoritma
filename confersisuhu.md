# Mini-task Algoritma

This is a bare minimum usage of algoritma, according to mini task on **Day 2** (15/042025)

## Algoritma mengkonversikan suhu celcius

1. Mulai
1. masukkan suhu sebagai "c"
1. jika "typeof" == "number", maka
1. masukkan tipe konversi yang di pilih sebagai "type"
1. jika "type" diisikan "f", maka
1. hitung "result" dengan (9/5 x c) + 32
1. jika "type" diisikan "k", maka
1. hitung "result" dengan c + 273
1. jika "type" diisikan "r", maka
1. hitung "result" dengan 4/5 x c
1. output result
1. selesai

```mermaid
flowchart TB

a@{ shape: circle, label: "Start" }
b@{ shape: lean-r, label: "input:c" }
c@{ shape: diamond, label: "typeof == 'number'" }
d@{ shape: lean-r, label: "input:'type'" }
e@{ shape: diamond, label: "type == 'f'"}
f@{ shape: diamond, label: "type == 'k'"}
g@{ shape: diamond, label: "type == 'r'"}
h@{ shape: rect, label: "result =(9/5 x c) + 32 "}
i@{ shape: rect, label: "result =c + 273" }
j@{ shape: rect, label: "result =4/5 x c" }
output@{ shape: lean-r, label: "output:'result'" }
x@{ shape: dbl-circ, label: "Selesai" }

a --> b
b --> c
c --FALSE--> x
c --TRUE--> d
d --> e
e -- TRUE--> h
e --FALSE--> f
f --TRUE--> i
f --FALSE--> g
g --TRUE-->j
g --FALSE--> x
h --> output
i --> output
j --> output
output --> x
output --> x
output --> x











```
