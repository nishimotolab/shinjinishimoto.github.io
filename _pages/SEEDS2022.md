---
title: "Nishimoto Lab - SEEDS2022"
layout: textlay
excerpt: "SEEDS2022"
sitemap: false
permalink: /SEEDS2022
---

### SEEDS2022/T2216


このページは大阪大学SEEDS体感科学研究2022年度T2216の参照用ページです。閲覧は受講者および関係者に限ります。




#### (1) 計算をする

```
x=5
y=x+12
print(y)
```
結果例：
17


#### (2) 関数をプロットする

```python
import numpy as np
import matplotlib.pyplot as plt

x=np.linspace(0,5,1000)
y=x**2-4*x+3

plt.plot(x,y)
plt.grid()
```
結果例：
![ex]({{site.baseurl}}/images/seeds/plot1.png)



#### (2) データを取得する

```
!wget https://www.dropbox.com/s/y232hg3tfm2c4u9/data_mc1.npz
!wget https://www.dropbox.com/s/oodqmolfpt5mc31/data_mc2.npz
!wget https://www.dropbox.com/s/zca9fbkqqdgv9rr/data_dt1.npz
!wget https://www.dropbox.com/s/nw8y849b3xbgirk/data_dt2.npz
```


<br />
