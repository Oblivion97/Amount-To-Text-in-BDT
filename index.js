let iWords = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
  let ePlace = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
  let tensPlace = ['', ' Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];
  let inWords: any;

  let numReversed: any;
  let actNumber: any;
  let accNoIndex: any;
  let inWordIndex: any;

  function tensComplication() {
    if (actNumber[accNoIndex] === '0') {
        inWords[inWordIndex] = '';
    } else if (actNumber[accNoIndex] === '1') {
        inWords[inWordIndex] = ePlace[actNumber[accNoIndex - 1]];
    } else {
        inWords[inWordIndex] = tensPlace[actNumber[accNoIndex]];
    }
  }


  function amountToText(val: any) {
    inWords = [];
    var junkVal = val;
    junkVal = Math.floor(junkVal);
    var obStr = junkVal.toString();
    numReversed = obStr.split('');
    actNumber = numReversed.reverse();

    if (Number(junkVal) >= 0) {
        //do nothing
    } else {
        return false;
    }

    if (Number(junkVal) === 0) {
        return 'Zero';
    }

    var iWordsLength = numReversed.length;
    var finalWord = '';
    inWordIndex = 0;
    for (accNoIndex = 0; accNoIndex < iWordsLength; accNoIndex++) {
        switch (accNoIndex) {
            case 0:
                if (actNumber[accNoIndex] === '0' || actNumber[accNoIndex + 1] === '1') {
                    inWords[inWordIndex] = '';
                } else {
                    inWords[inWordIndex] = iWords[actNumber[accNoIndex]];
                }
                inWords[inWordIndex] = inWords[inWordIndex];
                break;
            case 1:
                tensComplication();
                break;
            case 2:
                if (actNumber[accNoIndex] === '0') {
                    inWords[inWordIndex] = '';
                } else if (actNumber[accNoIndex - 1] !== '0' && actNumber[accNoIndex - 2] !== '0') {
                    inWords[inWordIndex] = iWords[actNumber[accNoIndex]] + ' Hundred and';
                } else {
                    inWords[inWordIndex] = iWords[actNumber[accNoIndex]] + ' Hundred';
                }
                break;
            case 3:
                if (actNumber[accNoIndex] === '0' || actNumber[accNoIndex + 1] === '1') {
                    inWords[inWordIndex] = '';
                } else {
                    inWords[inWordIndex] = iWords[actNumber[accNoIndex]];
                }
                if (actNumber[accNoIndex + 1] !== '0' || actNumber[accNoIndex] > '0') {
                    inWords[inWordIndex] = inWords[inWordIndex] + ' Thousand';
                }
                break;
            case 4:
                tensComplication();
                break;
            case 5:
                if (actNumber[accNoIndex] === '0' || actNumber[accNoIndex + 1] === '1') {
                    inWords[inWordIndex] = '';
                } else {
                    inWords[inWordIndex] = iWords[actNumber[accNoIndex]];
                }
                if (actNumber[accNoIndex + 1] !== '0' || actNumber[accNoIndex] > '0') {
                    inWords[inWordIndex] = inWords[inWordIndex] + ' Lakh';
                }
                break;
            case 6:
                tensComplication();
                break;
            case 7:

                if (actNumber[accNoIndex] === '0' || actNumber[accNoIndex + 1] === '1') {
                    inWords[inWordIndex] = '';
                } else {
                    inWords[inWordIndex] = iWords[actNumber[accNoIndex]];
                }
                inWords[inWordIndex] = inWords[inWordIndex] + ' Crore';
                break;
            case 8:
                tensComplication();
                break;
            case 9:
                if (actNumber[accNoIndex] === '0') {
                    inWords[inWordIndex] = '';
                } else if (actNumber[accNoIndex - 1] !== '0' && actNumber[accNoIndex - 2] !== '0') {
                    inWords[inWordIndex] = iWords[actNumber[accNoIndex]] + ' Hundred and';
                } else {
                    inWords[inWordIndex] = iWords[actNumber[accNoIndex]] + ' Hundred';
                }
                break;
            case 10:
                if (actNumber[accNoIndex] === '0' || actNumber[accNoIndex + 1] === '1') {
                    inWords[inWordIndex] = '';
                } else {
                    inWords[inWordIndex] = iWords[actNumber[accNoIndex]];
                }
                if (actNumber[accNoIndex + 1] !== '0' || actNumber[accNoIndex] > '0') {
                    inWords[inWordIndex] = inWords[inWordIndex] + ' Thousand';
                }
                break;
            case 11:
                tensComplication();
                break;
            default:
                break;
        }
        inWordIndex++;
    }

    inWords.reverse();
    for (accNoIndex = 0; accNoIndex < inWords.length; accNoIndex++) {
        finalWord += inWords[accNoIndex];
    }
    for (accNoIndex = 0; accNoIndex < inWords.length; accNoIndex++) {
        inWords.pop();
    }
    return finalWord;
}

  function amountToTextWithDecimal(n: any) {
    if (n == '') {
        if (Number(n) == 0){}
        else return '';
    }
    if (!Number.isInteger(Number(n))){
        n = Number(n).toFixed(Math.max(((Number(n)+'').split(".")[1]||"").length, 2));
    }else {
        n = Number(n);
    }
    var nums = n.toString().split('.');
    var whole = amountToText(nums[0]);
    if (nums.length == 2) {
        inWords = [];
        var fraction = amountToText(nums[1]);
        return 'Taka ' + whole + ' and Poisa ' + fraction + ' Only';
    } else {
        return 'Taka ' + whole + ' Only';
    }
  }