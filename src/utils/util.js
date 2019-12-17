import XLSX from 'xlsx'
import _cloneDepp from 'lodash/cloneDeep'

// 从网络上读取某个excel文件，url必须同域，否则报错
function readWorkbookFromRemoteFile(url) {
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

function readWorkbook(workbook) {
    let result = [];
    workbook.SheetNames.forEach(sheetName => {
        let worksheet = workbook.Sheets[sheetName];
        let json = XLSX.utils.sheet_to_json(worksheet);
        result.push(json)
    })
    return result
}

// export function loadRemoteFile(url, callback) {
//     readWorkbookFromRemoteFile(url, function (workbook) {
//         readWorkbook(workbook, callback);
//     });
// }

export function loadRemoteFile(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function (e) {
            if (xhr.status == 200) {
                try {
                    var data = new Uint8Array(xhr.response);
                    var workbook = XLSX.read(data, { type: 'array' });
                    resolve(readWorkbook(workbook));
                }
                catch(err){
                    console.log(err);
                    
                }
               
            } else {
                reject(new Error(e.statusText))
            }
        };
        xhr.send();
    })
}



//excle与shp文件join,
export function xlsJoinShp(xls, shp) {
    let xlsKeys = Object.keys(xls.data[0]);
    let xlsJoinKey = xls.key;
    let shpJoinKey = shp.key;
    let shpClone = _cloneDepp(shp.data);
    shpClone.features.forEach(feature => {
        xls.data.forEach(xlsRow => {
            if (feature.properties[shpJoinKey] == xlsRow[xlsJoinKey]) {
                xlsKeys.forEach(xlsKey => {
                    if (typeof xlsRow[xlsKey] === 'undefined') {
                        feature.properties[xlsKey] = "";
                    } else {
                        feature.properties[xlsKey] = xlsRow[xlsKey];
                    }
                });
            }
        });
    });
    return shpClone
}


export function degree2decimal(degreeString) {
    let degreeMain = degreeString.split('°')[0];
    let degreeMinute = degreeString.split('°')[1].split('′')[0];
    let degreeSecond = degreeString.split('′')[1].split('″')[0];
    return (Number(degreeSecond) / 60 + Number(degreeMinute)) / 60 + Number(degreeMain)
}