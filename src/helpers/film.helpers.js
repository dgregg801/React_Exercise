/**
 * 
 * @param {Array} list List of Movie Object with a "director" prop
 * @param {String} director name of the director to find
 * @returns {Array} A filtered array of movies
 */

export function filterFilmsByDirector (list, director) {
    if (!director) return list;
    
    return list.filter((element) => {
        return element.director == director;
    });
}



/**
 * 
 * @param {Array} list Any array of objects 
 * @param {String} prop Any property name on the objects
 * @returns {Array} All unique values at the given property within list
*/

export function getListOf (list, key) {
    const result = [];

    for (let i = 0; i < list.length; i++) {
        const value = list[i][key];
        if (!result.includes(value))
       result.push(value);
    }

    return result;
}


/**
 * 
 * @param {Array} list A list of films
 * @returns {Object} Information about the list of films 
 */

export function getFilmStats(list) {
    const total = list.length;

    //Sum of all the movies' rotten tomato scores
    const acc_score = list.reduce((accumulator, current) => {
        return accumulator + Number(current.rt_score);
    }, 0);

    //The average of all the movies' rotten tomato scroes
    const avg_score = acc_score / total;

    let latest = 0;

    //Iterate over the array
    list.forEach((element) => {
        if(element.release_date > latest){
            latest = element.release_date;
        }
    });

    return {
        total, 
        acc_score, 
        avg_score, 
        latest
    }
}