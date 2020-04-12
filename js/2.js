var n=5;
console.log('n'); //Kiểm tra lỗi
console.log(n);
n3="Xin Chào";
console.log(n3);
console.log(n3+n);
// Các toán tử
var x=1, y=3;
console.log(x+y);
var a="Xin Chào"
console.log(x+a); //Nối chữ&số
// Gọi hàm
function test() {
    console.log('test hàm');
    
}
// Biểu thức so sánh
var diem=7;
if (diem<=5) {
    console.log("Không đạt");

}else{
    console.log('đạt');
    
}
// Mảng
var M=["một","hai","ba"]
console.log(M);
console.log(M[2]);
// Kiểu object
var conmeo={
    maulong:"den thui",
    ten:"Tinh",
    cannang:"6kg"
}
console.log(conmeo);
console.log(conmeo.ten);

var hocvien={
    ten:"Dong",
    ho:"Lam",
    chieucao:"1m80",
    nang:"80kg",
    tendaydu:function() { return this.ho +" "+
    this.ten;},
    danhgia: function() {
        if (this.chieucao/this.cannang<3)
         {
             return "Dáng đẹp";
            }
        else
        {return"thân hình hơi gầy gò";
            }
        }
    }
console.log(hocvien.tendaydu);
console.log(hocvien.danhgia);
// Toán Tử
var x=9;
x=x/3; //hoặc x/=3
console.log("Kết quả" +x);
// Vòng lặp
var sv=['viet','nam','que','huong','toi'];
console.log('các phần tử trong mảng');
for (var i=0; i<sv.length;i++) {
    console.log(sv[i]);
}




