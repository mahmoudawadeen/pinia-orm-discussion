import {Model} from 'pinia-orm'
import Todo from './Todo.js'
import Audio from "@/Audio";
import Photo from "@/Photo";

export default class User extends Model {
    static entity = 'users'

    static fields() {
        return {
            id: this.uid(),
            name: this.string(''),
            avatarImgUrl: this.string(''),
            firstName: this.string(''),
            lastName: this.string(''),
            todos: this.hasMany(Todo, 'userId'),
            mediaId: this.attr(null),
            mediaType: this.attr(null),
            media: this.morphTo([Audio, Photo], 'mediaId', 'mediaType'),
        }
    }
}