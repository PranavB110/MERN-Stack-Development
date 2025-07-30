let heroes=[
    ["IronMan","Thor","SpiderMan","Captian America"],
    ["Flying Jatt","Krish","ShaktiMan","HanuMan"]
]

for(let i=0;i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}