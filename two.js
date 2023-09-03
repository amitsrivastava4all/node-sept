const fs = require('fs');
console.log('Code Start');
// fs.readFile(__filename,(err, buffer)=>{
//     if(err){
//         console.log('Error ', err);
//     }
//     else{
//         console.log('Content is ',buffer.toString());
//     }
// });
const stream = fs.createReadStream('/Users/amitsrivastava/Documents/mern-23-dt/day-10/04-InternalRelationShipOfOOJS.mp4');
stream.on('data', chunk=>{
    console.log('Chunk ', chunk);
})
stream.on('end', ()=>{
    console.log('Data End');
})
console.log('Code Ends');
