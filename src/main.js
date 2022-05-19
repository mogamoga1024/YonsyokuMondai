const colors = ["red", "blue", "green", "yellow"];

const prefs = {
    0: {name: "海", color: null, adjacentPrefCodes: [1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]},
    1: {name: "北海道", color: null, adjacentPrefCodes: [0]},
    2: {name: "青森県", color: null, adjacentPrefCodes: [0, 3, 5]},
    3: {name: "岩手県", color: null, adjacentPrefCodes: [0, 2, 4, 5]},
    4: {name: "宮城県", color: null, adjacentPrefCodes: [0, 3, 5, 6, 7]},
    5: {name: "秋田県", color: null, adjacentPrefCodes: [0, 2, 3, 4, 6]},
    6: {name: "山形県", color: null, adjacentPrefCodes: [0, 4, 5, 7, 15]},
    7: {name: "福島県", color: null, adjacentPrefCodes: [0, 4, 6, 8, 9, 10, 15]},
    8: {name: "茨城県", color: null, adjacentPrefCodes: [0, 7, 9, 11, 12]},
    9: {name: "栃木県", color: null, adjacentPrefCodes: [7, 8, 10, 11]},
    10: {name: "群馬県", color: null, adjacentPrefCodes: [7, 9, 11, 15, 20]},
    11: {name: "埼玉県", color: null, adjacentPrefCodes: [8, 9, 10, 12, 13, 19, 20]},
    12: {name: "千葉県", color: null, adjacentPrefCodes: [0, 8, 11, 13]},
    13: {name: "東京都", color: null, adjacentPrefCodes: [0, 11, 12, 14, 19]},
    14: {name: "神奈川県", color: null, adjacentPrefCodes: [0, 13, 19, 22]},
    15: {name: "新潟県", color: null, adjacentPrefCodes: [0, 6, 7, 10, 16, 20]},
    16: {name: "富山県", color: null, adjacentPrefCodes: [0, 15, 17, 20, 21]},
    17: {name: "石川県", color: null, adjacentPrefCodes: [0, 16, 18, 21]},
    18: {name: "福井県", color: null, adjacentPrefCodes: [0, 17, 21, 25, 26]},
    19: {name: "山梨県", color: null, adjacentPrefCodes: [11, 13, 14, 20, 22]},
    20: {name: "長野県", color: null, adjacentPrefCodes: [10, 11, 15, 16, 19, 21, 22, 23]},
    21: {name: "岐阜県", color: null, adjacentPrefCodes: [16, 17, 18, 20, 23, 24, 25]},
    22: {name: "静岡県", color: null, adjacentPrefCodes: [0, 14, 19, 20, 23]},
    23: {name: "愛知県", color: null, adjacentPrefCodes: [0, 20, 21, 22, 24]},
    24: {name: "三重県", color: null, adjacentPrefCodes: [0, 21, 23, 25, 26, 29, 30]},
    25: {name: "滋賀県", color: null, adjacentPrefCodes: [18, 21, 24, 26]},
    26: {name: "京都府", color: null, adjacentPrefCodes: [0, 18, 24, 25, 27, 28, 29]},
    27: {name: "大阪府", color: null, adjacentPrefCodes: [0, 26, 28, 29, 30]},
    28: {name: "兵庫県", color: null, adjacentPrefCodes: [0, 26, 27, 31, 33]},
    29: {name: "奈良県", color: null, adjacentPrefCodes: [24, 26, 27, 30]},
    30: {name: "和歌山県", color: null, adjacentPrefCodes: [0, 24, 27, 29]},
    31: {name: "鳥取県", color: null, adjacentPrefCodes: [0, 28, 32, 33, 34]},
    32: {name: "島根県", color: null, adjacentPrefCodes: [0, 31, 34, 35]},
    33: {name: "岡山県", color: null, adjacentPrefCodes: [0, 28, 31, 34]},
    34: {name: "広島県", color: null, adjacentPrefCodes: [0, 31, 32, 33, 35]},
    35: {name: "山口県", color: null, adjacentPrefCodes: [0, 32, 34]},
    36: {name: "徳島県", color: null, adjacentPrefCodes: [0, 37, 38, 39]},
    37: {name: "香川県", color: null, adjacentPrefCodes: [0, 36, 38]},
    38: {name: "愛媛県", color: null, adjacentPrefCodes: [0, 36, 37, 39]},
    39: {name: "高知県", color: null, adjacentPrefCodes: [0, 36, 38]},
    40: {name: "福岡県", color: null, adjacentPrefCodes: [0, 41, 43, 44]},
    41: {name: "佐賀県", color: null, adjacentPrefCodes: [0, 40, 42]},
    42: {name: "長崎県", color: null, adjacentPrefCodes: [0, 41]},
    43: {name: "熊本県", color: null, adjacentPrefCodes: [0, 40, 44, 45, 46]},
    44: {name: "大分県", color: null, adjacentPrefCodes: [0, 40, 43, 45]},
    45: {name: "宮崎県", color: null, adjacentPrefCodes: [0, 43, 44, 46]},
    46: {name: "鹿児島県", color: null, adjacentPrefCodes: [0, 43, 45]},
    47: {name: "沖縄県", color: null, adjacentPrefCodes: [0]}
};

/**
 * 自分の隣接する県の色に重複せずに色を塗れたらtrue
 * そうでなければfalseを返す。
 */
function paintColor(pref) {
    // 既に自分に色が塗られている場合、処理を行わずにtrueを返す
    if (pref.color !== null) return true

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        pref.color = color;

        // 隣接する県と色が重複しているかチェック
        for (let i = 0; i < pref.adjacentPrefCodes.length; i++) {
            // 隣接する県と色が重複している場合、自分の色を消す
            const code = pref.adjacentPrefCodes[i];
            if (color === prefs[code].color) {
                pref.color = null;
                break;
            }
        }
        
        // 自分に色が塗られている状態の場合（＝ 隣接県と色が重複しなかった場合）、隣接する県に色を塗る
        if (pref.color !== null) {
            for (let i = 0; i < pref.adjacentPrefCodes.length; i++) {

                const code = pref.adjacentPrefCodes[i];
                const isSuccess = paintColor(prefs[code]);
                
                // 隣接する県に色を塗れなかった場合、自分の色を消す
                if (isSuccess === false) {
                    pref.color = null;
                    break;
                }
            }

            // 隣接する県に色を塗れた場合、trueを返して処理を終える
            if (pref.color !== null) {
                return true;
            }
        }
    }

    // ここまでたどり着くときは、自分に色を塗れなかった場合のみ
    return false;
}

paintColor(prefs[0]);

// const code in prefsだとIE11さんから怒られる…
for (let code in prefs) {
    console.log(String(code) + "," + prefs[code].name + "," + prefs[code].color);
}