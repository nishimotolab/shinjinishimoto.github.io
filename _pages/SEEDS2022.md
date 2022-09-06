---
title: "Nishimoto Lab - SEEDS2022"
layout: textlay
excerpt: "SEEDS2022"
sitemap: false
permalink: /SEEDS2022
---

### SEEDS2022/T2216


#### (1) 関数を表示する

```
import numpy as np
import matplotlib.pyplot as plt

x=np.linspace(0,5,1000)
y=x**2-4*x+3

plt.plot(x,y)
plt.grid()
```

### (2) データを取得する

```
!wget https://www.dropbox.com/s/y232hg3tfm2c4u9/data_mc1.npz
!wget https://www.dropbox.com/s/oodqmolfpt5mc31/data_mc2.npz
!wget https://www.dropbox.com/s/zca9fbkqqdgv9rr/data_dt1.npz
!wget https://www.dropbox.com/s/nw8y849b3xbgirk/data_dt2.npz
```


<br />
