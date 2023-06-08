import { Model } from 'pinia-orm'

export default class Photo extends Model {
    static entity = 'photos'

    static fields() {
        return {
            id: this.uid(),
            name: this.string(''),
        }
    }
}