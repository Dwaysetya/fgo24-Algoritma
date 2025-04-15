# Mini-task Algoritma

This is a bare minimum usage of algoritma, according to mini task on **Day 2** (15/042025)

## Algoritma mengkonversikan suhu celcius

1. Mulai
1. ambil termometer digital
1. letakkan di tengah ruangan, jauh dari dinding dan sumber panas atau dingin
1. nyalakan termometer digital
1. jika suhu sudah terdeteksi celcius, maka
1. ubah suhu dari celcius ke fahrenheit (⁰F = (9/5) × ⁰C + 32)
1. ubah suhu dari celcius ke kelvin (K= ⁰C + 273,15)
1. ubah suhu dari celcius ke reamur (⁰R = (4/5) ⁰C)
1. hasil
1. selesai

```mermaid
flowchart TB

a@{ shape: circle, label: "Start" }
b@{ shape: rect, label: "ambil termometer" }
c@{ shape: rect, label: "letakkan di tengah ruangan" }
d@{ shape: rect, label: "nyalakan termometer digital" }
e@{ shape: diamond, label: "suhu terdeteksi" }
f@{ shape: lean-r, label: "cecius" }
g@{ shape: rect, label: "celcius - fahrenheit" }
h@{ shape: rect, label: "celcius - kelvin" }
i@{ shape: rect, label: "celcius - reamur" }
j@{ shape: dbl-circ, label: "Selesai" }

a --> b
b --> c
c --> d
d --> e
e --> f
f --> g
f --> h
f --> i
g --> j
h --> j
i --> j
e --> d







```
