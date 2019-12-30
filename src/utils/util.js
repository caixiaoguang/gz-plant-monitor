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
                catch (err) {
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

function addZero(length, num) {
    let prefix = '';
    let currentLen = String(num).length;
    if (length == currentLen) {
        return num
    } else if (currentLen < length) {
        for (let i = currentLen; i < length; i++) {
            prefix += '0'
        }
        return prefix + num
    }
}


export function getPhotoList(photoNum) {
    let photoList = [];
    let numLength;
    photoNum = photoNum.replace(/\s*/g, "");
    if (photoNum.indexOf('DSC-') != -1) {
        let photoGroup = photoNum.split("DSC");

        function splitNum(photoString) {
            let startEndNum = photoString.split("-");

            if (startEndNum.length == 2) {
                return [startEndNum[1]]
            }

            let startNum = Number(startEndNum[1]);
            let endNum = Number(startEndNum[2]);
            let temp = [];
            numLength = startEndNum[1].length;

            if (startNum < endNum) {
                for (let i = startNum; i <= endNum; i++) {
                    temp.push(i);
                }
            }

            return temp;
        }

        photoGroup.forEach(el => {
            if (el) {
                photoList = photoList.concat(splitNum(el));
            }
        });
        return photoList.map(el => {
            el = addZero(numLength, el)
            return 'DSC_' + el
        });
    }

    if (photoNum.indexOf('DSCN') != -1) {
        let photoGroup = photoNum.split("DSCN");
        if (photoGroup.length == 2) {
            return [('DSCN' + photoGroup[1])]
        }

        photoGroup = photoGroup.map(el => {
            return el.replace('-', '')
        });

        numLength = photoGroup[1].length;

        for (let i = 1; i < photoGroup.length; i += 2) {
            let temp = [];
            let startNum = Number(photoGroup[i]);
            let endNum = Number(photoGroup[i + 1]);

            if (startNum < endNum) {
                for (let j = startNum; j <= endNum; j++) {
                    temp.push(j);
                }
            }
            photoList = photoList.concat(temp);
        }

        return photoList.map(el => {
            el = addZero(numLength, el)
            return 'DSCN' + el
        })
    }

    if (photoNum.indexOf('DSC') != -1 && photoNum.indexOf('DSCN') == -1 && photoNum.indexOf('DSC-') == -1) {
        let photoGroup = photoNum.split("DSC");

        function splitNum(photoString) {
            let startEndNum = photoString.split("-");

            if (startEndNum.length == 1) {
                return [startEndNum[0]]
            }

            let startNum = Number(startEndNum[0]);
            let endNum = Number(startEndNum[1]);
            let temp = [];

            numLength = startEndNum[0].length;

            if (startNum < endNum) {
                for (let i = startNum; i <= endNum; i++) {
                    temp.push(i);
                }
            }

            return temp;
        }

        photoGroup.forEach(el => {
            if (el) {
                photoList = photoList.concat(splitNum(el));
            }
        });

        return photoList.map(el => {
            el = addZero(numLength, el)
            return 'DSC' + el
        })
    }

    if (photoNum.indexOf('IMG') != -1) {
        let photoGroup = photoNum.split("IMG_");

        if (photoGroup.length == 2) {
            return [('IMG_' + photoGroup[1])]
        }

        photoGroup = photoGroup.map(el => {
            return el.replace('-', '')
        });

        for (let i = 1; i < photoGroup.length; i += 2) {
            let temp = [];
            let dataLabel = photoGroup[i].split('_')[0];
            let startNum = Number(photoGroup[i].split('_')[1]);
            let endNum = Number(photoGroup[i + 1].split('_')[1]);

            numLength = photoGroup[i].split('_')[1].length;

            if (startNum < endNum) {
                for (let j = startNum; j <= endNum; j++) {
                    temp.push('IMG_' + dataLabel + '_' + addZero(numLength, j));
                }
            }
            photoList = photoList.concat(temp);
        }
        return photoList
    }
}