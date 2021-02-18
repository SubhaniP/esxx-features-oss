import { LightningElement } from "lwc";

export default class WeakRefs extends LightningElement {
    weakRefs() {
        this.ref = new WeakRef(this);
        console.log(this.ref); // expected output: WeakRef
        this.ref.deref();
    }

    get code() {
        return this.weakRefs.toString();
    }
}
