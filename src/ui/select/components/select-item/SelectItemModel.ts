export class SelectItemModel {
    id = 0

    text = ''

    isActive = false

    constructor(obj?: Partial<SelectItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}
