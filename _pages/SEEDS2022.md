---
title: "Nishimoto Lab - SEEDS2022"
layout: textlay
excerpt: "SEEDS2022"
sitemap: false
permalink: /SEEDS2022
---

## SEEDS2022/T2216
<br />


このページは大阪大学SEEDS体感科学研究2022年度T2216の参照用ページです。閲覧は受講者および関係者に限ります。

<br />
<br />

### (1) Google Colabを動かす（簡単な計算）

```python
x=5
y=2*x+7
print(y)
```
結果例：
17

<br />
<br />


### (2) 作図する（関数プロット）

```python
import numpy as np
import matplotlib.pyplot as plt

x=np.arange(-3,3,0.01)
y=x**2

plt.plot(x,y)
plt.grid()
```

結果例：
![ex]({{site.baseurl}}/images/seeds/plot1.png)
<br />

その他の例：
- 三次関数
```python
y=x**3-2*x**2-x+0.5
```
- 三角関数との組み合わせ
```python
y=x+np.sin(5*x)
```
<br />

練習問題：
以下の図はどのような関数をプロットしたものでしょうか。<br />
![ex]({{site.baseurl}}/images/seeds/plotQ.png)



発展：
- 他の関数について知りたい→「numpy 指数関数」等で検索
- 他のプロットについて知りたい→「matplotlib　例」等で検索

<br />
<br />

### (3) ファイルを取得する

今回の実習に必要なファイルをクラウドサーバ内にダウンロードする。<br />

```python
!wget https://www.dropbox.com/s/y232hg3tfm2c4u9/data_mc1.npz
!wget https://www.dropbox.com/s/oodqmolfpt5mc31/data_mc2.npz
!wget https://www.dropbox.com/s/zca9fbkqqdgv9rr/data_dt1.npz
!wget https://www.dropbox.com/s/nw8y849b3xbgirk/data_dt2.npz
```

実行例：
![ex]({{site.baseurl}}/images/seeds/download_ex.png){:width="200px"}<br />
![ex]({{site.baseurl}}/images/seeds/files.png){:width="200px"}

メモ:
最初に「!」がつくとPythonではなくLinuxコマンドとして実行される。

<br />
<br />


### (4) 脳構造データを描画する

脳構造データを読み込んで矢状断面を描画する。
```python
import numpy as np
import matplotlib.pyplot as plt

loaded=np.load('MRI_anat.npz')
br=loaded['anat']

img=br[85,:,:]
img=np.transpose(img,[1,0])
img=np.flipud(img)

plt.figure(figsize=(10,10))
plt.imshow(img,cmap='gray')

```
実行例：
![ex]({{site.baseurl}}/images/seeds/anat_s.png)

<br />
脳構造データの情報 [LiteBook Alertness Study](https://openneuro.org/datasets/ds004219/versions/1.0.0)
- 被験者：　17歳女性/健康
- 解像度：　1.33x1.0x1.0mm
- 撮像ボクセル数：　(128, 192, 256)
- 個人情報保護のためdeface処理済み

<br />

練習問題：
冠状断面および水平断面を表示してみよう。<br />
![ex]({{site.baseurl}}/images/seeds/anat_c.png) ![ex]({{site.baseurl}}/images/seeds/anat_h.png)


