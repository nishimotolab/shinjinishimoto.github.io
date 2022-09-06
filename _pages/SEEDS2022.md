---
title: "Nishimoto Lab - SEEDS2022"
layout: textlay
excerpt: "SEEDS2022"
sitemap: false
permalink: /SEEDS2022
---

### SEEDS2022/T2216
<br />


このページは大阪大学SEEDS体感科学研究2022年度T2216の参照用ページです。閲覧は受講者および関係者に限ります。

<br />
<br />

#### (1) Google Colabを動かす（簡単な計算）

```
x=5
y=x+12
print(y)
```
結果例：
17
<br />


#### (2) 作図する（関数プロット）

```python
import numpy as np
import matplotlib.pyplot as plt

x=np.linspace(0,5,1000)
y=x**2

plt.plot(x,y)
plt.grid()
```
結果例：
![ex]({{site.baseurl}}/images/seeds/plot1.png)
<br />
その他の例：
- 三次関数
```
y=x**3-2*x**2-x+0.5
```
- 三角関数
```
y=x+np.sin(5*x)
```
<br />
発展例：
- 他の関数について知りたい→「numpy 指数関数」等で検索
- 他のプロットについて知りたい→「matplotlib　例」等で検索



#### (2) ファイルを取得する

今回の実習に必要なファイルをColabクラウドサーバにダウンロードする

```
!wget https://www.dropbox.com/s/y232hg3tfm2c4u9/data_mc1.npz
!wget https://www.dropbox.com/s/oodqmolfpt5mc31/data_mc2.npz
!wget https://www.dropbox.com/s/zca9fbkqqdgv9rr/data_dt1.npz
!wget https://www.dropbox.com/s/nw8y849b3xbgirk/data_dt2.npz
```
実行例：


<br />
