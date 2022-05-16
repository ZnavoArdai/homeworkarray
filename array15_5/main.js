// var names=["znavo","avi","natan","ron","haim"];

// console.log(names);

// console.log(names[2]);

// for(var i=0;i<names.length;i++){
//     console.log(names[i])
// }

// var numbers=[100,200,300,400,500,600,700];

// console.log(numbers)
// console.log(3);
// numbers[1]="aroma";

// for(var i=0;i<numbers.length;i++){
//     console.log(numbers[i])
// }

// var numbers1=[10,2,4,5,6,7,9,23,14,31];


// console.log(numbers1)
// var tempp;
// var tmindex=0;
// for(var i=0;i<numbers1.length;i++){
// if(numbers1[i]%2==0){ 
//     console.log(numbers1[i])

//     tempp[tmindex++]=numbers1[i];
//     console.log(tempp);

// }

// }


// var numbers3=["hello",2,"world","jacob",6,7,"bye",98,-4];

// for(var i=0;i<numbers3.length;i++){
//     if(numbers3[i]>0||numbers3[i]<0){ 
//         console.log(numbers3[i])
//     }
// }

// var emptyarray=[];

// emptyarray.push(9);
// console.log(emptyarray)


// var emptyarray2=[];
// for(var i=0;i<10;i++){

//     emptyarray2.push(i)

// }



//מערכים 
//1
// console.log(emptyarray2)

// var array1=[5,3,7,8,11];
// var sum=0;
// var avg=0;
// for(var i=0;i<array1.length;i++){
//     sum=sum+array1[i];

//     avg=sum/i;

// }
// console.log(sum+" "+avg)

//2

// var names=["avi","natatn",",moshe","roman","ayacho"];
// for(var i=0;i<names.length;i++){
//     console.log(names[i]);
// }

//3

// function nums(num1,numbers=[]){
// for(var i=0;i<numbers.length;i++){
//     if(num1==numbers[i]){
//         return console.log(true);
//     }
//     else {
//         return console.log(false)
//     }
// }
// }

// nums(45[4,7,8,45,78]);

//4
// var counter=0;
// function even(x=[]){
//     for(var i=0;i<x.length;i++){
//         if(x[i]%2==0){
//             counter++;
//         }
//     }
//     return console.log(counter);
// }

//5
// even([1,2,5,7,9,12]);

// function arraylength(x=[],y=[]){

//     if(x.length==y.length){
//         return console.log(true);
//     }
//     else
//     return console.log(false);
// }

// arraylength([4,5,3],[4,8,7,8]);

//6

// function nums(x=[]){
// for(var i=0;i<x.length-1;i++){
//     if(x[i]>x[i+1]){
// var xx=x.pop(x[i]);
// x.push(xx);
//     }
    
// }
// return console.log(x);
// }

// nums([2,1,8,6]);

//7
// function maxx(x=[]){
//     var nummax=0;
//  for(var i=0;i<x.length;i++){
//      if(x[i]>nummax){
//          nummax=x[i];
//      }

//  }
//  return console.log(nummax);

// }


// maxx([11,2,4,8,9,3,44,22]);

8//
// function min(x=[]){
//     var num=x[0];
//     var minindex=0;
//  for(var i=0;i<x.length;i++){
//      if(x[i]<num){
//          num=x[i];
// minindex=i;
//      }

//  }
//   console.log(num,minindex);

// }


// min([11,22,6,2,4,8,-1,9,3,44,22]);

//9
// function sumOfArayy(x=[]){
//     var sum=0;

//     for(var i=0;i<x.length;i++){

//         sum+=x[i];
//     }
//     console.log(sum)
// }

// sumOfArayy([1,2]);
//10

// function minmax(x=[]){

//     var min=x[0];
//     var max=0;
//     for(var i=0;i<x.length;i++){
//         if(x[i]>max){
//             max=x[i];
//         }
//       if(x[i]<min){
//             min=x[i];
//         }
//     }

//     var sum=min*max;

//     console.log(max,min,sum);
// }
//  minmax([5,4,3,8,7,55,2]);
//11

// function evenbig(x=[]){
//     var max=0;
//     var index=0;
//  for(var i=0;i<x.length;i++){
// if(x[i]%2==0){
//     console.log(x[i])

//     if(x[i]>max){
//         max=x[i];
//         var index=i
//     }
// }
//  }
//  console.log(max,index);
// }


// evenbig([1,7,8,55,57,12,6]);

//12
// function notEvenSum(x=[]){
// var sum=0;
//     for(var i=0;i<x.length;i++){

//         if(x[i]%2==1){
// sum+=x[i];
//         }
//     }
// console.log(sum)
// return sum;

// }

// notEvenSum([1,7,9,22,12,8]);

//13

// function names(name,x=[]){

//   x.push(name)  

//   console.log(x)
// }

// names("znavo",["yossi","avi","natan"]);

//14


// function emails(email,x=[]){

//     x.unshift(email);

//     console.log(x);



// }

// emails("znavo@gmail.com",["yara@gmail.com","roman@gmail.com","yosii@gmail.com","avi@gmail.com"]);

15//

// function numbers(num,x=[]){

// if(num%2==0){
// x.unshift(num);
// }
// else{
//     x.push(num);
// }
    

//     console.log(x);
// }


// numbers(12,[1,2,7,8,9,6,4,2,3]);

//16

// function removnum(num,x=[]){
// var tr;
// for(var i=0;i<x.length;i++){

//     if(num==x[i])
//     {
//         x.splice(i,1)
//         tr=1;
//         i--;
//     }

// }

// if(tr!=1){
//     x.push(num);
// }

// if(tr){
    
// }


// console.log(x)

// }
//  removnum(6,[1,2,7,8,9,6,4,2,3]);

//17

// function bignumber(num,x=[]){
// var tr;
//     for(var i=0;i<x.length;i++){
//      if(num>x[i]){
// tr=1;

//      }
//     }
// if(tr==1)
// {
//     x.unshift(num)

// }
// else
// x.push(num);

//     console.log(x);
// }

// bignumber(1,[1,2,7,8,9,6,4,2,3]);

//18
 
// function removNum(num,x=[]){

//     for(var i=0;i<x.length;i++){
//         if(x.length>num){
//             if(num==x[i]){
//                 x.splice(num,1)
//             }
//         }
//     }

//     console.log(x);
// }
// removNum(3,[1,2,7,8,9,6,4,2,3]);











