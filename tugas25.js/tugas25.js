function panggilangka(){
    var angka=[2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("sebelumnya : ",angka);
    angka1= angka.sort();
    console.log("Ascending :",angka1);
    angka2=angka.reverse();
    console.log("Descending :",angka2);
    angka3=angka.filter(function(angka){
        return angka>10
    });
    console.log("Filter > 10",angka3)

};
panggilangka()
