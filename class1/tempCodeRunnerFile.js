const map = new Map()
map.set('IN','INDIA')
map.set('JP','JAPAN')
map.set('KOR','KOREA')

console.log(map)
for (const key of map) {
    console.log(key)
    
}
for (const [key,value] of map) {
    console.log(key,':-',value)   
}