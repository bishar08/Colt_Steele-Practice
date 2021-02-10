// console.log('Hello from Args file')

const args = process.argv.slice(2);
for (let arg of args){
  console.log(`Hi there, ${arg}`)
}