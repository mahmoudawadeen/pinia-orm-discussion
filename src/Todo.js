import { Model } from 'pinia-orm'
import User from "@/User";

export default class Todo extends Model {
    static entity = 'todos'

    static fields() {
        return {
            id: this.uid(),
            title: this.string(''),
            userId: this.attr(null),
            user: this.belongsTo(User, 'userId')
        }
    }
    static piniaOptions = {
        persist: true
    }
}