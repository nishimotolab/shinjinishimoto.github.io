import numpy as np

class VisHiddenNoisyNeuron:
  # クラスを初期化する関数を定義
  def __init__(self, rf, spont_activity=1.0, noise_level=0.3, rf_gain=10.0):
    self.__rf = rf/(np.sum(abs(rf))) #rfの絶対値の和で正規化
    self.__rf = self.__rf * rf_gain #ゲイン調整
    self.__spont_activity = spont_activity
    self.__noise_level = noise_level

  # 光刺激から応答を計算
  def activity(self, s):
    rf_activity = np.sum(s * self.__rf) # 光刺激と受容野の要素積の和
    internal_activity = rf_activity + self.__spont_activity # 受容野応答＋自発活動
    internal_activity += np.random.normal(0, self.__noise_level) # ノイズを付加
    activity = self.ReLU(internal_activity)
    return activity

  # 活性化関数（半波整流/ReLU、0以下を0にする）
  def ReLU(self, x):
    # Rectified Linear Unit
    return np.maximum(0, x)

