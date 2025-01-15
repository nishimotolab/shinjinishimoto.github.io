import numpy as np
from scipy.stats import t

# 3次元ボリュームをスライス（モザイク）表示する関数
def vol2mosaic(vol):
    vshape = vol.shape
    nX = np.round(np.sqrt(vshape[0]),0).astype(int)
    nY = np.ceil(vshape[0]/nX).astype(int)

    vol = np.concatenate((vol, vol[:(nX*nY-vshape[0]).astype(int),:,:]*0),0)
    vol = np.reshape(vol, (nX, nY, vshape[1], vshape[2]))
    vol = np.transpose(vol, [0,2,1,3])
    vol = np.reshape(vol, (nX*vshape[1], nY*vshape[2]))
    return vol

# 2次元行列と1次元行列から相関係数とp値を計算する関数
def corrcoef_2d_1d(A, b):
  # 相関係数を計算
  A_normalized = (A-np.mean(A, axis=0)) / np.std(A, axis=0)
  b_normalized = (b-np.mean(b)) / np.std(b)
  correlation_vector = b_normalized @ A_normalized / len(b)

  # t値とp値を計算
  t_values = correlation_vector * np.sqrt((len(b) - 2) / (1 - correlation_vector**2))
  p_values = 2 * (1 - t.cdf(np.abs(t_values), df=len(b) - 2))
  return correlation_vector, p_values

