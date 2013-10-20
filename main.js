
var getChunk= function(input,num){
    var division=Math.floor(input.length/num);
    var remainder=input.length%num;
    var chunks=[];
    for(i=0;i<num-remainder;i++)
    {
    	var chunk= input.splice((input.length-division));
    	chunks.push(chunk);
    }
    for(i=0;i<remainder;i++)
    {
    	var chunky= input.splice(input.length-(division+1));
    	chunks.push(chunky);
    }
return chunks.reverse();
};
