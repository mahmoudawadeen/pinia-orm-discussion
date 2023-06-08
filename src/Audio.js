import { Model } from 'pinia-orm'
import Todo from "@/Todo";

export default class Audio extends Model {
    static entity = 'audios'

    static fields() {
        return {
            id: this.uid(),
            name: this.string(''),
            // WHY ?!
            todos: this.hasMany(Todo, 'audioId'),
            media: this.morphMany(Todo, 'mediaId', 'mediaType'),
        }
    }
    static piniaOptions = {
        persist: true
    }
}