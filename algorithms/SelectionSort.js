let array = [5, 7, 4, 9, 12, 10];

function selectionSort(array){
    let res_array = [];
    let index;
    let flag = true;
    const len = array.length;
    for(let k = 0;k < len;k++){
        index = findSmaller(array);
        res_array.push(array[index]);
        array.splice(index, 1);
    }
    console.log(res_array);
}

function findSmaller(arr){
    let smallest = arr[0];
    let smallest_index = 0;
    for(let i = 0; i < arr.length;i++){
        if(smallest < arr[i]){
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

selectionSort(array);