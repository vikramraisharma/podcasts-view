class PodcastStore {
    constructor(initialState){
        this.state = initialState
    }

    setState (state) {
        this.state = state;
    }

    getState() {
        return this.state
    }
}

const podcastStore = new PodcastStore([])
export default podcastStore;