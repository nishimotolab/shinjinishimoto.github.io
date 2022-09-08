---
title: "Nishimoto Lab - SEEDS2022"
layout: textlay
excerpt: "SEEDS2022"
sitemap: false
permalink: /SEEDS2022
---

## SEEDS2022/T2216
<br />


このページは大阪大学SEEDS体感科学研究2022年度T2216の参照用ページです。<br />
閲覧は受講者および関係者に限ります。<br />

<br />
<br />

### (0) Google Colab利用の準備を行う

1. Googleアカウントを作成する
2. Google Colabを開く [https://colab.research.google.com/?hl=ja](https://colab.research.google.com/?hl=ja) <br />
![ex]({{site.baseurl}}/images/seeds/colab0.png){:width="640px"}
3. 再生ボタン（右向き三角アイコン）を押してGoogle Colabクラウドサーバへの接続を行う

<br />
<br />
**Google Colabとは**
- Google社が提供するオンラインのPythonプログラミング環境
- ブラウザ（Safari、Edge、Chrome等）上で動作する
- ブラウザが動くならユーザー側の環境はタブレット（iPad等）やスマートフォン等でも可
- 実際の計算は個々に割り当てられたGoogle Colabクラウドサーバ（世界のどこかにあるコンピュータ）上で行われる
- 割り当てられたクラウドサーバは最大で12時間連続で利用できる（無料利用の場合）

<br />
補足：　割り当てられたクラウドサーバがどの地域にあるかを調べたければ「!curl ipinfo.io」で実行（再生ボタン）。<br />

<br />
<br />

### (1) Google Colabを動かす（簡単な計算）
Google Colabに接続し、「+コード」で新しいセルを開いて下記を入力し、実行（再生ボタン）を押す。
```python
x=5+6
y=2*x
print(y)
```
結果例：
![ex]({{site.baseurl}}/images/seeds/colab1.png){:width="500px"}
<br />
上記のように正しい答え（22）が返ってきたらGoogle Colabクラウドサーバの割り当てと接続が正常に行われている<br />

<br />
<br />


### (2) 作図する（関数プロット）

```python
import numpy as np   #数値計算用ライブラリNumPyを読み出してnpと名付ける
import matplotlib.pyplot as plt   #作図用ライブラリを読み出してpltと名付ける

x=np.arange(-3,3,0.01)   #-3から3まで0.01刻みで大きくなる等差数列を作ってxに代入
y=x**2   #Pythonではaのn乗をa**nと書く

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

発展：
- 他の関数について知りたい→「numpy 指数関数」等でWeb検索
- 他のプロットについて知りたい→「matplotlib　例」等でWeb検索

<br />

**練習問題**：
以下の図はどのような関数をプロットしたものか推定し、再現してみましょう。<br />
![ex]({{site.baseurl}}/images/seeds/plotQ.png)


<br />
<br />

### (3) ファイルを取得する

今回の実習に必要な3つのファイルをDropBoxからクラウドサーバ内にダウンロードする。<br />

```python
!wget https://www.dropbox.com/s/upm85oj8rizkav4/MRI_anat.npz
!wget https://www.dropbox.com/s/g68uu6swuk6zfxk/fMRI_data1.npz
!wget https://www.dropbox.com/s/j55c318g56qa10p/fMRI_data2.npz
```
実行例：
![ex]({{site.baseurl}}/images/seeds/download_ex.png){:width="600px"}<br />
ファイルがダウンロードされたことを確認：
![ex]({{site.baseurl}}/images/seeds/files.png){:width="300px"}

補足：　
- 最初に「!」がつくとPythonではなくLinuxコマンドとして実行される。
- 「.npz」はNumPyデータを扱うファイル形式の一つ。
- 同じクラウドサーバを利用し続ける限り上記のファイルが利用できる。
- 別のクラウドサーバが割り当てられた（12時間以上経った、接続が切れた）場合は再度のダウンロードが必要。

<br />
<br />


### (4) 脳構造（MRI）データを扱う（ヒト脳断面の表示）

使用するデータ（MRI_anat.npz）の情報：
- 被験者：　17歳女性/健康
- 撮像形態：　頭部3次元構造画像（X-Y-Z）　（T1強調ME-MPRAGE）
- 撮像の空間解像度：　1.3 x 1.0 x 1.0 mm
- 撮像ボクセル数：　(128, 192, 256)
- 脳データ共有サイトOpenNeuroの [LiteBook Alertness Study](https://openneuro.org/datasets/ds004219/versions/1.0.0) から取得（CC0）
- 個人情報保護のためdeface処理済み

脳構造データを読み込んで脳断面を描画する。<br />
```python
import numpy as np
import matplotlib.pyplot as plt

loaded=np.load('MRI_anat.npz')
br=loaded['anat']   #脳構造データ（3次元; X-Y-Z）を読み出し

img=br[85,:,:]   #3次元のデータのうちのある１断面（スライス）を指定。「:」はその次元のすべてのデータという意味
img=np.transpose(img,[1,0])   #０次元目と1次元目を入れ替え（転置、ここでは表示のため）

plt.figure(figsize=(10,10))
plt.imshow(img,origin='lower',cmap='gray')
```
実行例：
![ex]({{site.baseurl}}/images/seeds/anat_s.png)
<br />
発展：
画像表示のオプションを知りたい→「matplotlib imshow 使い方」等でWeb検索<br />
<br />

参考：　脳断面の名前 (Credit: Zwarck, CC BY-SA 3.0)<br />
![ex]({{site.baseurl}}/images/seeds/800px-AxesAnatomieCerveauJA.svg.png){:width="400px"}<br />
<br />


**練習問題**：
冠状（前頭）断面および水平（横）断面を表示してみましょう。<br />
（ヒント：上記のコードについてスライスの方向や位置を修正）<br />
![ex]({{site.baseurl}}/images/seeds/anat_c.png) ![ex]({{site.baseurl}}/images/seeds/anat_h.png)

<br />
<br />


### (5) 脳機能（fMRI）データを扱う１ （単一ボクセルの応答再現性解析）
使用するデータ（fMRI_data1.npz）の情報
- 撮像形態：　頭部4次元脳活動画像（t-X-Y-Z）　（T2\*強調Multiband-GE-EPI）
- 提示刺激：　2分間（120秒）の動画の5回繰り返し提示
- 撮像の空間解像度： 2.0 x 2.0 x 2.0 mm
- 撮像ボクセル数：　(72,96,96）
- 撮像時間：　2秒/全脳サンプル
- 撮像サンプル数：　300
- 解析のための前処理（脳抽出・動き補正・長期トレンド除去）済み

ある一座標（単一ボクセル）の時系列応答を取り出し、繰り返し提示刺激に対する応答再現性を計算する。<br />
```python
import numpy as np
import matplotlib.pyplot as plt

loaded=np.load('fMRI_data1.npz')
ｒ=loaded['func']   #脳機能データ（4次元; 時間-X-Y-Z）を読み出し

r1=r[:,29,70,44]   #ある一座標（単一ボクセル）の応答時系列の取り出し
r1=np.reshape(r1,[5,60])   #[繰り返し回数(5回） x 時間サンプル数（120秒/（2秒/サンプル）=60サンプル）]にreshape

plt.plot(r1.T)
plt.show()

###ここから応答再現性指標EV値の計算
m1=np.mean(r1,axis=0)   #繰り返し回数方向に平均
var_all=np.var(r1)   #全体の分散を計算
var_err=np.var(r1-m1)   #エラー（平均周りの分散）を計算
ev=1-var_err/var_all   #応答再現性指標EV値を計算

print('EV=%.3f'%ev)
```

<br />
実行例1（座標29,70,44）：
![ex]({{site.baseurl}}/images/seeds/ev_plot.png) EV=0.824

<br />
実行例2（座標25,81,57）：
![ex]({{site.baseurl}}/images/seeds/ev_plot_low.png) EV=0.176

<br />
<br />

### (6) 脳機能（fMRI）データを扱う２ （全脳の応答再現性解析）

全脳の応答再現性を計算して表示する。
```python
import numpy as np
import matplotlib.pyplot as plt

loaded=np.load('fMRI_data1.npz')
r=loaded['func']

r=np.reshape(r,(5,60,72,96,96))   #（繰り返し回数-時間-X-Y-Z）の5次元データにreshape
m=np.mean(r,axis=0)   #繰り返し回数方向に平均
var_all=np.var(r,axis=(0,1))   #ボクセルごとの時系列分散を計算
var_err=np.var(r-m,axis=(0,1))   #エラー（平均周り）の分散を計算
ev=1-var_err/var_all   #応答再現性指標EV値を計算

### スライス一覧表示のための操作（多次元認識のための頭の体操？）
d4=np.reshape(ev,[9,8,96,96])
d4=np.transpose(d4,[0, 2, 1, 3])
d2=np.reshape(d4,[9*96,8*96])
ev2d=d2

plt.figure(figsize=(15,15))
ref2d=loaded['ref2d']
plt.imshow(ref2d,cmap='gray')   #参照用の脳の形を背景として表示（水平断面の一覧表示）
plt.imshow(ev2d,alpha=1.0*(ev2d>0.3),vmin=0,vmax=1)   #EV値が高いボクセルについて透過表示
```
実行例：
![ex]({{site.baseurl}}/images/seeds/ev_data1.png)<br />

<br />

**練習問題**：<br />
脳機能データ２（fMRI_data2.npz）にも繰り返し動画刺激実験に対する脳活動が入っていて、こちらの実験では2分半の動画が4回繰り返し提示されていました。また、データ１とデータ２のどちらかの動画は視聴覚刺激(A)が提示され、別の一方は視覚刺激のみ（音無し）(B)が提示されていました。<br />
<br />
(1) データ２についても上記データ１と同様に応答再現性（EV）解析を行い、結果を表示してみましょう。<br />
　　ヒント：上記プログラムのうちの2文について一部変更<br />
<br />
(2) (1)の結果および脳機能の局在性から、どちらのデータが(A)(B)どちらの刺激を用いていたのか推定してみましょう。<br />
　　ヒント：ヒト脳における視覚野と聴覚野の位置<br />
<br />
難(3) （上記では物足りない人向け）上記の応答再現性解析の結果について矢状断面スライスの形式で（背景、EVともに）表示してみましょう。<br />

<br />
発展：<br />
Pythonについてより体系的に学びたい人に（東京大学の授業用教材）<br />
[Pythonプログラミング入門 Colab版](https://utokyo-ipp.github.io/)<br />
[Pythonプログラミング入門 PDF版](https://utokyo-ipp.github.io/IPP_textbook.pdf)<br />
<br />
<br />

