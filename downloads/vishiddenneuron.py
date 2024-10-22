import numpy as np

class VisHiddenNeuron:
  # クラスを初期化する関数を定義
  def __init__(self, rf, spont_activity=1.0):
    self.__rf = rf # 受容野を内部変数として保存
    self.__spont_activity = spont_activity

  # 光刺激から応答を計算
  def activity(self, s):
    rf_activity = np.sum(s * self.__rf) # 光刺激と受容野の要素積の和
    activity = self.ReLU(self.__spont_activity + rf_activity)
    return activity

  # 活性化関数（半波整流/ReLU、0以下を0にする）
  def ReLU(self, x):
    # Rectified Linear Unit
    return np.maximum(0, x)

