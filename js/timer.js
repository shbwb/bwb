var time= new Date();
        var y=time.getFullYear();
        var M=time.getMonth()+1;
                if(M<10){
                 M="0"+M;
                 }
                 var d=time.getDate();
                 if(d<10){
                 d="0"+d;
                 }
                 var h=time.getHours();
                 if(h<10){
                     h="0"+h;
                 }
                 var m=time.getMinutes();
                 if(m<10){
                    m="0"+m;
                 }
                 var s=time.getSeconds();
                 if(s<10){
                     s="0"+s;
                 }
                 var day=time.getDay();
                 switch(day){
                     case 0:
                       day="Sun";
                       break;
                       case 1:
                       day="Mon";
                       break;
                       case 2:
                       day="Tues";
                       break;
                        case 3:
                       day="Wed";
                       break; 
                       case 4:
                       day="Thur";
                       break;
                        case 5:
                       day="Fri";
                       break; 
                       case 6:
                       day="Sat";
                       break;
                    }
                    var str=y+"/"+M+"/"+d+"/"+" "+h+"h "+m+"min "+s+"s "+" "+"week:"+day;
                     document.write(str);



