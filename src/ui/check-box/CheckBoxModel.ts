export class CheckBoxModel {
    text = ''

    isChecked = false

    constructor(obj?: Partial<CheckBoxModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}
