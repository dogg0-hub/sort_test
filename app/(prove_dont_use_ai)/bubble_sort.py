# Pythonでバブルソートを解こうとして解けなかったファイルです。不必要ですがAIを使っていない証明として残しておきます。
array = [4, 1, 2, 5, 3, 100]
i = 0
def caluculate(array):
    for ii in range(1, len(array), 2):
        for i in range(0, len(array), 2):
            print(f"index：{i}, ii : {ii}")


# enumerate(array):
caluculate(array)
print(array)
# python 'C:\Users\sawa\Documents\sort_test1\src\sort_test1\bubble_sort.py' 