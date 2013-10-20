
var getChunk= function(input,num){
    var division=Math.floor(input.length/num);
    var reminder=input.length%num;
    var chunks=[];
    for(i=0;i<num-reminder;i++)
    {
    	var chunk= input.splice((input.length-division));
    	chunks.push(chunk);
    }
    for(i=0;i<reminder;i++)
    {
    	var chunky= input.splice(input.length-(division+1));
    	chunks.push(chunky);
    }
return chunks.reverse();
};
var input = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(getChunk(input,3));