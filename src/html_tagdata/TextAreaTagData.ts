import HTMLTagDataBase from "./HTMLTagDataBase";

export default class TextAreaTagData extends HTMLTagDataBase {
    autofocus = false
    cols = "20"
    disabled = false
    form = ""
    maxlength = ""
    name = ""
    placeholder = ""
    readonly = false
    required = false
    rows = "2"
    wrap = ""
    constructor() {
        super()
        this.tagname = "textarea"
    }
}