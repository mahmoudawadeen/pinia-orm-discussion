import { Model } from 'pinia-orm'

export default class Audio extends Model {
    static entity = 'audios'

    static fields() {
        return {
            id: this.uid(),
            name: this.string(''),
        }
    }
    static piniaOptions = {
        persist: true
    }
}