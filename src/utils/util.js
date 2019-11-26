import XLSX from 'xlsx'

// 从网络上读取某个excel文件，url必须同域，否则报错
function readWorkbookFromRemoteFile(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function (e) {
        if (xhr.status == 200) {
            var data = new Uint8Array(xhr.response)
            var workbook = XLSX.read(data, { type: 'array' });
            if (callback) callback(workbook);
        }
    };
    xhr.send();
}

function readWorkbook(workbook, sheetNum, callback) {
    var sheetNames = workbook.SheetNames; // 工作表名称集合
    var worksheet = workbook.Sheets[sheetNames[sheetNum]];
    var json = XLSX.utils.sheet_to_json(worksheet);
    if (callback) callback(json);
}

export function loadRemoteFile(url, sheetNum, callback) {
    readWorkbookFromRemoteFile(url, function (workbook) {
        readWorkbook(workbook, sheetNum, callback);
    });
}

//excle与shp文件join
export function xlsJoinShp(xls, shp) {
    let xlsKeys = Object.keys(xls[0][0]);
    let xlsJoinKey = xls[1];
    let shpJoinKey = shp[1];
    shp[0].features.forEach(element => {
        xls[0].forEach(item => {
            if (element.properties[shpJoinKey] == item[xlsJoinKey]) {
                xlsKeys.forEach(key => {
                    element.properties[key] = item[key];
                });
            }
        });
    });
}

