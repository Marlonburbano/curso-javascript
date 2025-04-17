let i = 0

while (i < 6) {
    i++
    if (i === 2) {
        continue;  // hace que salte cuando se cumpla la condicion
    }
    if (i === 4) {
        break; // hace que se termine cuando se cumple la condicion 
    }
    console.log(i)
}