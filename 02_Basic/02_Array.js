const marvel_heros = [ "thor","ironman","spiderman"]
const dc_heros = [ "superman","flash","batman"]
marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);


// ==>>> another method ===>using concat method
    let allHeros = marvel_heros.concat(dc_heros);
    console.log(allHeros);

    //Another method  ===>>> using sperad method
    const all_new_heros = [...marvel_heros,...dc_heros]
    console.log(all_new_heros);

    // Another method ====>>>how to use array in array >>>
    const another_array =[1,2,3, [4,5,6,], 7,[6,7[4,5]]];
    const real_another_array = another_array.flat(Infinity);
    console.log(real_another_array);


    // ====>>>> To check your given data is Array or not  
    console.log(Array.isArray("Subhan"));

    // ====>>>> How to convert a variable into an Array
    console.log(Array.from("Subhan"));

    // ===>>>Add three diferent variables into a single Array
    let score1 = 100
    let score2 = 200
    let score3 = 300
    console.log(Array.of(score1, score2, score3));


    