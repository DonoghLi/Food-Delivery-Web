// // var message = "The quick brown fox jumps over the lazy dog";
// var message = "Codility We test coders";

// var K = 7;

// console.log(message.length);

// // // function solution(message, k){
// //     // console.log(message.length);
// // message = message.substring(0, message.length - k);
// // console.log(message);
// //     // for(let i = message.length - 1; i > 0; i--){
// //     //     if(i == " "){
// //     //         continue;
// //     //     }else if(k > 0){
// //     //         k -= 1;

// //     //     }
// //     // }
// // const solution=(message,K)=>{
// if (message.length === K) return message;
// if(message.length <= K) return message;
// let arr = message.split(' ');
// let sum = 0;
// let boo = 0;
// for (let i of arr) {
//     sum += i.length - 1;
//     if(sum > K){
//         sum -= arr[arr.indexOf(i)].length;
//         boo++;
//         break;
//     }
// }
// if(sum < K && boo == 0){
//     console.log(message.substring(0, K));
// }else if(sum <= 0){
//     console.log('space');
// }else{
//     console.log(message.substring(0,sum + 1));
// }
    
// //   }

function solution() {
    var strs = "";
    var tb = document.getElementsByTagName("tbody")[0];    //获取table对像
    var rows = tb.rows;
    for (var i = 0; i < rows.length; i++) {    //--循环所有的行
        var cells = rows[i].cells;  // cells 集合返回表格中所有 <td> 或 <th> 元素。
        for (var j = 0; j < cells.length; j++) {   //--循环所有的列，从第一列取数据，因为一般第一列都是标识，数据毫无意义。
            if (cells[j].style.color != cells[j].style.backgroundColor) {
                strs += cells[j].innerHTML;
            }
        }
    }
    return strs;
}



