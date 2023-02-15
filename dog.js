//Create dog class here - will create the dog HTML

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setDogStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getDogHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this

        return `
            <img class='dog-pic' src='${avatar}' alt='image of dog'>
            <div class='about'>
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>  
            </div>
        `
    }
    
}

export default Dog