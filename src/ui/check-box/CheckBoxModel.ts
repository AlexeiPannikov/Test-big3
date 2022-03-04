export class CheckBoxModel {
    text = ''

    value = ''

    isChecked = false

    constructor(obj?: Partial<CheckBoxModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}
