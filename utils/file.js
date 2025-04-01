const fs = require('fs').promises;
const filePath = require('../database.json');


async function readData(){
    try{
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    }catch(error){
    throw new Error('Internal Server Error');
    
    }
    }

async function writeData(data){
try{
    const data = await fs.readFile(filePath,JSON.stringify(data, null, 2));
}catch(error){
throw new Error('Internal Server Error');

}

}
module.exports = {readData, writeData};